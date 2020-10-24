import React from 'react';
import PropTypes from 'prop-types';
import shallowequal from 'shallowequal';

const Modal = props => {
  const { isShow, children, onClickClose } = props;

  return (
    <div className="Modal" hidden={!isShow}>
      <div className="Modal__overlay" role="button" onClick={onClickClose} />
      <div className="Modal__inner">
        <span className="Modal__closer" role="button" aria-label="close modal" onClick={onClickClose}>X</span>
        <div className="Modal__contents">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isShow       : PropTypes.bool.isRequired,
  children     : PropTypes.node,
  onClickClose : PropTypes.func
};

export class Footer extends React.Component {
  static CLASS_NAME = 'Footer';

  static MAX_LENGTH_OF_SUBJECT = 50;
  static MAX_LENGTH_OF_BODY    = 1000;

  constructor(props) {
    super(props);

    this.state = {
      disabled               : false,
      subject                : '',
      isOverSubject          : false,
      securityErrorOfSubject : false,
      from                   : '',
      isInvalidFrom          : false,
      securityErrorOfFrom    : false,
      body                   : '',
      isOverBody             : false,
      errorMessages          : [],
      successMessages        : [],
      isShowModal            : false
    };

    this.onChangeToSubject = this.onChangeToSubject.bind(this);
    this.onChangeToFrom    = this.onChangeToFrom.bind(this);
    this.onChangeToBody    = this.onChangeToBody.bind(this);
    this.onClickReset      = this.onClickReset.bind(this);
    this.onSubmit          = this.onSubmit.bind(this);
    this.onClickClose      = this.onClickClose.bind(this);
  }

  onChangeToSubject(event) {
    const subject = event.currentTarget.value.trim();

    this.setState({
      subject,
      isOverSubject          : subject.length > Footer.MAX_LENGTH_OF_SUBJECT,
      securityErrorOfSubject : /[\r\n]/.test(subject),
      errorMessages          : []
    });
  }

  onChangeToFrom(event) {
    const from = event.currentTarget.value.trim();

    this.setState({
      from,
      isInvalidFrom       : !/^[*+!.&#$|'\\%/0-9a-z^_`{}=?~:-]+@([0-9a-z-]+\.)+[0-9a-z]{2,}$/i.test(from),
      securityErrorOfFrom : /[\r\n]/.test(from),
      errorMessages       : []
    });
  }

  onChangeToBody(event) {
    const body = event.currentTarget.value.trim();

    this.setState({
      body,
      isOverBody    : body.length > Footer.MAX_LENGTH_OF_BODY,
      errorMessages : []
    });
  }

  onClickReset() {
    /*
    if (!window.confirm('Reset contents. OK ?')) {
      event.preventDefault();
      return;
    }
    */

    this.setState({
      subject                : '',
      isOverSubject          : false,
      securityErrorOfSubject : false,
      from                   : '',
      isInvalidFrom          : false,
      securityErrorOfFrom    : false,
      body                   : '',
      isOverBody             : false,
      errorMessages          : [],
      successMessages        : []
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const {
      subject,
      isOverSubject,
      securityErrorOfSubject,
      from,
      isInvalidFrom,
      securityErrorOfFrom,
      body,
      isOverBody
    } = this.state;

    const errorMessages = [];

    if (subject.length === 0) {
      errorMessages.push('Please type subject');
    }

    if (isOverSubject) {
      errorMessages.push('Subject is less than or equal to 50 chars');
    }

    if (securityErrorOfSubject) {
      errorMessages.push('Invalid subject');
    }

    if (from.length === 0) {
      errorMessages.push('Please type email address');
    }

    if (isInvalidFrom) {
      errorMessages.push('Email address is invalid');
    }

    if (securityErrorOfFrom) {
      errorMessages.push('Invalid email address');
    }

    if (body.length === 0) {
      errorMessages.push('Please type body');
    }

    if (isOverBody) {
      errorMessages.push('Body is less than or equal to 1000 chars');
    }

    if (errorMessages.length > 0) {
      this.setState({
        errorMessages,
        isShowModal : true
      });

      return;
    }

    /*
    if (!window.confirm('Send these contents. OK ?')) {
      return;
    }
    */

    const form = new URLSearchParams();

    form.set('subject', subject);
    form.set('from',    from);
    form.set('body',    body);

    const { action, method } = event.currentTarget;

    const options = {
      method,
      body : form
    };

    this.setState({ disabled : true }, () => {
      fetch(action, options).then(response => {
        return response.json();
      }).then(data => {
        this.setState({
          successMessages : data.messages,
          isShowModal     : true
        });
      }).catch(error => {
        this.setState({
          errorMessages : [error.message],
          isShowModal   : true
        });
      }).finally(() => {
        this.setState({ disabled : false });
      });
    });
  }

  onClickClose() {
    this.setState({ isShowModal : false });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowequal(this.props, nextProps) ||
      !shallowequal(this.state, nextState) ||
      !shallowequal(this.state.errorMessages, nextState.errorMessages) ||
      !shallowequal(this.state.successMessages, nextState.successMessages);
  }

  render() {
    const {
      subject,
      isOverSubject,
      body,
      isOverBody,
      errorMessages,
      successMessages,
      isShowModal,
      disabled
    } = this.state;

    return (
      <footer className={Footer.CLASS_NAME}>
        <div className="aligner">
          <h1>Contact</h1>
          <fieldset>
            <legend hidden>Contact Form</legend>
            <form noValidate action="https://weblike-curtaincall.ssl-lolipop.jp/php/contact" method="post" onSubmit={this.onSubmit} className={`${Footer.CLASS_NAME}__contact`}>
              <dl>
                <dt><label htmlFor="text-subject">Subject<span aria-live="assertive" className={isOverSubject ? '-invalid' : ''}>{subject.length} / {Footer.MAX_LENGTH_OF_SUBJECT}</span></label></dt>
                <dd><input type="text" id="text-subject" name="subject" tabIndex="1" onChange={this.onChangeToSubject} /></dd>
                <dt><label htmlFor="email-from">Address{/* <span hidden={(from.length === 0) || !isInvalidFrom} aria-live="assertive" className={isInvalidFrom ? '-invalid' : ''}>Invalid Email Address</span> */}</label></dt>
                <dd><input type="email" id="email-from" name="from" tabIndex="2" onChange={this.onChangeToFrom} /></dd>
                <dt><label htmlFor="textarea-body">Body<span aria-live="assertive" className={isOverBody ? '-invalid' : ''}>{body.length} / {Footer.MAX_LENGTH_OF_BODY}</span></label></dt>
                <dd><textarea id="textarea-body" name="body" tabIndex="3" onChange={this.onChangeToBody}></textarea></dd>
              </dl>
              <ul>
                <li><button type="reset" tabIndex="5" onClick={this.onClickReset} className={`${Footer.CLASS_NAME}__reset`}>Reset</button></li>
                <li><button type="submit" disabled={disabled} tabIndex="4" className={`${Footer.CLASS_NAME}__send`}>Send</button></li>
              </ul>
            </form>
          </fieldset>
          <Modal isShow={isShowModal} onClickClose={this.onClickClose}>
            {errorMessages.length > 0 ? (
              <ul className={`${Footer.CLASS_NAME}__errors list-marker`}>
                {errorMessages.map(message => <li key={message} aria-live="assertive">{message}</li>)}
              </ul>) : null}
            {successMessages.length > 0 ? (
              <ul className={`${Footer.CLASS_NAME}__success list-marker`}>
                {successMessages.map(message => <li key={message}>{message}</li>)}
              </ul>) : null}
          </Modal>
        </div>
        <section className={`${Footer.CLASS_NAME}__bottom`}>
          <ul className={`${Footer.CLASS_NAME}__sns`}>
            <li>
              <a href="https://github.com/Korilakkuma" target="_blank" rel="noopener noreferrer" className="image-link">
                <img src="assets/images/icon-github.png" alt="GitHub" width="32" height="32" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/xmusicjp" target="_blank" rel="noopener noreferrer" className="image-link">
                <img src="assets/images/icon-twitter.png" alt="Twitter" width="32" height="32" />
              </a>
            </li>
            <li>
              <a href="https://art-of-life.jp" target="_blank" rel="noopener noreferrer" className="image-link">
                <img src="https://art-of-life.jp/apple-touch-icon.png" alt="Blog" width="32" height="32" />
              </a>
            </li>
          </ul>
          <small className={`${Footer.CLASS_NAME}__copyright`}>Copyright (c) 2011 Tomohiro IKEDA (Korilakkuma)</small>
        </section>
      </footer>
    );
  }
}
