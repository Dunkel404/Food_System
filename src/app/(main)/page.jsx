import Link from 'next/link';
import { getMenuItems } from '@/lib/data';
import MenuItem from '@/components/shared/menuitem'

//XXXXXXXX REMOVER ASYNC DEPOIS QUE TIRAR O MENU DE ITENSSSS
export default async function HomePage() {
    const allItems = await getMenuItems();

    const refrigerantes = allItems.filter(item => item.type === 'refrigerantes');
//XXXXXXXXXX MODIFICAR O FUNDO DA IMAGEM BASEADO NO TYPE
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

            <section id="menu">
                <div id='item-grid'>
                    {refrigerantes.map((item) => (
                        <MenuItem key={item.id} name={item.name} description={item.description} price={item.price} image={item.image} estoque={item.estoque}/>
                    ))}
                </div>
            </section>
        </section>



    )
}