import React from 'react';
import Scene from './Scene.js';
import '../css/components/Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: true
        }
    }

    slideOut = () => {
        this.setState( { active : false } );
    }

    progressCallback = (amount) => {
        this.props.progressCallback(amount);
    }

    render = () => {
        return (
            <section id="home" className="header-section">
                <div id="header-container" className="header-container container">
                    <div id="welcome" className="welcome">
                        <h1 id="welcome-hero" className="welcome-hero">
                            Hello!
                        </h1>
                        <h2 id="welcome-name" className="welcome-name">
                            <span className="letter">I</span><span className="letter">'</span><span className="letter">m</span><span className="space"> </span><span className="letter">N</span><span className="letter">a</span><span className="letter">v</span><span className="letter">e</span><span className="letter">e</span><span className="letter">n</span><span className="space"> </span><span className="letter">P</span><span className="letter">r</span><span className="letter">a</span><span className="letter">s</span><span className="letter">h</span><span className="letter">a</span><span className="letter">n</span><span className="letter">t</span><span className="letter">h</span><span className="letter">.</span>
                        </h2>
                        <p id="welcome-info" className="welcome-info">Computer Engineer and Web Developer.</p>
                    </div>
                </div>
                <Scene progressCallback={this.progressCallback}/>
            </section>
        )
    };
}