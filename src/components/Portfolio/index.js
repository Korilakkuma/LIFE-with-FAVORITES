'use strict';

import React from 'react';

export default class Portfolio extends React.Component {
    static CLASS_NAME = 'Portfolio';

    constructor(props) {
        super(props);
        this.state = {
            currentItem : 0,
            slide       : 0
        };

        this.items = [
            { image : <div>1</div>, src : '1', href : '', order : '2' },
            { image : <div>2</div>, src : '2', href : '', order : '3' },
            { image : <div>3</div>, src : '3', href : '', order : '4' },
            { image : <div>4</div>, src : '4', href : '', order : '5' },
            { image : <div>5</div>, src : '5', href : '', order : '1' }
        ];

        this.timer = null;

        this.onClickNavButton = this.onClickNavButton.bind(this);
        this.next             = this.next.bind(this);
    }

    prev() {
        const { currentItem, slide } = this.state;

        const prevIndex = (currentItem === 0) ? (this.items.length - 1) : (currentItem - 1);

        this.setState({
            currentItem : prevIndex,
            slide       : slide - 1
        });
    }

    next() {
        const { currentItem, slide } = this.state;

        const nextIndex = (currentItem === (this.items.length - 1)) ? 0 : (currentItem + 1); 

        this.setState({
            currentItem : nextIndex,
            slide       : slide + 1
        });
    }

    setIndex(index) {
        const { currentItem, slide } = this.state;

        if (index === currentItem) {
            return;
        }

        const slideIndex = currentItem - index;

        this.setState({
            currentItem : index,
            slide       : slide - slideIndex
        });
    }

    onClickNavButton(event) {
        window.clearInterval(this.timer);
        this.timer = null;

        const index = parseInt(event.currentTarget.getAttribute('data-index'), 10);
        this.setIndex(index);
    }

    componentDidMount() {
        this.timer = window.setInterval(this.next, 3000);
    }

    renderNav() {
        const { currentItem } = this.state;

        return (
          <ol className={`${Portfolio.CLASS_NAME}__carouselNav`}>
            {this.items.map((item, index) => <li key={item.src}><button data-index={index} type="button" onClick={this.onClickNavButton} disabled={index === currentItem} aria-label={index + 1} className={index === currentItem ? '-active' : ''}></button></li>)}
          </ol>
        );
    }

    renderItems() {
        const { currentItem, slide } = this.state;

        const orderList = new Array(this.items.length);

        for (let i = currentItem, j = 0; i < this.items.length; i++, j++) {
            orderList[j] = i;
        }

        for (let i = 0, j = (this.items.length - currentItem); i < currentItem; i++, j++) {
            orderList[j] = i;
        }

        const slideAmountRight = (slide * -400) + 400; 
        const slideAmountLeft  = slide * 400;
        const style            = {
            transform : `translateX(${slideAmountRight}px)`,
            left      : `${slideAmountLeft}px`
        };

        return (
          <ol style={style}>
            {this.items.map((item, index) => {
                let order = orderList.indexOf(index) + 2;

                if (order > this.items.length) {
                    order = order - this.items.length;
                }

                return (
                    <li key={item.src} style={order ? { order } : null} aria-hidden={index !== currentItem}>
                        <a href={item.href} rel="noopener noreferrer" className="image-link">
                            {item.image}
                        </a>
                    </li>
                );
            })}
          </ol>
        );
    }

    render() {
        return (
            <section className={Portfolio.CLASS_NAME}>
                <div className="aligner">
                    <h1>PORTFOLIO</h1>
                    <div className={`${Portfolio.CLASS_NAME}__carousel`}>
                        {this.renderItems()}
                    </div>
                    {this.renderNav()}
                </div>
            </section>
        );
    }
}
