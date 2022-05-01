import React, { useState, useEffect, useRef } from 'react';
// import EmailLink from './Contact/EmailLink';
// import ContactIcons from './Contact/ContactIcons';
import '../css/components/Contacts.css';
//css needed

const validateText = (text) => {
    // NOTE: Passes RFC 5322 but not tested on google's standard.
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
    return re.test(text) || text.length === 0;
};

/* const _validateMail = email => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return (true)
    }
    return false;
} */

const messages = [
    'hi',
    'hello',
    'hola',
    'you-can-email-me-at-literally-anything! Really',
    'well, not anything. But most things',
    'like-this',
    'or-this',
    'but not this :(  ',
    'you.can.also.email.me.with.specific.topics.like',
    'just-saying-hi',
    'please-work-for-us',
    'help',
    'admin',
    'or-I-really-like-your-website',
    'well-these-are-just-quotes',
    'please click the mail button below :)',
    'thanks',
];

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay) {
            const id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }
        return () => {}; // pass linter
    }, [delay]);
};

const EmailLink = () => {
    const hold = 50; // ticks to wait after message is complete before rendering next message
    const delay = 50; // tick length in mS
    const messagesnew = [...messages];

    const [idx, updateIter] = useState(0); // points to current message
    const [message, updateMessage] = useState(messagesnew[idx]);
    const [char, updateChar] = useState(messagesnew[idx].length); // points to current char
    const [isActive, setIsActive] = useState(false); // disable when all messages are printed
    /* const onMouseOver = event => {
        const el = event.target;
        let colorhex = [
            "#61D3A3"
        ];
        el.style.bgColor = colorhex[Math.floor(Math.random() * 12)];
    };
    const onMouseOut = event => {
        const el = event.target;
        el.style.color = "";
    }; */

    useInterval(() => {
        let newIdx = idx;
        let newChar = char;
        if (char - hold >= messagesnew[idx].length) {
            newIdx += 1;
            newChar = 0;
        }
        if (newIdx === messagesnew.length) {
            setIsActive(true);
            const messagesnew = [...messages];
            let newIdx = idx;
            let newChar = char;
        } else {
            updateMessage(messagesnew[newIdx].slice(0, newChar));
            updateIter(newIdx);
            updateChar(newChar + 1);
        }
    }, isActive ? delay : null);

    return (
        <div
            className="inline-container"
            style={validateText(message) ? {} : { color: 'red' }}
            /* onMouseOver={ => {
                const el = event.target;
                let colorhex = [
                    "#61D3A3"
                ];
                el.style.color = colorhex[Math.floor(Math.random() * 12)];
            } */
            onMouseEnter={() => setIsActive(false)}
            // onMouseEnter={event => onMouseOver(event)}
            // onMouseOut={event => onMouseOut(event)}
            onMouseLeave={() => (idx < messagesnew.length) && setIsActive(true)}
        >
            <a>
                <span>{message}</span>
                <span>@gnpaone.com</span>
            </a>
        </div>
    );
};

const ContactLinks = props => {
    const position = props.side;
    var i = 11;
    const contactLinks = props.items.map(item => {
        return (
                <li
                    key={item.name}
                    className="contacts-item"   
                >
                    <a className={"contacts-link" + ((position) ? " fade-in-left-"+i-- : "")} title={"Link to Alberto's " + item.name} href={item.link} target="social">{item.icon}</a>
                </li>

        );
    });
  
    return contactLinks;
}

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.nameId="name";
        this.emailId="email";
        this.textId="text";

        this.state = {
            name: '',
            email: '',
            text: ''
        }
    }

    handleChange = e => {
        var key = e.target.attribute.it;
        this.setState({ [key] : e.target.value.trim() });
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this._validateForm());
    }

    _validateForm = () => {
        var name = this.state.name;

        if(name.length < 5) {
            document.getElementById(this.nameId).classList.add('error-highlight');
            return false;
        }
        document.getElementById(this.nameId).classList.remove('error-highlight');

        var email = this.state.email;
        if(!this._validateMail(email)) {
            document.getElementById(this.emailId).classList.add('error-highlight');
            return false;
        }
        document.getElementById(this.emailId).classList.remove('error-highlight');

        var message = this.state.text;
        if(message.length < 5) {
            document.getElementById(this.textId).classList.add('error-highlight');
            return false;
        }
        document.getElementById(this.textId).classList.remove('error-highlight');
        return true;
        
    }

    _validateMail = email => {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return (true)
        }
        return false;
    }

    render() {
        const { contacts } = this.props;
        return (
            <section id="contacts" className="contacts-section">
                <div className="contacts-container container to-slide up">
                    <div className="contacts-text">
                        <h3>Get in touch </h3>
                        <p className="mail-contacts">If you want to get in touch with me for any reason, may it be about work or just to say hi, send me a mail at <a className="mail-link" href="mailto:gnpaone@gmail.com"><EmailLink /></a> and I will get back to you as soon as possible.</p>
                    </div>
                    <div className="contacts-mobile">
                        <p>Alternatively, if you wish to follow me or to contact me in other ways, you can also find me on </p>
                        <ul className="contacts-banner">
                            <ContactLinks items={contacts} side={false}/>
                        </ul> 
                    </div>
                </div>
                <div className="contacts-sidebar" id="contacts-sidebar">
                    <ul className="contacts-sidebar-list">
                        <ContactLinks items={contacts} side={true}/>
                    </ul>
                </div>
            </section>
        )
    }
}