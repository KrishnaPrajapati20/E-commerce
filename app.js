const products = [
    { id: 1, name: "Classic Leather Handbag", price: 2499, image: "bag3.webp", description: "Elegant leather handbag for Office laptop use." },
    { id: 2, name: "Stylish Tote Bag", price: 1899, image: "bag4.webp", description: "Spacious tote bag with a modern design." },
    { id: 3, name: "Mini Shoulder Bag", price: 1299, image: "Travel bag 2.webp", description: "Compact and trendy shoulder bag for casual outings." },
    { id: 4, name: "Designer Party Handbag", price: 499, image: "gym bag1.avif", description: "Comfortable Gym Bag." },
    { id: 5, name: "Luxury Watch", price: 4999, image: "watch1.jpg", description: "Premium watch with stainless steel strap." },
    { id: 6, name: "Casual Watch", price: 2299, image: "watch2.jpg", description: "Simple strap watch for everyday wear." },
    { id: 7, name: "Modern Leather Watch", price: 5499, image: "watch3.jpg", description: "Simple leather strap watch for occasional wear." },
    { id: 8, name: "Casual Watch", price: 3999, image: "watch 4.webp", description: "Classic rosy watch with minimal design." },
    { id: 9, name: "Black Earrings", price: 999, image: "earring1.jpeg", description: "Delicate pearl drop earrings for a graceful look." },
    { id: 10, name: "Golden Earrings", price: 799, image: "earrings2.jpg", description: "Trendy golden hoop earrings for casual wear." },
    { id: 11, name: "Diamond Stud Earrings", price: 1499, image: "earring3.jpg", description: "Sparkling diamond stud earrings for special events." },
    { id: 12, name: "White Sports Sneakers", price: 8999, image: "sneaker1.jpg", description: "Comfortable white sneakers for sports and casual wear." },
    { id: 13, name: "High-Top Sneakers", price: 5199, image: "sneaker 2.jpg", description: "Stylish high-top sneakers with premium material." },
    { id: 14, name: "Classic Red Sneakers", price: 2799, image: "sneaker3.webp", description: "All-red sneakers with a timeless design." },
    { id: 15, name: "MRF Bat", price: 2599, image: "bat2.webp", description: "Virat Kohli Run Machine Bat." },
    { id: 16, name: "DSC Bat", price: 1199, image: "bat1.webp", description: "Leather Bat." },
    { id: 17, name: " SS Bat leather", price: 2899, image: "Bat3.jpg", description: "SS bat for boys." },
    { id: 18, name: "Doni Bat", price: 1499, image: "dhoni_bat.jpg", description: "Sunridges Bat play in ipl." },
    { id: 19, name: "Elegant Gold Necklace", price: 9599, image: "Neckless.jpg", description: " gold necklace for parties." },
    { id: 20, name: "Silver Diamond Ring", price: 51799, image: "Diamond ring.jpg", description: "Sparkling golden ring with diamond stone." }
];
const productContainer = document.getElementById("product-list");
if (productContainer) {
    productContainer.innerHTML = "";
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <p class="description">${product.description}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;

        productCard.querySelector(".add-to-cart").addEventListener("click", () => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let existingProduct = cart.find(item => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} added to cart!`);
        });

        productContainer.appendChild(productCard);
    });
}