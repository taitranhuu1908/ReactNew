import React, { Component } from 'react';
import HeaderRight from '../HeaderRight/HeaderRight';
import HeaderLeft from '../HeaderLeft/HeaderLeft';
import './styles.scss';

class Header extends Component {
    render() {
        return (    
            <div className="container-fluid" id="header-login">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-9 h-100 d-flex header-login">
                            <HeaderLeft/>
                        </div>
                        <div className="col-3 h-100 text-end">
                            <HeaderRight/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;