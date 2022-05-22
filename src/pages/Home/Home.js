import React from 'react';
import Footer from '../../shared/Footer';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Testimonials from './Testimonial';
import Tools from './Tools';
import WhatweMake from './WhatweMake';


const Home = () => {
    return (
        <div>
            <Banner />
            <WhatweMake />
            <Tools/>
            <BusinessSummury/>
            <Testimonials />
            <Footer/>
            
        </div>
    );
};

export default Home;