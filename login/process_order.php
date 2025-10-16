<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'connect.php';

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

$errors = [];
$success = false;
$order_id = null;

try {
    // Validate required data
    if (!$data) {
        throw new Exception('No data received');
    }

    if (!isset($data['cart']) || empty($data['cart'])) {
        throw new Exception('Cart is empty');
    }

    if (!isset($data['deliveryDetails'])) {
        throw new Exception('Delivery details are required');
    }

    $cart = $data['cart'];
    $deliveryDetails = $data['deliveryDetails'];

    // Validate delivery details
    $requiredFields = ['delivery_name', 'delivery_phone', 'delivery_address', 'delivery_city', 'delivery_pincode'];
    foreach ($requiredFields as $field) {
        if (!isset($deliveryDetails[$field]) || empty(trim($deliveryDetails[$field]))) {
            $errors[] = ucfirst(str_replace('_', ' ', $field)) . ' is required';
        }
    }

    if (!empty($errors)) {
        throw new Exception('Validation errors: ' . implode(', ', $errors));
    }

    // Calculate totals
    $subtotal = 0;
    foreach ($cart as $item) {
        $subtotal += $item['price'] * $item['quantity'];
    }
    $tax = $subtotal * 0.05; // 5% tax
    $total = $subtotal + $tax;

    // Generate order number
    $orderNumber = 'BB' . date('Ymd') . rand(1000, 9999);

    // Start transaction
    $conn->begin_transaction();

    try {
        // Insert order
        $stmt = $conn->prepare("INSERT INTO orders (order_number, order_type, total_amount, tax_amount, final_amount, payment_method, payment_status, special_instructions, estimated_delivery_time) VALUES (?, 'delivery', ?, ?, ?, 'cash', 'pending', ?, DATE_ADD(NOW(), INTERVAL 30 MINUTE))");

        $stmt->bind_param("sdddss", $orderNumber, $subtotal, $tax, $total, $deliveryDetails['delivery_landmark'] ?? '');

        if (!$stmt->execute()) {
            throw new Exception('Failed to create order: ' . $stmt->error);
        }

        $order_id = $conn->insert_id;
        $stmt->close();

        // Insert order items
        $stmt = $conn->prepare("INSERT INTO order_items (order_id, menu_item_id, quantity, unit_price, total_price) VALUES (?, ?, ?, ?, ?)");

        foreach ($cart as $item) {
            // Find menu item ID (since cart might have different structure)
            $menuStmt = $conn->prepare("SELECT id FROM menu_items WHERE name = ? LIMIT 1");
            $menuStmt->bind_param("s", $item['name']);
            $menuStmt->execute();
            $menuResult = $menuStmt->get_result();

            if ($menuResult->num_rows > 0) {
                $menuItem = $menuResult->fetch_assoc();
                $menuItemId = $menuItem['id'];
            } else {
                // If menu item not found, skip this item
                continue;
            }
            $menuStmt->close();

            $quantity = $item['quantity'];
            $unitPrice = $item['price'];
            $totalPrice = $quantity * $unitPrice;

            $stmt->bind_param("iidds", $order_id, $menuItemId, $quantity, $unitPrice, $totalPrice);

            if (!$stmt->execute()) {
                throw new Exception('Failed to add order item: ' . $stmt->error);
            }
        }

        $stmt->close();

        // Commit transaction
        $conn->commit();

        $success = true;

    } catch (Exception $e) {
        // Rollback on error
        $conn->rollback();
        throw $e;
    }

} catch (Exception $e) {
    $errors[] = $e->getMessage();
}

// Return response
$response = [
    'success' => $success,
    'order_id' => $order_id,
    'order_number' => $orderNumber ?? null
];

if (!$success) {
    $response['errors'] = $errors;
} else {
    $response['message'] = 'Order placed successfully!';
}

echo json_encode($response);

// Close connection
$conn->close();
?>