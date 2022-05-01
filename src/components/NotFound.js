import React from 'react';
import { Link } from 'react-router-dom';
import '../css/components/About.css';

const PageNotFound = () => {
  return(
    <section id="not-found" className="not-found-section">
      <div className="not-found-container container to-slide up">
        <div className="about-text">
          <h3>Page Not Found</h3>
          <p className="about-info">The content you are looking for cannot be found.</p>
          <p className="about-info">Return <Link to="/">home</Link>.</p>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound