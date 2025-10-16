// =================================================================================
// Main Website Initialization and UI Logic
// =================================================================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMenu();
    initModals();
    initSearch();
    initScrollEffects();
    initDeals();
});

// Navigation Functions
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.navbar');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        }
    });
}

// Menu Functions
function initMenu() {
    const menuItems = [
        { id: 1, name: "Espresso", category: "coffee", description: "Strong and rich Italian coffee shot", price: 120, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 2, name: "Cappuccino", category: "coffee", description: "Espresso with steamed milk and foam", price: 150, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 3, name: "Black Coffee", category: "coffee", description: "Pure black coffee without milk", price: 100, image: "https://tse2.mm.bing.net/th/id/OIP.9KMo8fujro_56c47kaWIXAHaGl?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { id: 4, name: "Americano", category: "coffee", description: "Espresso with hot water", price: 130, image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 5, name: "Caramel Macchiato", category: "coffee", description: "Espresso with caramel and steamed milk", price: 180, image: "https://i0.wp.com/gatherforbread.com/wp-content/uploads/2017/04/Iced-Caramel-Macchiato-16.jpg?resize=683%2C1024&ssl=1" },
        { id: 6, name: "Green Tea", category: "tea", description: "Healthy and refreshing green tea", price: 80, image: "https://vaya.in/recipes/wp-content/uploads/2018/05/Green-Tea.jpg" },
        { id: 7, name: "Iced Tea", category: "tea", description: "Chilled tea with lemon flavor", price: 110, image: "https://thumbs.dreamstime.com/z/iced-tea-21821221.jpg" },
        { id: 8, name: "Masala Chai", category: "tea", description: "Traditional Indian spiced tea", price: 60, image: "https://img.freepik.com/premium-photo/masala-tea-with-spices_117406-912.jpg" },
        { id: 9, name: "Chocolate Milkshake", category: "milkshake", description: "Rich chocolate milkshake with cream", price: 160, image: "https://img.freepik.com/premium-photo/photo-decadent-vanilla-milkshake-with-cake-pieces-cookie-crumbles-chocolate_1207718-1372.jpg" },
        { id: 10, name: "Oreo Milkshake", category: "milkshake", description: "Creamy milkshake with Oreo cookies", price: 180, image: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-1.jpg" },
        { id: 11, name: "Brownie Milkshake", category: "milkshake", description: "Chocolate brownie blended milkshake", price: 190, image: "https://www.queensleeappetit.com/wp-content/uploads/2018/09/Brownie-Milkshake-5.jpg" },
        { id: 12, name: "Vanilla Milkshake", category: "milkshake", description: "Classic vanilla milkshake", price: 150, image: "https://tse2.mm.bing.net/th/id/OIP._xdqmMcRrk1SlrqNNpdWsAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { id: 13, name: "Club Sandwich", category: "sandwich", description: "Triple decker with chicken and veggies", price: 220, image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 14, name: "Grilled Cheese", category: "sandwich", description: "Toasted bread with melted cheese", price: 180, image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 15, name: "Veggie Delight", category: "sandwich", description: "Fresh vegetables with herb mayo", price: 160, image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 16, name: "Croissant", category: "pastry", description: "Buttery and flaky French pastry", price: 90, image: "https://i.pinimg.com/originals/41/91/96/419196bf7c6851dd5a73687f723a5340.jpg" },
        { id: 17, name: "Blueberry Muffin", category: "pastry", description: "Soft muffin with blueberry filling", price: 110, image: "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2019/09/vegan-blueberry-muffins.jpg" },
        { id: 18, name: "Chocolate Donut", category: "pastry", description: "Soft donut with chocolate glaze", price: 80, image: "https://tse4.mm.bing.net/th/id/OIP.9xL_eQ2FrxTlYtav9ykuqgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { id: 19, name: "Egg Puff", category: "puff", description: "Flaky puff with egg filling", price: 70, image: "https://2.bp.blogspot.com/-4-QQE5FKU8A/XMSomFd7yRI/AAAAAAAAdRk/YYcfRnJ7_-Ij0Gk0-8L9ZiloxAg9kU32gCLcBGAs/s1600/masala-egg-puffs.jpg" },
        { id: 20, name: "Veg Puff", category: "puff", description: "Vegetable filled puff pastry", price: 60, image: "https://carveyourcraving.com/wp-content/uploads/2021/11/veg-puff.jpg" },
        { id: 21, name: "Chicken Puff", category: "puff", description: "Chicken filled savory puff", price: 90, image: "https://th.bing.com/th/id/R.5f1d9991fc1183832022a90a63ad820b?rik=eyvv3e1KtBJWiA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-NTWwvjZsonA%2fTz30mIr_RTI%2fAAAAAAAAC7c%2fiVdVHvpJyuQ%2fs1600%2fIMG_8531.jpg&ehk=S4nIG8phCBATxKRpi%2b6Kpj4wlupiFXkcL2OaKVC26bU%3d&risl=&pid=ImgRaw&r=0" },
        { id: 22, name: "Margherita Pizza", category: "pizza", description: "Classic pizza with tomato and cheese", price: 280, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 23, name: "Pepperoni Pizza", category: "pizza", description: "Pizza with pepperoni and cheese", price: 320, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 24, name: "French Fries", category: "snack", description: "Crispy golden fries with seasoning", price: 100, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 25, name: "Samosa", category: "snack", description: "Crispy pastry with potato filling", price: 50, image: "https://wallpaperaccess.com/full/2069188.jpg" },
        { id: 26, name: "Vanilla Ice Cream", category: "icecream", description: "Classic vanilla bean ice cream", price: 120, image: "https://www.theroastedroot.net/wp-content/uploads/2023/06/dairy-free-vanilla-ice-cream-8-735x1103.jpg" },
        { id: 27, name: "Chocolate Ice Cream", category: "icecream", description: "Rich chocolate ice cream", price: 130, image: "https://www.willflyforfood.net/wp-content/uploads/2022/05/ice-cream-flavors-chocolate.jpg" },
        { id: 28, name: "Strawberry Ice Cream", category: "icecream", description: "Creamy strawberry flavored ice cream", price: 130, image: "https://tse1.explicit.bing.net/th/id/OIP.eJAyPuRW3h1aR55F-JNFZQHaLG?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { id: 29, name: "Butterscotch Ice Cream", category: "icecream", description: "Sweet butterscotch flavored ice cream", price: 140, image: "https://tse3.mm.bing.net/th/id/OIP.b8n7f_rFBZEhEKJZiCivXwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ];
    
    // Make menu items globally accessible for cart.js
    window.menuItems = menuItems;
    
    const menuContainer = document.getElementById('menu-items');
    const categoryTabs = document.querySelectorAll('.tab-btn');
    
    function renderMenuItems(category = 'all') {
        if (!menuContainer) return;
        menuContainer.innerHTML = '';
        
        const filteredItems = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === category);
        
        if (filteredItems.length === 0) {
            menuContainer.innerHTML = '<p class="no-items">No items found in this category</p>';
            return;
        }
        
        filteredItems.forEach(item => {
            const menuItemEl = document.createElement('div');
            menuItemEl.className = 'menu-item card-hover';
            menuItemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                <div class="menu-item-content">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <p class="menu-item-desc">${item.description}</p>
                    <div class="menu-item-price">₹${item.price}</div>
                    <div class="menu-item-actions">
                        <button class="add-to-cart" data-id="${item.id}">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="add-to-wishlist" data-id="${item.id}">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            `;
            menuContainer.appendChild(menuItemEl);
        });
        
        // Add event listeners to the new buttons (calls global functions from cart.js)
        menuContainer.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                addToCart(itemId);
            });
        });
        
        menuContainer.querySelectorAll('.add-to-wishlist').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                addToWishlist(itemId);
            });
        });
    }
    
    // Initial render
    renderMenuItems();
    
    // Category tab functionality
    if (categoryTabs) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                categoryTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const category = this.getAttribute('data-category');
                renderMenuItems(category);
            });
        });
    }
}

// Deals Section Functionality
function initDeals() {
    const dealButtons = document.querySelectorAll('.add-deal-to-cart');
    
    dealButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dealType = this.getAttribute('data-deal');
            addDealToCart(dealType);
        });
    });
}

function addDealToCart(dealType) {
    const deals = {
        breakfast: { id: 1001, name: "Morning Bliss Combo", price: 199, image: "https://d39312246fcaf6863083.cdn6.editmysite.com/uploads/b/e5d53d90-001c-11ea-adf3-29f01faec0ff/c64c4f10f07cf587a8875341a003ce04.jpeg?width=2400&optimize=medium" },
        lunch: { id: 1002, name: "Lunch Special", price: 349, image: "https://www.tastingtable.com/img/gallery/11-minimum-tips-you-need-when-making-tea-sandwiches/serve-tea-sandwiches-immediately-1707745643.jpg" },
        evening: { id: 1003, name: "Evening Snack Pack", price: 249, image: "https://images.herzindagi.info/image/2019/Feb/tea-time-snacks-recipes.jpg" }
    };
    
    const deal = deals[dealType];
    if (deal) {
        addToCart(deal); // Calls global function from cart.js
    }
}

// Modal and UI Interaction Functions
function initModals() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartLink = document.getElementById('cart-link');
    const closeCart = document.querySelector('.close-cart');
    const orderConfirmationModal = document.getElementById('order-confirmation-modal');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const allModals = document.querySelectorAll('.modal');
    const closeModalBtns = document.querySelectorAll('.close');

    // Cart sidebar
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (cartSidebar) cartSidebar.classList.add('open');
            updateCartDisplay(); // Refresh cart content when opening
        });
    }
    if (closeCart) {
        closeCart.addEventListener('click', () => cartSidebar.classList.remove('open'));
    }

    // Order confirmation modal
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => orderConfirmationModal.style.display = 'none');
    }

    // General modal close logic
    closeModalBtns.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function(e) {
        allModals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Table Booking Form Submission
    const tableBookingForm = document.getElementById('table-booking-form');
    if (tableBookingForm) {
        tableBookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!isLoggedIn()) {
                showNotification('Please log in to book a table.', 'info');
                return;
            }
            showNotification('Table booking request submitted successfully!', 'success');
            this.reset();
        });
    }
}

// Search Functionality
function initSearch() {
    const searchBar = document.getElementById('search-bar');
    const searchBtn = document.getElementById('search-btn');
    
    function performSearch() {
        const searchTerm = searchBar.value.trim().toLowerCase();
        if (searchTerm) {
            showNotification(`Searching for: ${searchTerm}`, 'info');
            // In a real app, you would filter items or make an API call
        }
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchBar) {
        searchBar.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
}

// Scroll Effects for Animations
function initScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('section').forEach(section => observer.observe(section));
}

// Animated Background for Modals
function createFallingFood(container) {
    if (!container) return;
    container.innerHTML = '';
    const foodItems = ['☕', '🍵', '🍰', '🥪', '🍦', '🥤', '🍪', '🍩', '🧁'];
    for (let i = 0; i < 15; i++) {
        const food = document.createElement('div');
        food.className = 'food-item';
        food.textContent = foodItems[Math.floor(Math.random() * foodItems.length)];
        const left = Math.random() * 100;
        const duration = 3 + Math.random() * 5;
        const delay = Math.random() * 5;
        food.style.left = `${left}%`;
        food.style.animationDuration = `${duration}s`;
        food.style.animationDelay = `${delay}s`;
        container.appendChild(food);
    }
}