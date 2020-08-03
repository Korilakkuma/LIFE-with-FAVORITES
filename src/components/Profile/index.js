'use strict';

import React from 'react';

export default class Profile extends React.Component {
    static CLASS_NAME = 'Profile';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <section className={Profile.CLASS_NAME}>
                <div className="aligner">
                    <h1>PROFILE</h1>
                    <section>
                        <h1>NAME</h1>
                        <p>Web では, <b>Korilakkuma</b> や <b>rilakkuma3xjapan</b> として活動していることが多いです.</p>
                    </section>
                    {/*
                    <section>
                        <h2>Origin</h2>
                        <p>Osaka, JAPAN</p>
                    </section>
                    <section>
                        <h2>Blood Type</h2>
                        <p>Unknow</p>
                    </section>
                    */}
                    <section>
                        <h1>CAREER</h1>
                        <p>
                            大学は肩書き上, 建築を専攻 (興味なしでしたが ...) .
                            大学 4 回生のときに, コンピュータサイエンスに興味をもち,
                            独学で学びを開始. コンピュータサイエンスに専攻を変えて進学.
                            研究は音信号処理で Web とは無縁でしたが, 紆余曲折を経て,
                            2012 年度に Web プログラミング・Web デザインに覚醒.
                            Web プログラミング・Web デザインに関しては完全に独学です.
                        </p>
                        <p>
                            現在 (2020 / 5 ~) は, 社会人大学院進学を目指して, 仕事と学び (信号処理と音楽) に没頭中.
                        </p>
                    </section>
                    {/*
                    <section>
                        <h2>Hobby</h2>
                        <ul>
                            <li>Guitar &amp; Piano</li>
                            <li>Rilakkuma, Korilakkuma, Kiiroitori</li>
                            <li>UFOキャッチャー</li>
                        </ul>
                    </section>
                    */}
                </div>
            </section>
        );
    }
}
