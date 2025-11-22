import React from 'react';
import Hero from '../components/Home/Hero';
import HomeAbout from '../components/Home/HomeAbout';
import Excel from '../components/Home/Excel';
import Impact from '../components/Home/Impact';
import OurServices from '../components/Home/OurServices';
import HomeAbout2 from '../components/Home/HomeAbout2';
import ProjectHighlights from '../components/Home/ProjectHighlights';
import ScheduleCall from '../components/Home/ScheduleCall';
import Alumni from '../components/About/Alumni';



const Home = () => {

    return (
        <>
        <main>
            
            <Hero/>
            <HomeAbout/>
            <Excel/>
            <Impact/>
            <OurServices/>
            <HomeAbout2/>
                 <Alumni/>
            <ProjectHighlights/>
            <ScheduleCall/>


        </main>
        </>
    );
}

export default Home;