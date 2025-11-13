import { useEffect } from "react";
import AboutHero from "../components/About/AboutHero";
import WhoWeAre from "../components/About/WhoWeAre";
import Organization from "../components/About/Organization";
import Alumni from "../components/About/Alumni";
import Team from "../components/About/Team";

const About = () => {
    useEffect(() => {
        // Handle hash-based scrolling when page loads
        const hash = window.location.hash;
        if (hash) {
            const elementId = hash.substring(1); // Remove the # symbol
            setTimeout(() => {
                const element = document.getElementById(elementId);
                if (element) {
                    const offset = 80; // Account for navbar height
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, []);

    return (
        <div>
        <AboutHero/>
        <WhoWeAre/>
        <Organization/>
        <Alumni/>
        <Team/>
        </div>
    );
}

export default About;