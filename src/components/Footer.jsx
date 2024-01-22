import React from "react"
import twitterLogo from "../images/Twitter Icon.png"
import instaLogo from "../images/Instagram Icon.png"
import githubLogo from "../images/GitHub Icon.png"
import facebookLogo from "../images/Facebook Icon.png"

export default function Footer() {
    return (
        <div className="footer--container">
            <div className="footer--items">
                <a href="https://twitter.com/FelipeH23P" target="_blank" rel="noopener noreferrer">
                    <img src={twitterLogo} alt="" className="footer--image" />
                </a>
                <a href="https://www.instagram.com/herreracode3/" target="_blank" rel="noopener noreferrer">
                    <img src={instaLogo} alt="" className="footer--image" />
                </a>
                <a href="https://github.com/FelipePerea03" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="" className="footer--image" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100090726596320" target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt="" className="footer--image" />
                </a>
            </div>
        </div>
    );
}