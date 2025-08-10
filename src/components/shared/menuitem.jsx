"use client";
import Image from 'next/image';
import '@/components/shared/menu-item.css'

export default function MenuItem({ type, name, description, price, promo_price, newItem, image, estoque }) {
    if (estoque === null) {
        estoque = 1;
    }
    var currentPrice = price;
    if (promo_price) {
        currentPrice = promo_price
    }

    return (
        <section id="menu-item">
            {promo_price ? (
                <div id="promo-div">
                    <Image id="promo-image"
                        src={'/img/promo.png'}
                        width={50}
                        height={50}
                        alt={`promo`}
                    />
                </div>
            ) : (
                <>
                </>
            )}
            {newItem ? (
                <div id="newitem-div">
                    <Image id="newitem-image"
                        src={'/img/newitem.png'}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: 'auto', height: '100%' }}
                        alt={`promo`}
                    />
                </div>
            ) : (
                <>
                </>
            )}
            <div id={`${type}-image`}>
                <Image
                    src={image}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: 'auto', height: '95%', padding: '2.5%' }}
                    alt={`imagem de ${name}`}
                />
            </div>
            <div id="buy-button" onClick={() => addToCart(`${name}, ${description}`)}> <h1>+</h1></div>
            <div id="item-price">
                {promo_price ? (
                    <>
                        <span id="current-price"> R${currentPrice.toFixed(2).replace('.', ',')}</span>
                        <span id="old-price"> {price.toFixed(2).replace('.', ',')}</span>
                    </>
                ) : (
                    <span> R${currentPrice.toFixed(2).replace('.', ',')}</span>
                )}
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