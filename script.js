// Function for the main search bar
function searchFunction() {
    const input = document.querySelector('.search-container input').value;
    if(input) {
        alert('Searching for: ' + input);
        // In a real backend, this would redirect to a search results page
    } else {
        alert('Please enter a product name to search.');
    }
}

// Function for the "Contact Seller" buttons
function alertUser() {
    alert("To contact the seller, please Log In first.");
}

// Handle Login Form Submission (Simulation)
const loginForm = document.getElementById('loginForm');
if(loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page from reloading
        const email = document.getElementById('email').value;
        
        if(email.includes('.edu') || email.includes('college')) {
            alert('Login Successful! Welcome back.');
            window.location.href = "index.html"; // Redirect to home
        } else {
            alert('Please use your official College Email ID.');
        }
    });
}
// Handle Sign Up Form Submission
const signupForm = document.getElementById('signupForm');
if(signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page reload
        
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // 1. Check if passwords match
        if (password !== confirmPassword) {
            alert("Error: Passwords do not match!");
            return;
        }

        // 2. Validate College Email (Simple check)
        if(email.includes('.edu') || email.includes('college')) {
            alert('Registration Successful! Redirecting to Login...');
            window.location.href = "login.html"; // Redirect to Login page
        } else {
            alert('Error: Please use your official College Email ID to register.');
        }
    });
}
// Image Preview for Sell Page
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const output = document.getElementById('imgPreview');
        output.src = reader.result;
        output.style.display = 'block';
    }
    reader.readAsDataURL(event.target.files[0]);
}

// Handle Sell Form Submit
const sellForm = document.getElementById('sellForm');
if(sellForm) {
    sellForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Success! Your product has been listed for sale.");
        window.location.href = "buy.html"; // Redirect to buy page to see it (simulated)
    });
}
/* --- FAKE DATABASE OF PRODUCTS --- */
const productsDB = [
    {
        id: 1,
        title: "Engineering Physics",
        category: "books",
        price: "₹300",
        image: "fa-book" // Using font-awesome icon instead of real image for now
    },
    {
        id: 2,
        title: "Casio Scientific Calc",
        category: "electronics",
        price: "₹850",
        image: "fa-calculator"
    },
    {
        id: 3,
        title: "Hero Cycle (Black)",
        category: "vehicles",
        price: "₹3000",
        image: "fa-bicycle"
    },
    {
        id: 4,
        title: "White Lab Coat (M)",
        category: "lab",
        price: "₹400",
        image: "fa-flask"
    },
    {
        id: 5,
        title: "Chemistry Notes (Sem 1)",
        category: "books",
        price: "₹150",
        image: "fa-book-open"
    },
    {
        id: 6,
        title: "Laptop Stand",
        category: "electronics",
        price: "₹500",
        image: "fa-laptop"
    }
];

/* --- FUNCTION TO LOAD CATEGORY PAGE --- */
function loadCategoryItems() {
    // 1. Get the category from the URL (e.g., category.html?type=books)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryType = urlParams.get('type');

    // 2. Update the Page Title
    const titleElement = document.getElementById('category-title');
    const container = document.getElementById('category-products');
    
    if(categoryType) {
        titleElement.innerText = categoryType + " for Sale";
        
        // 3. Filter products that match this category
        const filteredProducts = productsDB.filter(product => product.category === categoryType);

        if(filteredProducts.length > 0) {
            container.innerHTML = ""; // Clear existing content
            
            // 4. Create HTML for each product
            filteredProducts.forEach(product => {
                const productHTML = `
                    <div class="product-card">
                        <div class="product-img"><i class="fas ${product.image} fa-3x"></i></div>
                        <div class="product-info">
                            <h4>${product.title}</h4>
                            <p class="price">${product.price}</p>
                            <button class="btn-buy" onclick="alert('Contacting Seller...')">Chat with Seller</button>
                        </div>
                    </div>
                `;
                container.innerHTML += productHTML;
            });
        } else {
            document.getElementById('no-products-msg').style.display = 'block';
            document.getElementById('no-products-msg').innerText = "No items found in " + categoryType;
        }
    }
}
/* --- Toggle Side Menu --- */
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    if (menu.style.width === "300px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "300px";
    }
}

// Close menu if user clicks outside of it
window.onclick = function(event) {
    const menu = document.getElementById("sideMenu");
    if (event.target == menu) {
        menu.style.width = "0";
    }
}