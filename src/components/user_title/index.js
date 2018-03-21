import React from 'react';

function Background(props) {
    return(
        <div className="logo_place">
            <div className="background" style={{backgroundImage: `url(${props.user.background})`}}></div>
            <div className="logo">
                <img src={props.user.avatarUrl} alt=""/></div>
            </div>
    )
}

function Title(props) {
    return (
        <div className="title_wrapper">
            <Background user={props.account}/>
            <p className="name">{props.account.surname} {props.account.name} {props.account.middlename}</p>
            <a href="javascript:void(0);" className="nationality">
                <img src={props.account.flag} alt=""/>
            </a>
        </div>
    )
}

export default Title;
export const userinfo = {
    account: {
        name: 'Оксана',
        surname: 'Мусякевич',
        middlename: 'Ігорівна',
        avatarUrl: 'https://d30y9cdsu7xlg0.cloudfront.net/png/23639-200.png',
        background: 'https://airbusdefenceandspace.com/wp-content/uploads/2016/09/earth-view-from-satellite-space-systems-cover.jpg',
        flag: 'http://www.iconarchive.com/download/i86352/custom-icon-design/round-world-flags/Ukraine.ico'
    },
};