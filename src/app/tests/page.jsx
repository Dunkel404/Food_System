import Image from 'next/image';

export default function page() {
    return (
        <html>
            <body>
                <section id="menu-item">
                    <h2> Nome do Item</h2>
                    <Image src="/img/coca.jpg" width={256} height={256} quality={50} alt="coca" />
                    <button onclick="addToCart('Coca Cola lata 250ml')">Adicionar ao carrinho</button>
                </section>
            </body>
        </html>
    )
}