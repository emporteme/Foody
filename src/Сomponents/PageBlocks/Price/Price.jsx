import React from 'react';
import "../../../Styles/Blocks/Price/Price.css"
import PriceCard1 from "./PriceCard/PriceCard1";
import PriceCard2 from "./PriceCard/PriceCard2";

const DATA_FIRST_ROW1 = [
    {
        "index": "1",
        "title_month": "1 месяц",
        // "title_strikethrough": "",
        "title_price": "10 000 тенге",
    },
    {
        "index": "2",
        "title_month": "3 месяца",
        // "title_strikethrough": `65 000`,
        "title_price": "20 000 тенге",
    },
    {
        "index": "3",
        "title_month": "6 месяцев",
        // "title_strikethrough": "135 000",
        "title_price": "40 000 тенге",
    },
    // {
    //     "index": "4",
    //     "title_month": "1 месяц",
    //     // "title_strikethrough": "",
    //     "title_price": "30 000 тенге",
    // },
    // {
    //     "index": "5",
    //     "title_month": "3 месяца",
    //     // "title_strikethrough": "150 000",
    //     "title_price": "70 000 тенге",
    // },
    // {
    //     "index": "6",
    //     "title_month": "6 месяцев",
    //     // "title_strikethrough": "150 000",
    //     "title_price": "150 000 тенге",
    // },
];

const DATA_FIRST_ROW2 = [
    // {
    //     "index": "1",
    //     "title_month": "1 месяц",
    //     // "title_strikethrough": "",
    //     "title_price": "10 000 тенге",
    // },
    // {
    //     "index": "2",
    //     "title_month": "3 месяца",
    //     // "title_strikethrough": `65 000`,
    //     "title_price": "20 000 тенге",
    // },
    // {
    //     "index": "3",
    //     "title_month": "6 месяцев",
    //     // "title_strikethrough": "135 000",
    //     "title_price": "40 000 тенге",
    // },
    {
        "index": "4",
        "title_month": "1 месяц",
        // "title_strikethrough": "",
        "title_price": "30 000 тенге",
    },
    {
        "index": "5",
        "title_month": "3 месяца",
        // "title_strikethrough": "150 000",
        "title_price": "70 000 тенге",
    },
    {
        "index": "6",
        "title_month": "6 месяцев",
        // "title_strikethrough": "150 000",
        "title_price": "150 000 тенге",
    },
];



const Price = (props) => {
    return (
        <div
            className='banner__info2'
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
        >
            <section className="price-block" id="price">

                <div className="price-title">
                    <p className="red-color title-word">Цена</p>
                    <p className="subtitle-word">Пакеты по тарифу Basic:</p>
                    {/* <p className="subtitle-word">Пакеты по тарифу Standard:</p> */}
                </div>
                <div className="price-cards-container">
                    {DATA_FIRST_ROW1.map((item) => (
                        <PriceCard1
                            title_month={item.title_month}
                            title_strikethrough={item.title_strikethrough}
                            title_price={item.title_price}
                            list_item={item.list_item}
                            index={item.index}
                        />
                    ))}
                </div>

                <div className="price-title">
                    <p className="subtitle-word">Пакеты по тарифу Standard:</p>
                    {/* <p className="subtitle-word">Пакеты по тарифу Standard:</p> */}
                </div>
                <div className="price-cards-container">
                    {DATA_FIRST_ROW2.map((item) => (
                        <PriceCard2
                            title_month={item.title_month}
                            title_strikethrough={item.title_strikethrough}
                            title_price={item.title_price}
                            list_item={item.list_item}
                            index={item.index}
                        />
                    ))}
                </div>




            </section>
        </div>
    );
};


export default Price;