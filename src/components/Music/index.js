import React from 'react';

export const Music = () => {
  return (
    <section className={Music.CLASS_NAME}>
      <div className="aligner">
        <h1>Music</h1>
        <ul className={`${Music.CLASS_NAME}__grid`}>
          {/* <li><iframe key="cjLcjjfJmVw" width="560" height="315" src="https://www.youtube.com/embed/cjLcjjfJmVw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></li> */}
          <li><iframe key="Xs_u5Cx5U1I" width="560" height="315" src="https://www.youtube.com/embed/Xs_u5Cx5U1I" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></li>
          {/* <li><iframe key="bcbDMOw2bGw" width="560" height="315" src="https://www.youtube.com/embed/bcbDMOw2bGw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></li> */}
          {/* <li><iframe key="ToWPdpeMT_w" width="560" height="315" src="https://www.youtube.com/embed/ToWPdpeMT_w" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></li> */}
          {/* <li><iframe key="7T8KGcuOu6I" width="560" height="315" src="https://www.youtube.com/embed/7T8KGcuOu6I" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></li> */}
          <li><iframe key="aCBxCotZA4A" width="560" height="315" src="https://www.youtube.com/embed/aCBxCotZA4A" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></li>
        </ul>
      </div>
    </section>
  );
};

Music.CLASS_NAME = 'Music';
