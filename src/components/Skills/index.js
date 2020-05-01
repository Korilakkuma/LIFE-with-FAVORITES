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
                            <li>Web Music (Web Audio API, WebRTC ...)</li>
                            <li>Audio Signal Processing</li>
                            <li>Streaming (<a href="https://github.com/video-dev/hls.js/graphs/contributors" target="_blank" rel="noopener noreferrer">&#064;hls.js</a> / <a href="https://github.com/google/shaka-packager/graphs/contributors" target="_blank" rel="noopener noreferrer">&#064;shaka-packager</a>)</li>
                            <li>Computer Science</li>
                            <li>C / C++, UNIX system call</li>
                        </ul>
                    </section>
                    <section>
                        <h1>WEB FRONTEND</h1>
                        <ul className="list-marker -white">
                            <li>HTML / CSS</li>
                            <li>JavaScript (ES2015 ~ / TypeScript / Node.js)</li>
                            <li>Sketch</li>
                        </ul>
                    </section>
                </div>
            </section>
        );
    }
}
