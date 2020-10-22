import React from 'react';

export class Header extends React.Component {
  static CLASS_NAME = 'Header';

  constructor(props) {
    super(props);

    this.state = { isAnimation : true };

    this.onMouseEnter   = this.onMouseEnter.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
  }

  onMouseEnter() {
    if (!this.state.isAnimation) {
      this.setState({ isAnimation : true });
    }
  }

  onAnimationEnd() {
    if (this.state.isAnimation) {
      this.setState({ isAnimation : false });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.isAnimation !== nextState.isAnimation;
  }

  render() {
    return (
      <header className={Header.CLASS_NAME}>
        <div className="aligner">
          <h1 onMouseEnter={this.onMouseEnter}>
            <img src="assets/images/logo-x2.png" alt="Life with Favorites" width="592" />
          </h1>
          {/*
            <svg width="1182" height="312" title="LIFE with FAVORITES" role="img">
              <use xlinkHref="assets/images/logo.svg" />
            </svg>
          */}
          {/* <h2>LIFE <span>with</span> FAVORITES</h2> */}
          <h2 onMouseEnter={this.onMouseEnter} className={this.state.isAnimation ? '-animation' : ''}>
            Tomohiro IKEDAの<span onAnimationEnd={this.onAnimationEnd} role="presentation">オ</span><span onAnimationEnd={this.onAnimationEnd} role="presentation">キ</span><span onAnimationEnd={this.onAnimationEnd} role="presentation">ニ</span><span onAnimationEnd={this.onAnimationEnd} role="presentation">イ</span><span onAnimationEnd={this.onAnimationEnd} role="presentation">リ</span>生活サイト
          </h2>
        </div>
      </header>
    );
  }
}
