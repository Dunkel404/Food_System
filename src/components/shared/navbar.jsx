import Image from 'next/image'

export default function NavBar(){
    return (
            <header id="navbar">
        <div id="company">
            <Image src="/img/logo.svg" width={128} height={128} quality={50} alt="logo"/>
            <ul>
                <li><h3>Emporio</h3></li>
                <li><h5>da</h5></li>
                <li><h3>Pizza</h3></li>
            </ul>
        </div>

        <nav>
            <ul>
                <li><a href="Tela1.html">Inicio</a></li>
                <li><a href="Bebidas.html">Bebidas</a></li>
                <li><a href="endereco.html">Endereço</a></li>
                <li><a href="Cardapio.html">Pizzas</a></li>
            </ul>
        </nav>
        {/* <button id="cart-btn" onClick="window.location.href='tela.carrinho.html'"> <img src="./img/shopping-cart.png"/> Pedir Agora</button> */}
        <button id="cart-btn"> <img src="./img/shopping-cart.png"/> Pedir Agora</button>
    </header>
    )
}