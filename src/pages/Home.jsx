import React from 'react';
import Banner from '../component/Banner';
import LatestJobs from '../component/LatestJobs';

const Home = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto rounded'>
            <Banner></Banner>
            <LatestJobs></LatestJobs>
            </div>
        </div>
    );
};

export default Home;