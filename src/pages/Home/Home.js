import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Testimonials from './Testimonial';
import WhatweMake from './WhatweMake';


const Home = () => {
    return (
        <div>
            <Banner />
            <WhatweMake />
            <BusinessSummury/>
            <Testimonials />
            
        </div>
    );
};

export default Home;