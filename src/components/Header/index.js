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
                    {/*
                    <svg width="1182" height="312" title="LIFE with FAVORITES" role="img">
                        <use xlinkHref="assets/images/logo.svg" />
                    </svg>
                    */}
                    {/* <h1>LIFE <span>with</span> FAVORITES</h1> */}
                    <h2>
                        Tomohiro IKEDA の
                        <span role="presentation">オ</span>
                        <span role="presentation">キ</span>
                        <span role="presentation">ニ</span>
                        <span role="presentation">イ</span>
                        <span role="presentation">リ</span>
                        生活サイト
                    </h2>
                </div>
            </header>
        );
    }
}
