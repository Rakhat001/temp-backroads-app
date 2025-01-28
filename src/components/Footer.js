import React from 'react'
import { pageLinks, social_Media_Links } from "../data";

const Footer = () => {
    return (
        <footer className="section footer">

            <ul className="footer-links">
                {pageLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.href} className="footer-link"> {link.text} </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="footer-icons">

                {social_Media_Links.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.href} target="_blank" className="footer-icon" rel="noreferrer"
                            ><i className={link.className}></i
                            ></a>
                        </li>
                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer
