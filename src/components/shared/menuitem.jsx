"use client";
import Image from 'next/image';
import '@/components/shared/menu-item.css'

export default function MenuItem({name, description, price, image, estoque}) {
    return (
        <section id="menu-item">
            <div id="item-image">
                <Image 
                 src={image}
                 width={0}
                 height={0}
                 sizes='100vw'
                 style={{width: 'auto', height: '95%', padding: '2.5%'}}
                 alt={`imagem de ${name}`}
                />
            </div>
            <div id="buy-button" onClick={ () => addToCart(`${name}, ${description}`)}> <h1>+</h1></div>
            <div id="item-price">
                <span> R${price.toFixed(2).replace('.',',')}</span>
            </div>
            <div id="item-name">
                <h2> {name} </h2>
            </div>
            <div id="item-info">
                <p> {description} </p>
            </div>
            <div id="item-status">

                <p id="status">Item não disponivel</p>
            </div>
        </section>
    )
}