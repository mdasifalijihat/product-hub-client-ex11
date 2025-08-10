import React from 'react';
import HomeSlider from './HomeSlider';
import RecentQueries from './RecentQueries';
import AnimatedStat from '../ExtraSection/AnimatedStat';
import WhyChooseUs from '../ExtraSection/WhyChooseUs';
import LandingSections from './newbanner/LandingSections';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <HomeSlider></HomeSlider>
            <RecentQueries></RecentQueries>
            <AnimatedStat></AnimatedStat>
            <WhyChooseUs></WhyChooseUs>
            <LandingSections/>
            
        </div>
    );
};

export default Home;