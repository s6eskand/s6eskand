import React from 'react';

import './Footer.css';

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <p className="footer-content">
                    <a href="https://linkedin.com/in/sameskandar" style={{ paddingRight: 10 }}><FaLinkedin size={30} /></a>
                    <a href="https://github.com/s6eskand"><FaGithub size={30} /></a> <br/>
                    sam.eskandar22@gmail.com<br/>
                    &copy; Sam Eskandar, Last Updated March 2021
                </p>
            </div>
        </div>
    )
}

export default Footer;