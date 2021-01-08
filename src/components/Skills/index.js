import React from 'react';

export const Skills = () => {
  return (
    <section className={Skills.CLASS_NAME}>
      <div className="aligner">
        <h1>Skills</h1>
        <section>
          <h2>Advanced</h2>
          <ul className="list-marker -white">
            <li>Web Music (Web Audio API)</li>
            <li>Audio Signal Processing</li>
            <li>Web Frontend (HTML, CSS, JavaScript)</li>
          </ul>
        </section>
        <section>
          <h2>Intermediate</h2>
          <ul className="list-marker -white">
            <li>C/C++, PDP 11/40 Assembly, UNIX V6</li>
            <li>hls.js (<a href="https://github.com/video-dev/hls.js/graphs/contributors" target="_blank" rel="noopener noreferrer">contributor</a>)</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

Skills.CLASS_NAME = 'Skills';
