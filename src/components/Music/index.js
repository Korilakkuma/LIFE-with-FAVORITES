'use strict';

import React from 'react';

export default class Music extends React.Component {
    static CLASS_NAME = 'Music';

    constructor(props) {
        super(props);

        this.state = {
            index : 2
        };

        this.items = [
            // <iframe key="cjLcjjfJmVw" width="560" height="315" src="https://www.youtube.com/embed/cjLcjjfJmVw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>,
            <iframe key="bcbDMOw2bGw" width="560" height="315" src="https://www.youtube.com/embed/bcbDMOw2bGw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>,
            <iframe key="7T8KGcuOu6I" width="560" height="315" src="https://www.youtube.com/embed/7T8KGcuOu6I" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>,
            <iframe key="Xs_u5Cx5U1I" width="560" height="315" src="https://www.youtube.com/embed/Xs_u5Cx5U1I" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>,
            <iframe key="ToWPdpeMT_w" width="560" height="315" src="https://www.youtube.com/embed/ToWPdpeMT_w" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>,
            <iframe key="aCBxCotZA4A" width="560" height="315" src="https://www.youtube.com/embed/aCBxCotZA4A" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        ];

        this.carousel = null;

        this.onClickCarouselButton = this.onClickCarouselButton.bind(this);
    }

    onClickCarouselButton(event) {
        const button = event.currentTarget;
        const index = parseInt(button.getAttribute('data-index'), 10);

        const translateXMap = new Array(this.items.length);

        for (let i = 0, len = translateXMap.length; i < len; i++) {
            translateXMap[i] = 1120 - (i * 560);
        }

        this.carousel.style.transform = `translateX(${translateXMap[index]}px)`;

        this.setState({ index });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.index !== nextState.index;
    }

    render() {
        return (
            <section className={Music.CLASS_NAME}>
                <div className="aligner">
                    <h1>MUSIC</h1>
                    <div className={`${Music.CLASS_NAME}__carousel`}>
                        <ol ref={node => this.carousel = node}>
                            {this.items.map((item, index) => <li key={item.src} aria-hidden={index !== this.state.index}>{item}</li>)}
                        </ol>
                    </div>
                    <ol className={`${Music.CLASS_NAME}__carouselSelector`}>
                        {this.items.map((item, index) => <li key={item.src}><button data-index={index} type="button" onClick={this.onClickCarouselButton} disabled={index === this.state.index} aria-label={index + 1} className={index === this.state.index ? '-active' : ''}></button></li>)}
                    </ol>
                </div>
            </section>
        );
    }
}
