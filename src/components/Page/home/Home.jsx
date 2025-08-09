import React from 'react';
import HomeSlider from './HomeSlider';
import RecentQueries from './RecentQueries';
import AnimatedStat from '../ExtraSection/AnimatedStat';
import WhyChooseUs from '../ExtraSection/WhyChooseUs';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <HomeSlider></HomeSlider>
            <RecentQueries></RecentQueries>
            <AnimatedStat></AnimatedStat>
            <WhyChooseUs></WhyChooseUs>
            
        </div>
    );
};

export default Home;