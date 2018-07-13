'use strict';

import React from 'react';

export default class Footer extends React.Component {
    static CLASS_NAME = 'Footer';

    static MAX_LENGTH_OF_SUBJECT = 50;
    static MAX_LENGTH_OF_BODY    = 1000;

    constructor(props) {
        super(props);
        this.state = {
            subject                : '',
            isOverSubject          : false,
            securityErrorOfSubject : false,
            from                   : '',
            isInvalidFrom          : false,
            securityErrorOfFrom    : false,
            body                   : '',
            isOverBody             : false
        };

        this.onChangeToSubject = this.onChangeToSubject.bind(this);
        this.onChangeToFrom    = this.onChangeToFrom.bind(this);
        this.onChangeToBody    = this.onChangeToBody.bind(this);
        this.onClickReset      = this.onClickReset.bind(this);
        this.onSubmit          = this.onSubmit.bind(this);
    }

    onChangeToSubject(event) {
        const subject = event.currentTarget.value.trim();

        this.setState({
            subject,
            isOverSubject          : subject.length > Footer.MAX_LENGTH_OF_SUBJECT,
            securityErrorOfSubject : /[\r\n]/.test(subject)
        });
    }

    onChangeToFrom(event) {
        const from = event.currentTarget.value.trim();

        this.setState({
            from,
            isInvalidFrom       : !/^[*+!.&#$|'\\%/0-9a-z^_`{}=?~:-]+@([0-9a-z-]+\.)+[0-9a-z]{2,}$/i.test(from),
            securityErrorOfFrom : /[\r\n]/.test(from)
        });
    }

    onChangeToBody(event) {
        const body = event.currentTarget.value.trim();

        this.setState({
            body,
            isOverBody : body.length > Footer.MAX_LENGTH_OF_BODY
        });
    }

    onClickReset(event) {
        if (!window.confirm('Reset contents. OK ?')) {
            event.preventDefault();
        }
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

        let isError = false;

        if (subject.length === 0) {
            isError = true;
            window.alert('Please type subject.');
        }

        if (isOverSubject) {
            isError = true;
            window.alert('Please type subject less than or equal 50 to characters.');
        }

        if (securityErrorOfSubject) {
            isError = true;
            window.alert('Invalid type.');
        }

        if (isInvalidFrom) {
            isError = true;
            window.alert('Mail address is invalid.');
        }

        if (securityErrorOfFrom) {
            isError = true;
            window.alert('Invalid type.');
        }

        if (body.length === 0) {
            isError = true;
            window.alert('Please type message.');
        }

        if (isOverBody) {
            isError = true;
            window.alert('Please type message less than or equal to 1000 characters.');
        }

        if (isError) {
            return;
        }

        if (!window.confirm('Send these contents. OK ?')) {
            return;
        }

        const form = new FormData();

        form.append('subject', subject);
        form.append('from',    from);
        form.append('body',    body);

        const { action, method } = event.currentTarget;

        const options = {
            method,
            // headers : new Headers({ 'Content-Type' : 'application/x-www-form-url-encoded' }),
            body : form,
            mode : 'cors'
        };

        fetch(action, options).then(response => {
            return response.json();
        }).then(data => {
            data.messages.forEach(message => window.alert(message));
        }).catch(error => {
            window.alert(error);
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.state.subject !== nextState.subject) ||
            (this.state.isOverSubject !== nextState.isOverSubject) ||
            (this.state.securityErrorOfSubject !== nextState.securityErrorOfSubject) ||
            (this.state.from !== nextState.from) ||
            (this.state.isInvalidFrom !== nextState.isInvalidFrom) ||
            (this.state.securityErrorOfFrom !== nextState.securityErrorOfFrom) ||
            (this.state.body !== nextState.body) ||
            (this.state.isOverBody !== nextState.isOverBody);
    }

    render() {
        const {
            subject,
            isOverSubject,
            from,
            isInvalidFrom,
            body,
            isOverBody
        } = this.state;

        return (
            <footer className={Footer.CLASS_NAME}>
                <div className="aligner">
                    <h1>CONTACT</h1>
                    <fieldset>
                        <legend hidden>Contact Form</legend>
                        <form action="https://weblike-curtaincall.ssl-lolipop.jp/php/bootstrap.php?mode=contact" method="post"  onSubmit={this.onSubmit}>
                            <dl>
                                <dt><label htmlFor="text-subject">Subject<span aria-live="assertive" className={isOverSubject ? '-invalid' : ''}>{subject.length} / {Footer.MAX_LENGTH_OF_SUBJECT}</span></label></dt>
                                <dd><input type="text" id="text-subject" name="subject" tabIndex="1" onChange={this.onChangeToSubject} /></dd>
                                <dt><label htmlFor="email-from">Address<span hidden={(from.length === 0) || !isInvalidFrom} aria-live="assertive" className={isInvalidFrom ? '-invalid' : ''}>Invalid Email Address</span></label></dt>
                                <dd><input type="email" id="email-from" name="from" tabIndex="2" onChange={this.onChangeToFrom} /></dd>
                                <dt><label htmlFor="textarea-body">Body<span aria-live="assertive" className={isOverBody ? '-invalid' : ''}>{body.length} / {Footer.MAX_LENGTH_OF_BODY}</span></label></dt>
                                <dd><textarea id="textarea-body" name="body" tabIndex="3" onChange={this.onChangeToBody}></textarea></dd>
                            </dl>
                            <ul>
                                <li><button type="reset" tabinedx="5" onClick={this.onClickReset} className={`${Footer.CLASS_NAME}__reset`}>RESET</button></li>
                                <li><button type="submit" tabIndex="4" className={`${Footer.CLASS_NAME}__send`}>SEND</button></li>
                            </ul>
                        </form>
                    </fieldset>
                </div>
                <small className={`${Footer.CLASS_NAME}__copyright`}>Copyright (c) 2011 - 2018 Tomohiro IKEDA (Korilakkuma)</small>
            </footer>
        );
    }
}