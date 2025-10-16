<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brew&Bites Cafe - Best Coffee & Food</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="animations.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
</head>

<body>
    <!-- Header Section -->
    <header>
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <div class="logo-icon">
                        <i class="fas fa-mug-hot"></i>
                    </div>
                    <span>Brew&Bites Cafe</span>
                </div>
                <ul class="nav-menu">
                    <li><a href="#home" class="nav-link active">Home</a></li>
                    <li><a href="#menu" class="nav-link">Menu</a></li>
                    <li><a href="#deals" class="nav-link">Deals</a></li>
                    <li><a href="#about" class="nav-link">About</a></li>
                    <li class="search-container">
                        <input type="text" placeholder="Search items..." id="search-bar">
                        <button id="search-btn"><i class="fas fa-search"></i></button>

                    <li><a href="#" class="nav-link" id="wishlist-link"><i class="far fa-heart"></i></a></li>
                    <li><a href="" class="nav-link" id="cart-link"><i class="fas fa-shopping-cart"></i> <span
                                class="cart-count">0</span></a></li>
                    <li><a href="login.php" class="nav-link" id="login-link">Login</a></li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-background"></div>
        <div class="hero-content">
            <h1 class="hero-title">Welcome to <span class="highlight">Brew&Bites</span> Cafe</h1>
            <p class="hero-subtitle">Experience the perfect blend of artisanal coffee, delicious food, and cozy ambiance
            </p>
            <div class="hero-buttons">
                <a href="#menu" class="btn btn-primary pulse">Explore Menu</a>
                <a href="#booking" class="btn btn-secondary" id="book-table-btn">Book a Table</a>
            </div>
        </div>
        <div class="hero-features">
            <div class="feature-card">
                <i class="fas fa-coffee"></i>
                <h3>Premium Coffee</h3>
                <p>Freshly brewed from quality beans</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-utensils"></i>
                <h3>Fresh Food</h3>
                <p>Daily prepared with love</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-shipping-fast"></i>
                <h3>Fast Delivery</h3>
                <p>Quick and reliable service</p>
            </div>
        </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="menu-section">
        <div class="container">
            <h2 class="section-title">Our Delicious Menu</h2>
            <p class="section-subtitle">Discover our wide range of beverages and snacks</p>

            <div class="category-tabs">
                <button class="tab-btn active" data-category="all">All Items</button>
                <button class="tab-btn" data-category="coffee">Coffee</button>
                <button class="tab-btn" data-category="tea">Tea</button>
                <button class="tab-btn" data-category="milkshake">Milkshakes</button>
                <button class="tab-btn" data-category="sandwich">Sandwiches</button>
                <button class="tab-btn" data-category="pastry">Pastries</button>
                <button class="tab-btn" data-category="puff">Puffs</button>
                <button class="tab-btn" data-category="pizza">Pizzas</button>
                <button class="tab-btn" data-category="snack">Snacks</button>
                <button class="tab-btn" data-category="icecream">Ice Creams</button>
            </div>

            <div class="menu-items" id="menu-items">
                <!-- Menu items will be loaded by JavaScript -->
            </div>
        </div>
    </section>

    <!-- Deals Section -->
    <section id="deals" class="deals-section">
        <div class="container">
            <h2 class="section-title">Special Offers & Deals</h2>
            <p class="section-subtitle">Don't miss out on these amazing offers</p>

            <div class="deals-container">
                <div class="deal-card">
                    <div class="deal-badge">BREAKFAST DEAL</div>
                    <div class="deal-image">
                        <img src="https://d39312246fcaf6863083.cdn6.editmysite.com/uploads/b/e5d53d90-001c-11ea-adf3-29f01faec0ff/c64c4f10f07cf587a8875341a003ce04.jpeg?width=2400&optimize=medium"
                            alt="Breakfast Combo">
                    </div>
                    <div class="deal-content">
                        <h3>Morning Bliss Combo</h3>
                        <p>Any Coffee + Croissant of your choice</p>
                        <div class="deal-price">
                            <span class="current-price">₹199</span>
                            <span class="original-price">₹249</span>
                        </div>
                        <button class="btn btn-primary add-deal-to-cart" data-deal="breakfast">Add to Cart</button>
                    </div>
                </div>

                <div class="deal-card featured">
                    <div class="deal-badge">POPULAR</div>
                    <div class="deal-image">
                        <img src="https://www.tastingtable.com/img/gallery/11-minimum-tips-you-need-when-making-tea-sandwiches/serve-tea-sandwiches-immediately-1707745643.jpg"
                            alt="Lunch Special">
                    </div>
                    <div class="deal-content">
                        <h3>Lunch Special</h3>
                        <p>Sandwich + Coffee/Tea + Cookie</p>
                        <div class="deal-price">
                            <span class="current-price">₹349</span>
                            <span class="original-price">₹429</span>
                        </div>
                        <button class="btn btn-primary add-deal-to-cart" data-deal="lunch">Add to Cart</button>
                    </div>
                </div>

                <div class="deal-card">
                    <div class="deal-badge">EVENING OFFER</div>
                    <div class="deal-image">
                        <img src="https://images.herzindagi.info/image/2019/Feb/tea-time-snacks-recipes.jpg"
                            alt="Evening Snack">
                    </div>
                    <div class="deal-content">
                        <h3>Evening Snack Pack</h3>
                        <p>Any Pastry + Tea/Coffee</p>
                        <div class="deal-price">
                            <span class="current-price">₹249</span>
                            <span class="original-price">₹299</span>
                        </div>
                        <button class="btn btn-primary add-deal-to-cart" data-deal="evening">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Table Booking Section -->
    <section id="booking" class="booking">
        <div class="container">
            <h2 class="section-title">Book Your Table</h2>

            <div class="booking-container">
                <div class="booking-image">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/00f51f103737437.5f538e17a7d21.jpg"
                        alt="Cafe Interior">
                </div>

                <div class="booking-form">
                    <form id="table-booking-form">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>

                        <div class="form-group">
                            <label for="date">Date</label>
                            <input type="date" id="date" name="date" required>
                        </div>

                        <div class="form-group">
                            <label for="time">Time</label>
                            <input type="time" id="time" name="time" required>
                        </div>

                        <div class="form-group">
                            <label for="guests">Number of Guests</label>
                            <select id="guests" name="guests" required>
                                <option value="1">1 Person</option>
                                <option value="2">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                                <option value="5">5 People</option>
                                <option value="6">6 People</option>
                                <option value="7">7+ People</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="special-requests">Special Requests</label>
                            <textarea id="special-requests" name="special-requests" rows="3"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary" style="width: 100%;">Book Table</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="container">
            <h2 class="section-title">About Brew&Bites Cafe</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>Welcome to Your Favorite Coffee Destination</h3>
                    <p>At Brew&Bites Cafe, we believe that great coffee and delicious food can make any day better.
                        we've been serving the community with passion and dedication.</p>
                    <p>Our baristas are trained to craft the perfect cup of coffee, and our chefs prepare fresh,
                        delicious meals using locally sourced ingredients whenever possible.</p>

                    <div class="stats">
                        <div class="stat">
                            <span class="stat-number">300+</span>
                            <span class="stat-label">Happy Customers</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">25+</span>
                            <span class="stat-label">Menu Items</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">2</span>
                            <span class="stat-label">Years Serving</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <i class="fas fa-mug-hot"></i>
                        <span>Brew&Bites Cafe</span>
                    </div>
                    <p>The perfect place for coffee lovers and food enthusiasts to relax, work, and enjoy quality time.
                    </p>
                    <div class="footer-social">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#deals">Deals</a></li>
                        <li><a href="#booking">Book Table</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <div class="contact-info">
                        <p><i class="fas fa-map-marker-alt"></i> 123 Cafe Street, Food City</p>
                        <p><i class="fas fa-phone"></i> +91 98765 43210</p>
                        <p><i class="fas fa-envelope"></i> info@brewbitescafe.com</p>
                        <p><i class="fas fa-clock"></i> Mon-Sun: 7:00 AM - 11:00 PM</p>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>Newsletter</h4>
                    <p>Subscribe to get special offers and updates</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Your email address" required>
                        <button type="submit"><i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2023 Brew&Bites Cafe. All rights reserved. | Designed with <i class="fas fa-heart"></i> for
                    coffee lovers</p>
            </div>
        </div>
    </footer>
 
    <!-- Cart Sidebar -->
    <div id="cart-sidebar" class="cart-sidebar">
        <div class="cart-header">
            <h3>Your Order</h3>
            <span class="close-cart">&times;</span>
        </div>
        <div class="cart-content">
            <div class="cart-items" id="cart-items-container">
                <!-- Cart items will be loaded here -->
            </div>
            <div class="cart-summary" id="cart-summary">
                <div class="cart-total">
                    <span>Subtotal: ₹<span id="cart-subtotal">0</span></span>
                </div>
                <div class="cart-tax">
                    <span>Tax (5%): ₹<span id="cart-tax">0</span></span>
                </div>
                <div class="cart-grand-total">
                    <span>Total: ₹<span id="cart-total-amount">0</span></span>
                </div>
            </div>

            <button class="btn btn-primary" id="checkout-btn" style="width: 90%; margin: 20px auto; display: block;">Proceed to Checkout</button>
        </div>
    </div>

    <!-- Address Modal -->
<div id="address-modal" class="modal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);">
    <div class="modal-content address-modal-content" style="background-color: #fefefe; margin: 5% auto; padding: 20px; border: 1px solid #888; width: 80%; max-width: 500px; max-height: 80vh; overflow-y: auto;">
        <span class="close" style="color: #aaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer;">&times;</span>
        <div class="address-form-container">
            <h4>Delivery Address</h4>
            <form id="delivery-address-form" method="POST" action="process_order.php">
                <div class="form-group">
                    <label for="delivery-name">Full Name *</label>
                    <input type="text" id="delivery-name" name="delivery_name" required style="width: 100%; padding: 8px; margin: 5px 0 15px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
                </div>
                <div class="form-group">
                    <label for="delivery-phone">Phone Number *</label>
                    <input type="tel" id="delivery-phone" name="delivery_phone" pattern="[0-9]{10}" required style="width: 100%; padding: 8px; margin: 5px 0 15px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
                </div>
                <div class="form-group">
                    <label for="delivery-address">Full Address *</label>
                    <textarea id="delivery-address" name="delivery_address" rows="3" required style="width: 100%; padding: 8px; margin: 5px 0 15px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;"></textarea>
                </div>
                <div class="form-group">
                    <label for="delivery-city">City *</label>
                    <input type="text" id="delivery-city" name="delivery_city" required style="width: 100%; padding: 8px; margin: 5px 0 15px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
                </div>
                <div class="form-group">
                    <label for="delivery-pincode">Pincode *</label>
                    <input type="text" id="delivery-pincode" name="delivery_pincode" pattern="[0-9]{6}" required style="width: 100%; padding: 8px; margin: 5px 0 15px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
                </div>
                <div class="form-group">
                    <label for="delivery-landmark">Landmark (Optional)</label>
                    <input type="text" id="delivery-landmark" name="delivery_landmark" style="width: 100%; padding: 8px; margin: 5px 0 15px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
                </div>
                <div class="form-buttons">
                    <button type="submit" class="btn btn-primary" style="background-color: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">Place Order</button>
                </div>
            </form>
        </div>
    </div>
</div>

    <!-- Order Confirmation Modal -->
    <div id="order-confirmation-modal" class="modal">
        <div class="modal-content confirmation-modal">
            <span class="close">&times;</span>
            <div class="confirmation-content">
                <div class="confirmation-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2>Order Placed Successfully!</h2>
                <p>Your order has been confirmed and will be delivered soon.</p>
                <div class="order-details">
                    <p><strong>Order ID:</strong> <span id="order-id">BB-${Date.now()}</span></p>
                    <p><strong>Estimated Delivery:</strong> <span id="delivery-time">30-45 minutes</span></p>
                </div>
                <button class="btn btn-primary" id="continue-shopping">Continue Shopping</button>
            </div>
        </div>
    </div>

    <!-- Notification Container -->
    <div id="notification-container"></div>
    <script src="script.js"></script>
    <script src="cart.js"></script>
</body>

</html>