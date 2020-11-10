import React from 'react';

export class Skills extends React.Component {
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
          <h1>Skills</h1>
          <section>
            <h2>MULTIMEDIA</h2>
            <ul className="list-marker -white">
              <li>Web Music (Web Audio API, WebRTC ...)</li>
              <li>C/C++, PDP 11/40 Assembly, UNIX V6</li>
              <li>Audio Signal Processing</li>
            </ul>
          </section>
          <section>
            <h2>Web Frontend</h2>
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
