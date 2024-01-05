import CustomArrow from './CustomArrow'
export const settings = {
    
    autoplay:true,
    autoplaySpeed:3000,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: true,
            },
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
export const productData = [
    {
        id: 1,
        imageurl: require('../img/pro1.jpg'),
        name: "Colorful sneakers",
        price: "$19.99",
    },
    {
        id: 2,
        imageurl: require('../img/pro2.jpg'),
        name: "Sport sneakers",
        price: "$21.99",
    },
    {
        id: 3,
        imageurl: require('../img/pro3.jpg'),
        name: "iWatch",
        price: "$99.99",
    },
    {
        id: 4,
        imageurl: require('../img/pro4.jpg'),
        name: "Water Bottle",
        price: "$14.99",
    },
    {
        id: 4,
        imageurl: require('../img/pro5.jpg'),
        name: "Water Bottle",
        price: "$14.99",
    },
    {
        id: 4,
        imageurl: require('../img/pro6.jpg'),
        name: "Water Bottle",
        price: "$14.99",
    },
    
    
]