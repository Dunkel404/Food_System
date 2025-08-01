import Image from 'next/image';
import '@/app/global.css'
export default function page() {
    return (
        <html>
            <body>
                <section id="menu-item">
                    <div id="item-image">
                        <Image src="/img/coca.webp" fill={true} quality={50} alt="coca" />
                    </div>
                    <div id="item-buy">
                    <button onclick="addToCart('Coca Cola lata 250ml')"/>
                    </div>
                    <div id="item-price">
                        <Image src="/img/coca.webp" fill={true} quality={50} alt="coca" />
                    </div>
                    <div id="item-name">
                    <h2> Coca Cola </h2>
                    </div>
                    <div id="item-info">
                        <Image src="/img/coca.webp" fill={true} quality={50} alt="coca" />
                    </div>
                                        <div id="item-status">
                    <p id="status">Item não disponivel</p>
                    </div>
                </section>
            </body>
        </html>
    )
}