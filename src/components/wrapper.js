import React, { Component } from 'react';
import '../style.css';
import Header, {info} from './header';
import Title, {userinfo} from './user_title/index';
import Nav from './nav/index';
import Tabs from './tabs/index';

class Wrapper extends Component {
  render() {
    return (
        <div className="main">
            <Nav/>
            <div className="container">
                <Header account={info.account}/>
                <Title account={userinfo.account}/>
                <Tabs/>
            </div>
        </div>
    );
  }
}

export default Wrapper;
