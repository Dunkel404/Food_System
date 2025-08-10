import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {

    return (
        <section id="home">
            <div id="info">
                <div id="texts">
                    <h1>As Melhores Pizzas, bem perto de você</h1>
                    <h3>Ingredientes de primeira e massa fresca, com o cuidado que você sente em cada fatia.</h3>
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
            </div>
            <div id="promotional">
                <div id="pizzaPhoto">
                    <Image
                        src={"/img/home-background.jpg"}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: 'auto', height: '100%'}}
                    />
                </div>
            </div>
        </section>
    )
}