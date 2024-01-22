import React from "react";
import emailLogo from "../images/Mail.png";
import linkedinLogo from "../images/linkedin.png";


export default function Main() {
    return (
        <div className="main--container">
            
            <h3 className="main--heading main--content">
                Business Card
            </h3>
            <h4 className="main--h4--one main--content">
                FullStack Developer
            </h4>
            <span className="main--span--two main--content">
                Website Link Channel
            </span>

            <div className="btn--class">
                <a href="mailto:felipeherrerapere03@email.com" className="main--btn btn--email">
                    <img src={emailLogo} alt="Email Logo" className="email" />Email
                </a>
                <a href="https://www.linkedin.com/in/felipe-herreradev/" className="main--btn btn--linkedin">
                    <img src={linkedinLogo} alt="LinkedIn Logo" className="linkedin" />LinkedIn
                </a>
            </div>

            <div className="main--about--interest">
                <h3>About</h3>
                <p>Throughout my 18 years I have developed a passion for technology,
                    I want to be an activist in the IT world and teach in the most remote places in the world.
                    I see myself as a great generator of products & services to optimize and innovate in human society.</p>
                <h3>Interests</h3>
                <p>I am interested in being an activist in the area of ​​digital business, being an adventurer in every sense and being able to learn to unlearn.</p>
            </div>

        </div>
    );
}