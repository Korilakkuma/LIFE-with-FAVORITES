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
                    <ul className="list-marker -white">
                        <li>HTML, CSS</li>
                        <li>JavaScript (ES2015 ~, TypeScript, Node.js)</li>
                        <li>React, Angular</li>
                        <li>PHP, Go</li>
                        <li>C, C++, UNIX programming</li>
                        <li>Shellscript</li>
                        <li>MySQL, MongoDB</li>
                        <li>Nginx, Docker</li>
                        <li>macOS, Linux, zsh</li>
                        <li>Vim</li>
                        <li>Sketch, Photoshop</li> 
                    </ul>
                </div>
            </section>
        );
    }
}
