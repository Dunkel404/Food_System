const mockDataBase = [
    {
        id: 1,
        name: "Coca-Cola",
        description: "lata 350ml",
        price: 4.50,
        image: "/img/coca.webp",
        estoque: 20,
        type: "refrigerantes"
    },
        {
        id: 2,
        name: "Guarana Antartica",
        description: "lata 350ml",
        price: 4.50,
        image: "/img/guarana.png",
        estoque: 0,
        type: "refrigerantes"
    },
        {
        id: 3,
        name: "Pepsi",
        description: "lata 350ml",
        price: 4.50,
        image: "/img/pepsi.png",
        estoque: 1,
        type: "refrigerantes"
    },
];

export const getMenuItems = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockDataBase;
};