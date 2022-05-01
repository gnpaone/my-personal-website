import React, { useEffect, useState } from 'react';
import proPic from '../media/download.png';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Markdown from 'markdown-to-jsx';
import '../css/components/About.css';

// uses babel to load contents of file
const markdown = require('../data/about.md');
const countdown = raw('../data/about.md');

const count = countdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => {

    let [ content, setContent] = useState({md: ""});

    useEffect(()=> {
        fetch(markdown)
            .then((res) => res.text())
            .then((md) => {
                setContent({ md })
            })
    }, [])

    return(
        <section id="about" className="about-section">
            <div className="about-container container to-slide up">
                <div className="about-text">
                    <h3>About me (in about {count} words) </h3>
                    <Markdown children={content.md}/>
                </div>
                <div className="about-photo">
                    <img className="propic" alt="Alberto profile" src={proPic}/>
                </div>
            </div>
        </section>
    );
}

export default About