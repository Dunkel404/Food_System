let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return; 
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

            if (document.location.pathname.endsWith('tela.carrinho.html')) {
                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remover';
                removeBtn.onclick = () => {
                    removeFromCart(item);
                };
                li.appendChild(removeBtn);
            }

            cartItems.appendChild(li);
        }
    }
}

function removeFromCart(item) {
    const index = cart.indexOf(item);
    if (index > -1) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

function finalizeOrder() {
    const numero = '64981443459';
    let mensagem = 'Olá, gostaria de pedir as seguintes pizzas:\n';
    if (cart.length === 0) {
        mensagem += 'Carrinho vazio.';
    } else {
        const itemCounts = cart.reduce((counts, item) => {
            counts[item] = (counts[item] || 0) + 1;
            return counts;
        }, {});
        for (const [item, count] of Object.entries(itemCounts)) {
            mensagem += `${item} x ${count}\n`;
        }
    }
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    const finalizeBtn = document.getElementById('finalize-btn');
    if (finalizeBtn) {
        finalizeBtn.addEventListener('click', finalizeOrder);
    }
});
