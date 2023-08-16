import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


export default function Navbar(props) {
    // const [myStyle, setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    // const [btnText, setBtnText] = useState('Enable Dark Mode');

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setStyle({ color: 'black', backgroundColor: 'white' });
    //         setBtnText('Enable Dark Mode')
    //         console.log(setBtnText)
    //     } else {
    //         setStyle({ color: 'white', backgroundColor: 'black' });
    //         setBtnText('Enable Light Mode')
    //         console.log(setBtnText)
    //     }
    // }
    return (
        <div>
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/" >{props.title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/" >Home</a>
                                </li>
                                {/* Other list items */}

                            </ul>
                            <div style={{ paddingRight: '15px' }}>
                                <FontAwesomeIcon icon={faSun} size='2x' />
                            </div>
                            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                            </div>
                            <div style={{ paddingLeft: '15px' }}>
                                <FontAwesomeIcon icon={faMoon} size='2x' />
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string
};

Navbar.defaultProps = {
    title: 'null'
};
