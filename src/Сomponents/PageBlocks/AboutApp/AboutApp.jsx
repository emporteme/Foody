import "../../../Styles/Blocks/AboutApp/AboutApp.css";
import Button from "../../PageElements/Button/Button";

const AboutApp = () => {
    let red = "#BE123C";
    let gray = "#AAAAAA";
    return (
        <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true">
            <div id="aboutApp">
                <section className="about-app-block">
                    <article className="about-app-first-text">
                        <div>
                            <p>
                                Простой способ <br />
                                управлять <wbr />бронированием и <wbr />
                                <span className="red-color">
                                    привлекать<wbr /> новых <wbr />гостей
                                </span>
                            </p>
                            <p>
                                Подойдет как небольшой кофейни на несколько столов, так и сети ресторанов с высокой загруженностью.
                            </p>
                            <a href="https://api.whatsapp.com/send?phone=77000901997&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83" target="_blank">
                                <Button
                                    text="Присоединиться"
                                    img="none"
                                    type="filled"
                                    color={red}
                                    gap="40px"
                                    fs="1.2rem"
                                    fw="700"
                                    letter="1.5px"
                                />
                            </a>

                        </div>
                    </article>
                    <article className="about-app-img">
                        <img src="https://i.ibb.co/NWnm76L/image.png" alt="image" />
                    </article>
                    <article className="about-app-second-text">
                        <div>
                            <p>
                                <b className="red-color">FOODY</b> — маркетплейс по онлайн-<wbr />бронированию столиков в заведениях.
                                
                            </p>
                            <p>
                                <b>Гости</b> через приложение выбирают заведения по рейтингу и меню, бронируют <wbr /> столики, накапливают бонусы.
                            </p>

                            <p>
                                <b>Заведения</b> привлекают гостей через поиск и рекламу, начисляют бонусы.
                            </p>

                        </div>
                    </article>
                    <article className="about-app-download">
                        <button className="aboutApp__button">
                            <a href = 'https://apps.apple.com/kz/app/foody-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D0%B8-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/id1623400807'>
                                <span>Доступно в AppStore</span>
                            </a>
                            
                            <span className="aboutApp__imgg">
                                <img src="/img/appStore__red.png" alt="" />
                                <img src="/img/appStore__white.png" alt="" />
                            </span>
                        </button>

                        <br />
                        <button className="aboutApp__button__g">
                            <a href='https://play.google.com/store/apps/details?id=com.foody.foodyclient'>
                                <span>Скоро в Google Play</span>
                            </a>
                            <span className="aboutApp__imgg">
                                <img src="/img/googlePlay__red.png" alt="" />
                                <img src="/img/googlePlay__white.png" alt="" />
                            </span>
                        </button>

                    </article>
                </section>
                
            </div>
        </div>
    );
}

export default AboutApp;