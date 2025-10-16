// =================================================================================
// Cart, Order, and Wishlist Functionality
// =================================================================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize cart display and count on page load
    updateCartDisplay();
    updateCartCount();

    // Event Listeners for cart and order UI elements
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', proceedToCheckout);
    }

    const addressForm = document.getElementById('delivery-address-form');
    if (addressForm) {
        addressForm.addEventListener('submit', function (e) {
            e.preventDefault();
            placeOrder();
        });
    }

    const addressModal = document.getElementById('address-modal');
    if (addressModal) {
        const closeBtn = addressModal.querySelector('.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => addressModal.style.display = 'none');
        }
        window.addEventListener('click', (e) => {
            if (e.target === addressModal) {
                addressModal.style.display = 'none';
            }
        });
    }
});

function addToCart(item) {
    if (!isLoggedIn()) {
        showNotification('Please log in to add items to your cart.', 'info');
        return;
    }
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let itemToAdd;
    // Handle both raw item objects (from deals) and item IDs (from menu)
    if (typeof item === 'object' && item !== null) {
        itemToAdd = { ...item };
    } else {
        const menuItem = window.menuItems.find(mi => mi.id === item);
        if (!menuItem) {
            console.error('Item with ID not found:', item);
            return;
        }
        itemToAdd = { ...menuItem };
    }
    
    const existingItem = cart.find(cartItem => cartItem.id === itemToAdd.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        itemToAdd.quantity = 1;
        cart.push(itemToAdd);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay(); // Also update the sidebar display
    showNotification(`${itemToAdd.name} added to cart!`, 'success');
}

function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
        const itemName = cart[itemIndex].name;
        cart.splice(itemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        updateCartCount();
        showNotification(`${itemName} removed from cart`, 'info');
    }
}

function updateQuantity(itemId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;

        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
            showNotification('Item removed from cart', 'info');
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        updateCartCount();
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');

    if (cartCount) {
        cartCount.textContent = totalItems;
        if (totalItems > 0) {
            cartCount.classList.add('show');
        } else {
            cartCount.classList.remove('show');
        }
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    if (!cartItemsContainer) return;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTax = document.getElementById('cart-tax');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const checkoutBtn = document.getElementById('checkout-btn');

    cartItemsContainer.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
            checkoutBtn.style.opacity = '0.6';
            checkoutBtn.style.cursor = 'not-allowed';
        }
    } else {
        if (checkoutBtn) {
            checkoutBtn.disabled = false;
            checkoutBtn.style.opacity = '1';
            checkoutBtn.style.cursor = 'pointer';
        }

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image || 'https://via.placeholder.com/150'}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Add event listeners to new buttons in the cart
        cartItemsContainer.querySelectorAll('.decrease').forEach(b => b.addEventListener('click', () => updateQuantity(parseInt(b.dataset.id), -1)));
        cartItemsContainer.querySelectorAll('.increase').forEach(b => b.addEventListener('click', () => updateQuantity(parseInt(b.dataset.id), 1)));
        cartItemsContainer.querySelectorAll('.remove-item').forEach(b => b.addEventListener('click', () => removeFromCart(parseInt(b.dataset.id))));
    }

    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    if (cartSubtotal) cartSubtotal.textContent = subtotal.toFixed(2);
    if (cartTax) cartTax.textContent = tax.toFixed(2);
    if (cartTotalAmount) cartTotalAmount.textContent = total.toFixed(2);
}

function proceedToCheckout() {
    if (!isLoggedIn()) {
        showNotification('Please log in to proceed to checkout.', 'info');
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'error');
        return;
    }

    const addressModal = document.getElementById('address-modal');
    if (addressModal) {
        addressModal.style.display = 'block';
    }
}

function placeOrder() {
    const addressForm = document.getElementById('delivery-address-form');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        showNotification('Your cart is empty.', 'error');
        return;
    }

    let isValid = true;
    const requiredFields = ['delivery_name', 'delivery_phone', 'delivery_address', 'delivery_city', 'delivery_pincode'];
    requiredFields.forEach(fieldName => {
        const input = addressForm.querySelector(`[name="${fieldName}"]`);
        if (input && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'red';
        } else if (input) {
            input.style.borderColor = '';
        }
    });

    if (!isValid) {
        showNotification('Please fill all required address fields.', 'error');
        return;
    }

    const orderData = {
        cart: cart,
        deliveryDetails: Object.fromEntries(new FormData(addressForm))
    };

    fetch('process_order.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.removeItem('cart');
            if (addressForm) {
                addressForm.reset();
            }
            const addressModal = document.getElementById('address-modal');
            if (addressModal) {
                addressModal.style.display = 'none';
            }
            showOrderConfirmation({ id: data.order_id });
        } else {
            showNotification(`Order failed: ${data.errors ? data.errors.join(', ') : 'Unknown error'}`, 'error');
        }
    })
    .catch(error => {
        console.error('Error placing order:', error);
        showNotification('An error occurred while placing your order. Please try again.', 'error');
    })
    .finally(() => {
        updateCartDisplay();
        updateCartCount();
    });
}

function showOrderConfirmation(order) {
    const modal = document.getElementById('order-confirmation-modal');
    if (modal) {
        const orderIdElement = document.getElementById('order-id');
        if (orderIdElement) orderIdElement.textContent = order.id;
        modal.style.display = 'block';
    }
}

function addToWishlist(itemId) {
    if (!isLoggedIn()) {
        showNotification('Please log in to add items to your wishlist.', 'info');
        return;
    }
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (!wishlist.includes(itemId)) {
        wishlist.push(itemId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification('Item added to wishlist!', 'success');
    } else {
        showNotification('Item already in wishlist!', 'info');
    }
}

// =================================================================================
// Utility Functions
// =================================================================================

function isLoggedIn() {
    // As per original code, this was hardcoded to true for testing.
    // In a real app, check for a session token or user object.
    return true; 
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    if (!container) {
        alert(message); // Fallback
        return;
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    container.appendChild(notification);

    // Animate in and out
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
