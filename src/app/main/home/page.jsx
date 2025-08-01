export default function HomePage(){
    return (
            <section id="home">
        <div id="texts">
            <h1>As Melhores Pizzas da Cidade</h1>
            <h3>Feitas com ingredientes frescos e amor</h3>
        </div>
        <div id="buttons">
            <button id="menu-btn" onclick="window.location.href='Cardapio.html'">Ver Cardápio</button>
            <button id="table-btn">Reservar Mesa</button>
        </div>
    </section>
    )
}