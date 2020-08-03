'use strict';

import React from 'react';

export default class Skills extends React.Component {
    static CLASS_NAME = 'Skills';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <section className={Skills.CLASS_NAME}>
                <div className="aligner">
                    <h1>SKILLS</h1>
                    <section>
                        <h1>MULTIMEDIA</h1>
                        <ul className="list-marker -white">
                            <li>Audio Signal Processing</li>
                            <li>C / C++, UNIX system call</li>
                            <li>Web Music (Web Audio API, WebRTC ...)</li>
                        </ul>
                    </section>
                    <section>
                        <h1>WEB FRONTEND</h1>
                        <ul className="list-marker -white">
                            <li>HTML / CSS</li>
                            <li>JavaScript (TypeScript / Node.js)</li>
                            <li>Sketch</li>
                        </ul>
                    </section>
                </div>
            </section>
        );
    }
}
