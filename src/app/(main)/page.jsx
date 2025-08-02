import Link from 'next/link';

export default function HomePage() {
    return (
        <section id="home">
            <div id="texts">
                <h1>As Melhores Pizzas da Cidade</h1>
                <h3>Feitas com ingredientes frescos e amor</h3>
            </div>
            <div id="buttons">
                <Link href={'Cardapio.html'}>
                    {/* onclick="window.location.href='Cardapio.html'" */}
                    <button id="menu-btn" >Ver Cardápio</button>
                </Link>
                <Link href={'Cardapio.html'}>
                    <button id="table-btn">Reservar Mesa</button>
                </Link>
            </div>
        </section>
    )
}