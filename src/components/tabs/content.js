import React from 'react';

function Phone(props) {
    return (
        <div className="wrapper">
            <div className="phone">
                <p>
                    <a href="javascript:void(0);">{props.type.number}</a>
                    <span>{props.type.type}</span>
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
    );
}

function ContactInfo(props) {
    return (
        <div className="content_wrapper">
            <article>
                <p className="col_name">Телефон</p>
                <Phone type={props.phone.main}/>
                <Phone type={props.phone.additional}/>
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
export default ContactInfo;
export const info = {
    phone: {
        main: {
            number:'+380 (67) 123-45-67',
            type: 'Основний'
        },
        additional: {
            number:'+380 (67) 123-45-90',
            type: 'Додатковий'
        }
    },
};