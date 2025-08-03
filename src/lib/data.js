const mockDataBase = [
    {
        id: 1,
        name: "Calabresa com catupiry",
        description: "Molho de tomate, queijo mussarela, calabresa, Catupiry",
        price: 23.50,
        promo_price: 20,
        new: true,
        image: "/img/pizza_calabre_catupiry.png",
        type: "pizza"
    },
    {
        id: 2,
        name: "Brie Cheesee",
        description: "Queijo mussarela, queijo brie, geleia de damasco, nozes",
        price: 23.50,
        promo_price: null,
        new: true,
        image: "/img/Pizza_Brie_Cheese.png",
        type: "pizza"
    },
    {
        id: 3,
        name: "Lombo",
        description: "Molho de tomate, queijo mussarela, lombo canadense, cebola roxa, azeitonas pretas",
        price: 15.50,
        promo_price: null,
        new: false,
        image: "/img/pizza_lombo.png",
        type: "pizza"
    },
    {
        id: 4,
        name: "Peperoni",
        description: "Molho de tomate, queijo mussarela, pepperoni",
        price: 15.50,
        promo_price: 10,
        new: false,
        image: "/img/pizza_peperoni.png",
        type: "pizza"
    },
    {
        id: 5,
        name: "Coca-Cola",
        description: "lata 350ml",
        price: 4.50,
        new: false,
        image: "/img/coca.webp",
        estoque: 20,
        type: "refrigerante"
    },
    {
        id: 6,
        name: "Guarana Antartica",
        description: "lata 350ml",
        price: 4.50,
        new: false,
        image: "/img/guarana.png",
        estoque: 0,
        type: "refrigerante"
    },
    {
        id: 7,
        name: "Pepsi",
        description: "lata 350ml",
        price: 4.50,
        new: false,
        image: "/img/pepsi.png",
        estoque: 1,
        type: "refrigerante"
    },
];

export const getMenuItems = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockDataBase;
};