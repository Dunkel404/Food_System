import { getMenuItems } from '@/lib/data';
import MenuItem from '@/components/shared/menuitem'
//XXXXXXXXXXXXXXXX MUDAR NOME DE 'ESTOQUE'
export default async function menu() {
    const allItems = await getMenuItems();

    const refrigerantes = allItems.filter(item => item.type === 'refrigerante');
    const pizzas = allItems.filter(item => item.type === 'pizza');
    return (
        <section id="menu">
            <div id="menu-top">
                <h1>Nosso Cardápio</h1>
                <p>Delicie-se com nossas pizzas artesanais preparadas no forno a lenha </p> <p> com ingredientes frescos e de alta qualidade.</p>
            </div>
            <h1>Pizzas</h1>
            <div id='item-grid'>
                {pizzas.map((item) => (
                    <MenuItem key={item.id} type={item.type} newItem={item.new} name={item.name} promo_price={item.promo_price} description={item.description} price={item.price} image={item.image} estoque={item.estoque} />
                ))}
            </div>
            <h1>Bebidas</h1>
            <div id='item-grid'>
                {refrigerantes.map((item) => (
                    <MenuItem key={item.id} type={item.type} name={item.name} promo_price={item.promo_price} description={item.description} price={item.price} image={item.image} estoque={item.estoque} />
                ))}
            </div>
        </section>
    )
}