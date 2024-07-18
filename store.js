const cart = [];
const cartButton = document.getElementById('cart-button');
const cartContainer = document.getElementById('cart-container');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const title = product.querySelector('.product-title').innerText;
        const price = parseFloat(product.querySelector('.product-price').innerText.replace('$', ''));
        
        cart.push({ title, price });
        updateCart();
    });
});

cartButton.addEventListener('click', () => {
    cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerText = `${item.title} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}
