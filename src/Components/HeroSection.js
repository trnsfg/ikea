import "./HeroSection.css"
import { useState } from "react";
import { Card } from "./Card";

const cards = [
    { img: "./pillow.jpg", title: "Подушки", prise: 12 },
    { img: "./blanket.jpg", title: "Ковдра", prise: 30 },
    { img: "./bed.jpg", title: "Ліжко", prise: 414 },
];


export function HeroSection()
{
    const [showCatalog, setShowCatalog] = useState(false);

     const handleCatalogClick = () => {
       setShowCatalog(!showCatalog);
    };
    return(
        <div>
            <div className="h1-coneiner">
                <h1>ВСЕ ДЛЯ ДОМУ</h1>
            </div>
            <div className="butons">
                <button className="signin">створити акаунт та почати!</button>
                <button className="catalog" onClick={handleCatalogClick}>каталог  
                    <img src="./Vector.png"></img>
                </button>
            </div>

            {showCatalog && (
               <div className="card-container">
               {cards.map((item, index) => (
               <Card key={index} img={item.img} title={item.title} prise={item.prise} />
                ))}
               </div>
             )}
             <div className="discounts">
                ЛОВИ МОМЕНТ | Знижки до 60% на вибрані категорії товарів
             </div>
        </div>
    )
}