import React from 'react';

export class ContactInfo extends React.Component {
    render() {
        return (
            <div className="content_wrapper">
                <article>
                    <p className="col_name">Телефон</p>
                    <div className="wrapper">
                        <div className="phone">
                            <p>
                                <a href="javascript:void(0);">+380 (67) 123-45-67</a>
                                <span>Основний</span>
                            </p>
                            <a href="javascript:void(0);" className="edit"></a>
                        </div>
                        <div className="toggles">
                            <p className="toggle">
                                <span className="toggleWrapper">
                                    <input type="checkbox" name="toggle1" className="mobileToggle" id="toggle1"/>
                                        <label htmlFor="toggle1"></label>
                                </span>
                                <label htmlFor="toggle1">Viber</label>
                            </p>
                            <p className="toggle">
                                <span className="toggleWrapper">
                                    <input type="checkbox" name="toggle2" className="mobileToggle" id="toggle2"/>
                                        <label htmlFor="toggle2"></label>
                                </span>
                                <label htmlFor="toggle2">Telegram</label>
                            </p>
                            <p className="toggle">
                                <span className="toggleWrapper">
                                    <input type="checkbox" name="toggle3" className="mobileToggle" id="toggle3"/>
                                        <label htmlFor="toggle3"></label>
                                </span>
                                <label htmlFor="toggle3">Whatsapp</label>
                            </p>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="phone">
                            <p>
                                <a href="tel:380671234567">+380 (67) 123-45-67</a>
                                <span>Додатковий</span>
                            </p>
                            <a href="javascript:void(0);" className="edit"></a>
                        </div>
                        <div className="toggles">
                            <p className="toggle">
                                <span className="toggleWrapper">
                                    <input type="checkbox" name="toggle4" className="mobileToggle" id="toggle4"/>
                                        <label htmlFor="toggle4"></label>
                                </span>
                                <label htmlFor="toggle4">Viber</label>
                            </p>
                            <p className="toggle">
                                <span className="toggleWrapper">
                                    <input type="checkbox" name="toggle5" className="mobileToggle" id="toggle5"/>
                                        <label htmlFor="toggle5"></label>
                                </span>
                                <label htmlFor="toggle5">Telegram</label>
                            </p>
                            <p className="toggle">
                                <span className="toggleWrapper">
                                    <input type="checkbox" name="toggle6" className="mobileToggle" id="toggle6"/>
                                        <label htmlFor="toggle6"></label>
                                </span>
                                <label htmlFor="toggle6">Whatsapp</label>
                            </p>
                        </div>
                    </div>
                </article>
                <article>
                    <p className="col_name">Email</p>
                    <div className="wrapper">
                        <div className="email">
                            <p>
                                <a href="mailto:my.email@gmail.com">my.email@gmail.com</a>
                                <a href="javascript:void(0);" className="edit"></a>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
export class AddressInfo extends React.Component {
    render() {
        return (
            <div className="content_wrapper">
                <article>
                    <p className="col_name">Адреса листування</p>
                    <div className="wrapper">
                        <div className="address">
                            <p>Оболонський проспект, буд 14-А, кв.59, м. Київ, 04205, Україа</p>
                            <a href="javascript:void(0);" className="edit"></a>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="wrapper">
                        <p className="col_name">Адреса реєстрації</p>
                        <div className="address">
                            <p>Оболонський проспект, буд 14-А, кв.59, м. Київ, 04205, Україа</p>
                            <a href="javascript:void(0);" className="edit"></a>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}