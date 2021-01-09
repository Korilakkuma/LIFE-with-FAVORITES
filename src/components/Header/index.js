import React, { useState, useCallback } from 'react';

const CLASS_NAME = 'Header';

export const Header = () => {
  const [loaded, setLoaded] = useState(false);
  const [isAnimation, setIsAnimation] = useState(true);

  const onLoadCallback = useCallback(() => {
    setLoaded(true);
  }, []);

  const onMouseEnterCallback = useCallback(() => {
    if (!isAnimation) {
      setIsAnimation(true);
    }
  }, [isAnimation]);

  const onAnimationEndCallback = useCallback(() => {
    if (isAnimation) {
      setIsAnimation(false);
    }
  }, [isAnimation]);

  return (
    <header className={CLASS_NAME}>
      <div className="aligner">
        <h1 className={loaded ? '-animation' : ''} hidden={!loaded} onMouseEnter={onMouseEnterCallback}>
          <img src="assets/images/logo-x2.png" alt="Life with Favorites" width="592" onLoad={onLoadCallback} />
        </h1>
        {/*
          <svg width="1182" height="312" title="LIFE with FAVORITES" role="img">
            <use xlinkHref="assets/images/logo.svg" />
          </svg>
        */}
        {/* <h2>LIFE <span>with</span> FAVORITES</h2> */}
        <h2 onMouseEnter={onMouseEnterCallback} className={isAnimation ? '-animation' : ''}>
          Tomohiro IKEDAの<span onAnimationEnd={onAnimationEndCallback} role="presentation">オ</span><span onAnimationEnd={onAnimationEndCallback} role="presentation">キ</span><span onAnimationEnd={onAnimationEndCallback} role="presentation">ニ</span><span onAnimationEnd={onAnimationEndCallback} role="presentation">イ</span><span onAnimationEnd={onAnimationEndCallback} role="presentation">リ</span>生活サイト
        </h2>
      </div>
    </header>
  );
};
