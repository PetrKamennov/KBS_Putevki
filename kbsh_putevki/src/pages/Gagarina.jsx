import React from 'react';
import '../components/Gagarina/Gagarina.css'


const Gagarina = () => {
    return (
        <div className="Gagarina">
            <section className="gagarina'_contant">
                <div className="gagarina'_text_block gagarina'_grafic_block">
                    <h4>График заездов (2023 Г.)</h4>
                    <div>
                        <div className="smena_block">
                            <span className="gagarina_text_block__span">1 смена</span>
                            <h5 className="gagarina_text_block__h5">10.06.23 - 30.06.23</h5>
                        </div>
                        <div className="smena_block">
                            <span className="gagarina_text_block__span">2 смена</span>
                            <h5 className="gagarina_text_block__h5">05.07.23-25.07.23</h5>
                        </div>
                        <div className="smena_block">
                            <span className="gagarina_text_block__span">3 смена</span>
                            <h5 className="gagarina_text_block__h5">01.08.23-21.08.23</h5>
                        </div>
                    </div>
                </div>
                <div className="gagarina_text_block gagarina_place_block">
                    <h4>Месторасположение</h4>
                    <h5 className="gagarina_text_block__h5 place_block__h5">Оренбургская обл., Абдулинский р-н, с. Покровка</h5>
                </div>
                <div className="gagarina_text_block gagarina_price_block">
                    <h4>Стоимость путёвки</h4>
                    <div className="gagarina_price_block__contant_block">
                        <div className="gagarina_price_block__contant_block__for_RZD">
                            <h6 className="gagarina_price_block__contant_block__h6">Работник РЖД</h6>
                            <div className="gagarina_price_block__contant_block__for_RZD__text">
                                <span>1-2 смена</span>
                                <h5>9131,55 руб.</h5>
                            </div>
                            <div className="gagarina_price_block__contant_block__for_RZD__text">
                                <span>3 смена</span>
                                <h5>6087,70 руб.</h5>
                            </div>
                        </div>
                        <div className="gagarina_price_block__contant_block__for_civilian">
                            <h6 className="gagarina_price_block__contant_block__h6">Не работник РЖД</h6>
                            <h5>61400 руб.</h5>
                        </div>
                    </div>
                </div>
                <div className="gagarina_text_block gagarina_phonenumber_block">
                    <h4>Контакты</h4>
                    <div className="gagarina_phonenumber_block__numbers">
                        <h5>8(922) 620 88-43</h5>
                        <h5>9(846) 303 72-29</h5>
                        <h5>9(846) 303 85-12</h5>
                    </div>
                </div>
                <div className="gagarina_text_block gagarina_socials_block">
                    <h4>Социальные сети</h4>
                    <a>https://vk.com/club127996269</a>
                </div>
                <div className="gagarina_text_block gagarina_game_block">
                    <h4>Железнодорожная игротека</h4>
                    <a>https:kbsh.szd.online/lagerya/item/dol-gagarina</a>
                </div>
                <div className="gagarina_documents_block">
                    <h4>Документация приёма детей в детский оздоровительный лагерь</h4>
                    <div className="gagarina_documents_block__text">
                        <p>1.  Заполненная путевка</p>
                        <p>2.  Копия полиса обязательного медицинского страхования</p>
                        <p>3. Копия свидетельства о рождении ребенка либо паспорта ребенка ( по достижении 14 лет)</p>
                        <p>4.  Медицинская справка (для ДОЛ – учетная форма №079У) с данными о перенесенных      инфекционных заболеваниях, с отметкой об отсутствии педикулеза, при наличии хронических заболеваний указать дату последнего обострения</p>
                        <p>5. Справка об отсутствии в течении 21 календарного дня контактов с больными  инфекционными заболеваниями, указанные сведения вносятся в справку не ранее чем за 3 дня до направления ребенка в ДОЛ</p>
                        <p>6. Копия сертификата о прививках с данными о сделанных профилактических прививках против дифтерии, кори, паротита, краснухи и гепатита В, диагностические тесты на туберкулез ( реакция Манту или Диаскинтест).
                            Ребенок должен иметь все прививки в соответствии с прививочным календарем и диагностические тесты на туберкулез не позднее 1 года до заезда</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gagarina;