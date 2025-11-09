// Array of products
const products = [
    {
        name: "Kaos",
        price: 110000,
        stock: 5
    },
    {
        name: "Sandal",
        price: 20000,
        stock: 3
    },
    {
        name: "Rokok",
        price: 15000,
        stock: 4
    }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('produkContainer');
    productList.innerHTML = '';

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'card';

        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p class="price">Harga: Rp ${product.price}</p>
            <p class="stok">Stok: ${product.stock}</p>
            <button class="plus" onclick="changeStock(${index}, 1)">Tambah Stok</button>
            <button class="minus" onclick="changeStock(${index}, -1)">Kurangi Stok</button>
        `;

        productList.appendChild(productDiv);
    });
}

// Function to change stock
function changeStock(index, change) {
    if (change === -1 && products[index].stock === 0) {
        alert('Stok habis!');
        return;
    }

    products[index].stock += change;

    if (products[index].stock < 0) {
        products[index].stock = 0;
    }

    displayProducts();
}

// Initial display
displayProducts();
