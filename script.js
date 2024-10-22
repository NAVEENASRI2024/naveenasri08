const fetchProducts = async () => {
    try {
        const response = await fetch('https://api.meesho.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

const displayProducts = (products) => {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: ₹${product.price}</p>
            <img src="${product.image}" alt="${product.name}">
        `;
        productContainer.appendChild(productDiv);
    });
};

fetchProducts().then(products => displayProducts(products));