import React from 'react';
// import { Link } from 'react-router-dom';
import '../css/components/Stats.css';
// import Main from '../layouts/Main';

import Personal from './Stats/Personal';
import Site from './Stats/Site';

const Stats = () => {
  return(
    <section id="stats" className="stats-section">
      <div className="stats-container container to-slide up">
        <Personal />
        <Site />
      </div>
    </section>

  /* <Main
    title="Stats"
    description="Some statistics about Michael D'Angelo and mldangelo.com"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main> */
  );
}

export default Stats