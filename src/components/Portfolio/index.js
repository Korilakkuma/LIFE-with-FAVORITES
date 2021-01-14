import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';

const CLASS_NAME = 'Portfolio';

function useInterval(callback, interval) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (interval >= 0) {
      const timer = window.setInterval(() => {
        savedCallback.current();
      }, interval);

      return () => {
        window.clearInterval(timer);
      };
    }
  }, [interval]);
}

const Nav = (props) => {
  const { items, currentItem, onClick } = props;

  return (
    <ol className={`${CLASS_NAME}__carouselNav`}>
      {items.map((item, index) => {
        const { href, label } = item;

        // Use `span` instead of `button` for iOS
        return (
          <li key={href}>
            <span
              role="button"
              aria-label={label}
              disabled={index === currentItem}
              data-index={index}
              className={index === currentItem ? '-active' : ''}
              onClick={onClick}
            />
          </li>
        );
      })}
    </ol>
  );
};

Nav.propTypes = {
  items      : PropTypes.array.isRequired,
  currentItem: PropTypes.number.isRequired,
  onClick    : PropTypes.func
};

const Items = (props) => {
  const { items, currentItem, slide } = props;

  const imageRef = useRef(null);

  const orderList = new Array(items.length);

  for (let i = currentItem, j = 0; i < items.length; i++, j++) {
    orderList[j] = i;
  }

  for (let i = 0, j = (items.length - currentItem); i < currentItem; i++, j++) {
    orderList[j] = i;
  }

  const offset           = imageRef.current === null ? 400 : imageRef.current.width;  // HACK
  const slideAmountRight = (slide * -offset) + offset;
  const slideAmountLeft  = slide * offset;

  const style = {
    transform: `translateX(${slideAmountRight}px)`,
    left: `${slideAmountLeft}px`
  };

  return (
    <ol style={style}>
      {items.map((item, index) => {
        const { src, alt, href } = item;

        let order = orderList.indexOf(index) + 2;

        if (order > items.length) {
          order = order - items.length;
        }

        return (
          <li
            key={href}
            style={order ? { order } : null}
            aria-hidden={index !== currentItem}
            tabIndex={index === currentItem ? null : '-1'}
          >
            <a href={href} target="_blank" rel="noopener noreferrer" className="image-link">
              <img ref={imageRef} src={src} alt={alt} />
            </a>
          </li>
        );
      })}
    </ol>
  );
};

Items.propTypes = {
  items      : PropTypes.array.isRequired,
  currentItem: PropTypes.number.isRequired,
  slide      : PropTypes.number.isRequired
};

export const Portfolio = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [slide, setSlide] = useState(0);

  const items = useMemo(() => [
    {
      src  : 'assets/images/screenshot-x-sound.png',
      alt  : 'XSound.app',
      href : 'https://xsound.app',
      label: 'XSound.app',
      order: '2'
    },
    {
      src  : 'assets/images/screenshot-xsound.png',
      alt  : 'XSound',
      href : 'https://xsound.jp',
      label: 'XSound',
      order: '3'
    },
    {
      src  : 'assets/images/screenshot-instant-canvas-presentation.png',
      alt  : 'Instant Canvas Presentation',
      href : 'https://weblike-curtaincall.ssl-lolipop.jp/portfolio-instant-canvas-presentation/',
      label: 'Instant Canvas Presentation',
      order: '4'
    },
    {
      src  : 'assets/images/screenshot-music-v.png',
      alt  : 'Music V',
      href : 'https://weblike-curtaincall.ssl-lolipop.jp/portfolio-music-v/',
      label: 'Music V',
      order: '5'
    },
    {
      src  : 'assets/images/screenshot-web-sounder.png',
      alt  : 'WEB SOUNDER',
      href : 'https://weblike-curtaincall.ssl-lolipop.jp/portfolio-web-sounder/',
      label: 'WEB SOUNDER',
      order: '1'
    }
  ], []);

  const setIndexCallback = useCallback((index) => {
    if (index === currentItem) {
      return;
    }

    const slideIndex = currentItem - index;

    setCurrentItem(index);
    setSlide(slide - slideIndex);
  }, [currentItem, slide]);

  const onClickNavButtonCallback = useCallback((event) => {
    // window.clearInterval(timer);

    const index = parseInt(event.currentTarget.getAttribute('data-index'), 10);

    setIndexCallback(index);
  }, [setIndexCallback]);

  /*
  const prevCallback = useCallback(() => {
    const prevIndex = (currentItem === 0) ? (items.length - 1) : (currentItem - 1);

    setCurrentItem(prevIndex);
    setSlide(slide - 1);
  }, [items, currentItem, slide]);
  */

  const nextCallback = useCallback(() => {
    const nextIndex = (currentItem === (items.length - 1)) ? 0 : (currentItem + 1);

    setCurrentItem(nextIndex);
    setSlide(slide + 1);
  }, [items, currentItem, slide]);

  useInterval(nextCallback, 3000);

  return (
    <section className={CLASS_NAME}>
      <div className="aligner">
        <h1>Portfolio</h1>
        <div className={`${CLASS_NAME}__carousel`}>
          <Items items={items} currentItem={currentItem} slide={slide} />
        </div>
        <Nav items={items} currentItem={currentItem} onClick={onClickNavButtonCallback} />
      </div>
    </section>
  );
};
