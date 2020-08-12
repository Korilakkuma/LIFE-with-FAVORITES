'use strict';

import React from 'react';

export class Portfolio extends React.Component {
  static CLASS_NAME = 'Portfolio';

  constructor(props) {
    super(props);

    this.state = {
      currentItem : 0,
      slide       : 0
    };

    this.items = [
      {
        src   : 'assets/images/screenshot-x-sound.png',
        alt   : 'XSound.app',
        href  : 'https://xsound.app/',
        label : 'XSound.app',
        order : '2'
      },
      {
        src   : 'assets/images/screenshot-xsound.png',
        alt   : 'XSound',
        href  : 'https://xsound.jp/',
        label : 'XSound',
        order : '3'
      },
      {
        src   : 'assets/images/screenshot-instant-canvas-presentation.png',
        alt   : 'Instant Canvas Presentation',
        href  : 'https://weblike-curtaincall.ssl-lolipop.jp/portfolio-instant-canvas-presentation/',
        label : 'Instant Canvas Presentation',
        order : '4'
      },
      {
        src   : 'assets/images/screenshot-music-v.png',
        alt   : 'Music V',
        href  : 'https://weblike-curtaincall.ssl-lolipop.jp/portfolio-music-v/',
        label : 'Music V',
        order : '5'
      },
      {
        src   : 'assets/images/screenshot-web-sounder.png',
        alt   : 'WEB SOUNDER',
        href  : 'https://weblike-curtaincall.ssl-lolipop.jp/portfolio-web-sounder/',
        label : 'WEB SOUNDER',
        order : '1'
      }
    ];

    this.imageRef = React.createRef();

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

  componentWillUnmount() {
    window.clearInterval(this.timer);
    this.timer = null;
  }

  renderNav() {
    const { currentItem } = this.state;

    // Use `span` instead of `button` for iOS
    return (
      <ol className={`${Portfolio.CLASS_NAME}__carouselNav`}>
        {this.items.map((item, index) => <li key={item.href}><span data-index={index} role="button" onClick={this.onClickNavButton} disabled={index === currentItem} aria-label={item.label} className={index === currentItem ? '-active' : ''}></span></li>)}
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

    const offset           = this.imageRef.current !== null ? this.imageRef.current.width : 400;
    const slideAmountRight = (slide * -offset) + offset;
    const slideAmountLeft  = slide * offset;
    const style            = {
      transform : `translateX(${slideAmountRight}px)`,
      left      : `${slideAmountLeft}px`
    };

    return (
      <ol style={style}>
        {this.items.map((item, index) => {
          const { src, alt, href } = item;

          let order = orderList.indexOf(index) + 2;

          if (order > this.items.length) {
            order = order - this.items.length;
          }

          return (
            <li key={href} style={order ? { order } : null} aria-hidden={index !== currentItem} tabIndex={index === currentItem ? null : '-1'}>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="image-link">
                <img ref={this.imageRef} src={src} alt={alt} />
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
