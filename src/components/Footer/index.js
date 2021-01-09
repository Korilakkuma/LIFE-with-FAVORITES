import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

const MAX_LENGTH_OF_SUBJECT = 50;
const MAX_LENGTH_OF_BODY    = 1000;
const CLASS_NAME            = 'Footer';

const Modal = (props) => {
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
  isShow      : PropTypes.bool.isRequired,
  children    : PropTypes.node,
  onClickClose: PropTypes.func
};

export const Footer = () => {
  const [disabled, setDisabled] = useState(false);
  const [subject, setSubject] = useState('');
  const [isOverSubject, setIsOverSubject] = useState(false);
  const [securityErrorOfSubject, setSecurityErrorOfSubject] = useState(false);
  const [from, setFrom] = useState('');
  const [isInvalidFrom, setIsInvalidFrom] = useState(false);
  const [securityErrorOfFrom, setSecurityErrorOfFrom] = useState(false);
  const [body, setBody] = useState('');
  const [isOverBody, setIsOverBody] = useState(false);
  const [successMessages, setSuccessMessages] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  const formRef = useRef(null);

  const onSubmitCallback = useCallback((event) => {
    event.preventDefault();

    if (formRef.current === null) {
      return;
    }

    setSuccessMessages([]);
    setErrorMessages([]);

    const messages = [];

    if (subject.length === 0) {
      messages.push('Please type subject');
    }

    if (isOverSubject) {
      messages.push('Subject is less than or equal to 50 chars');
    }

    if (securityErrorOfSubject) {
      messages.push('Invalid subject');
    }

    if (from.length === 0) {
      messages.push('Please type email address');
    }

    if (isInvalidFrom) {
      messages.push('Email address is invalid');
    }

    if (securityErrorOfFrom) {
      messages.push('Invalid email address');
    }

    if (body.length === 0) {
      messages.push('Please type body');
    }

    if (isOverBody) {
      messages.push('Body is less than or equal to 1000 chars');
    }

    if (messages.length > 0) {
      setErrorMessages(messages);
      setIsShowModal(true);
      return;
    }

    const form = new URLSearchParams();

    form.set('subject', subject);
    form.set('from',    from);
    form.set('body',    body);

    const { action, method } = event.currentTarget;

    const options = {
      method,
      body: form
    };

    setDisabled(true);

    fetch(action, options)
      .then(response => {
        return response.json();
      }).then(data => {
        setSuccessMessages(data.messages);
        setIsShowModal(true);
      }).catch(error => {
        setErrorMessages([error.message]);
        setIsShowModal(true);
      }).finally(() => {
        setDisabled(false);
      });
  }, [
    subject,
    isOverSubject,
    securityErrorOfSubject,
    from,
    isInvalidFrom,
    securityErrorOfFrom,
    body,
    isOverBody
  ]);

  const onChangeSubjectCallback = useCallback((event) => {
    const subject = event.currentTarget.value.trim();

    setSubject(subject);
    setIsOverSubject(subject.length > MAX_LENGTH_OF_SUBJECT);
    setSecurityErrorOfSubject(/[\r\n]/.test(subject));
    setErrorMessages([]);
  }, []);

  const onChangeFromCallback = useCallback((event) => {
    const from = event.currentTarget.value.trim();

    setFrom(from);
    setIsInvalidFrom(!/^[*+!.&#$|'\\%/0-9a-z^_`{}=?~:-]+@([0-9a-z-]+\.)+[0-9a-z]{2,}$/i.test(from));
    setSecurityErrorOfFrom(/[\r\n]/.test(from));
    setErrorMessages([]);
  }, []);

  const onChangeBodyCallback = useCallback((event) => {
    const body = event.currentTarget.value.trim();

    setBody(body);
    setIsOverBody(body.length > MAX_LENGTH_OF_BODY);
    setErrorMessages([]);
  }, []);

  const onResetCallback = useCallback(() => {
    setSubject('');
    setIsOverSubject(false);
    setSecurityErrorOfSubject(false);
    setFrom('');
    setIsInvalidFrom(false);
    setSecurityErrorOfFrom(false);
    setBody('');
    setIsOverBody(false);
    setSuccessMessages([]);
    setErrorMessages([]);
  }, []);

  const onCloseCallback = useCallback(() => {
    setIsShowModal(false);
  }, []);

  return (
    <footer className={CLASS_NAME}>
      <div className="aligner">
        <h1>Contact</h1>
        <fieldset>
          <legend hidden>Contact Form</legend>
          <form noValidate ref={formRef} action="https://weblike-curtaincall.ssl-lolipop.jp/php/contact" method="post" className={`${CLASS_NAME}__contact`} onSubmit={onSubmitCallback}>
            <dl>
              <dt><label htmlFor="text-subject">Subject<span aria-live="assertive" className={isOverSubject ? '-invalid' : ''}>{subject.length} / {MAX_LENGTH_OF_SUBJECT}</span></label></dt>
              <dd><input type="text" id="text-subject" name="subject" tabIndex="1" onChange={onChangeSubjectCallback} /></dd>
              <dt><label htmlFor="email-from">Address{/* <span hidden={(from.length === 0) || !isInvalidFrom} aria-live="assertive" className={isInvalidFrom ? '-invalid' : ''}>Invalid Email Address</span> */}</label></dt>
              <dd><input type="email" id="email-from" name="from" tabIndex="2" onChange={onChangeFromCallback} /></dd>
              <dt><label htmlFor="textarea-body">Body<span aria-live="assertive" className={isOverBody ? '-invalid' : ''}>{body.length} / {MAX_LENGTH_OF_BODY}</span></label></dt>
              <dd><textarea id="textarea-body" name="body" tabIndex="3" onChange={onChangeBodyCallback}></textarea></dd>
            </dl>
            <ul>
              <li><button type="reset" tabIndex="5" onClick={onResetCallback} className={`${CLASS_NAME}__reset`}>Reset</button></li>
              <li><button type="submit" disabled={disabled} tabIndex="4" className={`${CLASS_NAME}__send`}>Send</button></li>
            </ul>
          </form>
        </fieldset>
        <Modal isShow={isShowModal} onClickClose={onCloseCallback}>
          {errorMessages.length > 0 ? (
            <ul className={`${CLASS_NAME}__errors list-marker`}>
              {errorMessages.map(message => <li key={message} aria-live="assertive">{message}</li>)}
            </ul>) : null}
          {successMessages.length > 0 ? (
            <ul className={`${CLASS_NAME}__success list-marker`}>
              {successMessages.map(message => <li key={message}>{message}</li>)}
            </ul>) : null}
        </Modal>
      </div>
      <section className={`${CLASS_NAME}__bottom`}>
        <ul className={`${CLASS_NAME}__sns`}>
          <li>
            <a href="https://github.com/Korilakkuma" target="_blank" rel="noopener noreferrer" className="image-link">
              <img src="assets/images/icon-github.png" alt="GitHub" width="32" height="32" />
            </a>
          </li>
          <li>
            <a href="https://art-of-life.jp" target="_blank" rel="noopener noreferrer" className="image-link">
              <img src="https://art-of-life.jp/apple-touch-icon.png" alt="Blog" width="32" height="32" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/rilakkuma3xjapan" target="_blank" rel="noopener noreferrer" className="image-link">
              <img src="assets/images/icon-youtube.png" alt="YouTube" width="32" height="32" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/xmusicjp" target="_blank" rel="noopener noreferrer" className="image-link">
              <img src="assets/images/icon-twitter.png" alt="Twitter" width="32" height="32" />
            </a>
          </li>
        </ul>
        <small className={`${CLASS_NAME}__copyright`}>Copyright (c) 2011 Tomohiro IKEDA (Korilakkuma)</small>
      </section>
    </footer>
  );
};
