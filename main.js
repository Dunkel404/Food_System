// Feito por: Dunkel, C4in 
// Script feito para: gerenciar compras e encaminhamento mensagens

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return; // Voltar para a pagina fora do carrinho
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Carrinho vazio</li>';
    } else {
        const itemCounts = cart.reduce((counts, item) => {
            counts[item] = (counts[item] || 0) + 1;
            return counts;
        }, {});
        for (const [item, count] of Object.entries(itemCounts)) {
            const li = document.createElement('li');
            li.textContent = `${item} x ${count}`;
            cartItems.appendChild(li);
        }
    }
}

function goToCart() {
    window.location.href = 'index.html';
}

// carregar o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});
