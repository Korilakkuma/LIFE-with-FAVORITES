'use strict';

import React from 'react';

export default class Header extends React.Component {
    static CLASS_NAME = 'Header';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <header className={Header.CLASS_NAME}>
                <div className="aligner">
                    <h1><img src="assets/images/logo.png" alt="LIFE with FAVORITES" width="592" height="156" /></h1>
                    {/* <h1>LIFE <span>with</span> FAVORITES</h1> /*}
                    {/* <h2>池田友洋 * Tomohiro IKEDA のオキニイリ生活サイト</h2> */}
                </div>
            </header>
        );
    }
}
