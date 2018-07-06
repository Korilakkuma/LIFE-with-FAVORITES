'use strict';

import React from 'react';

export default class Portfolio extends React.Component {
    static CLASS_NAME = 'Portfolio';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <section className={Portfolio.CLASS_NAME}>
                <div className="aligner">
                    <h1>PORTFOLIO</h1>
                    <dl className="list-marker">
                        <dt><a href="https://github.com/Korilakkuma/XSound" target="_blank" rel="noopener noreferrer">XSound</a></dt>
                        <dd>Web Audio API Library for Synthesizer, Effects, Visualization, Recording ... etc</dd>
                        <dt><a href="https://korilakkuma.github.io/X-Sound/" target="_blank" rel="noopener noreferrer">X Sound</a></dt>
                        <dd>Multifunctional Synthesizer by XSound</dd>
                        <dt><a href="https://weblike-curtaincall.ssl-lolipop.jp/portfolio-web-sounder/" target="_blank" rel="noopener noreferrer">WEB SOUNDER</a></dt>
                        <dd>Website for Web Audio API</dd>
                    </dl>
                </div>
            </section>
        );
    }

    /*
    constructor(props) {
        super(props);

        this.state = {
            index : 0
        };

        this.items = [
            { image : <div>1</div>, src : '1', order : '2' },
            { image : <div>2</div>, src : '2', order : '3' },
            { image : <div>3</div>, src : '3', order : '4' },
            { image : <div>4</div>, src : '4', order : '5' },
            { image : <div>5</div>, src : '5', order : '1' }
        ];

        this.carousel = null;

        this.intervalId = null;

        this.isFirst = false;

        this.onClickCarouselButton = this.onClickCarouselButton.bind(this);
        this.onInterval = this.onInterval.bind(this);
    }

    onClickCarouselButton(event) {
    }

    onInterval() {
        let index = 0;

        if (this.isFirst) {
            index = 0;
            this.isFirst = false;
        } else {
            index = this.state.index + 1;
        }

        if (index === (this.items.length - 1)) {
            this.carousel.style.transform = `translateX(${-1 * (index - 3) * 400}px)`;
            // items = [...items.slice(2, index), items[index], items[0], items[1]];
            this.isFirst = true;
        } else if (index === (this.items.length - 2)) {
            this.items.forEach((item, index) => {
                if (index === 4) {
                    item.order = '5';
                } else {
                    item.order = String(parseInt(item.order, 10) - 1);
                }

                console.dir(item);
            });

            this.carousel.style.transform = `translateX(${-1 * (index - 2) * 400}px)`;
        } else if (index < (this.items.length - 1)) {
            this.carousel.style.transform = `translateX(${-1 * (index - 1) * 400}px)`;
        }

        this.setState({ index });
    }

    componentDidMount() {
        this.intervalId = window.setInterval(this.onInterval, 3000);
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUnmount() {
        window.clearInterval(this.intervalId);
        this.intervalId = null;
    }

    render() {
        return (
            <section className={Portfolio.CLASS_NAME}>
                <div className="aligner">
                    <h1>PORTFOLIO</h1>
                    <div className={`${Portfolio.CLASS_NAME}__carousel`}>
                        <ol ref={node => this.carousel = node} style={{ transform : 'translateX(400px)' }}>
                            {this.items.map((item, index) => <li key={item.href} style={{ order : item.order }}><a href={item.href} target="_blank" rel="noopener noreferrer" className="image-link">{item.image}</a></li>)}
                        </ol>
                    </div>
                    <ol className={`${Portfolio.CLASS_NAME}__carouselSelector`}>
                        {this.items.map((item, index) => <li key={item.href}><button data-index={index} type="button" onClick={this.onClickCarouselButton} disabled={index === this.state.index} className={index === this.state.index ? '-active' : ''}></button></li>)}
                    </ol>
                </div>
            </section>
        );
    }
    */
}
