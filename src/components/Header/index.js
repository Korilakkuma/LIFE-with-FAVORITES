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
                    <h1>LIFE <span>with</span> FAVORITES</h1>
                    {/* <h2>池田友洋 * Tomohiro IKEDA のオキニイリ生活サイト</h2> */}
                    <ul className={`${Header.CLASS_NAME}__sns`}>
                        <li>
                            <a href="https://github.com/Korilakkuma" target="_blank" rel="noopener noreferrer" className="image-link">
                                <img src="assets/images/icon-github.png" alt="GitHub" width="64" height="64" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/xsoundjs" target="_blank" rel="noopener noreferrer" className="image-link">
                                <img src="assets/images/icon-twitter.png" alt="Twitter" width="64" height="64" />
                            </a>
                        </li>
                        <li>
                            <a href="https://weblike-curtaincall.ssl-lolipop.jp/blog/" target="_blank" rel="noopener noreferrer" className="image-link">
                                <img src="assets/images/icon-wordpress.png" alt="WordPress" width="64" height="64" />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
