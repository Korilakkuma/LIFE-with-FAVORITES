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
                            <li>Web Music (Web Audio API,  WebRTC ... etc)</li>
                            <li>hls.js / shaka-packager contributor</li>
                            <li>C / C++, UNIX system call</li>
                            <li>DSP (Digital Signal Processing)</li>
                            <li>Computer Science</li>
                        </ul>
                    </section>
                    <section>
                        <h1>WEB FRONTEND</h1>
                        <ul className="list-marker -white">
                            <li>HTML, CSS</li>
                            <li>JavaScript (ES2015 ~, TypeScript, Node.js)</li>
                            <li>Sketch</li>
                        </ul>
                    </section>
                </div>
            </section>
        );
    }
}
