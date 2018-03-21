import React, { Component } from 'react';

// class Header extends React.Component{
    function Avatar(props) {
        return (
            <img className="avatar"
                 src={props.user.avatarUrl}
                 alt={props.user.name}
            />

        );
    }
    function UserInfo(props) {
        return (
            <div className="user_info">
                <Avatar user={props.user} />
                <div className="actions">
                    <p>Вітаємо, {props.user.name}</p>
                    <a href="javascript:void(0);">Вийти з кабінету</a>
                </div>
            </div>
        );
    }
    function Header(props){
        return(
            <header>
               <article>
                   <UserInfo user={props.account} />
                   <a href="javascript:void(0);" className="notifications active"></a>
               </article>
            </header>
        );
    }
// }

export default Header;
export const info = {
    account: {
        name: 'Оксана',
        avatarUrl: 'https://d30y9cdsu7xlg0.cloudfront.net/png/23639-200.png',
    },
};