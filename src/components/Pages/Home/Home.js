import React from 'react';
import Chart from '../Chart/Chart';
import { FaTrophy } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { BsBriefcaseFill } from 'react-icons/bs';
import { ImHome } from 'react-icons/im';
import './home.css'

const Home = () => {
    return (
        <div className=''>
            <FaTrophy className='trophy' />
            <HiLightBulb className='bulb' />
            <BsFillChatDotsFill className='dots' />
            <BsBriefcaseFill className='briefcase' />
            <ImHome className='home' />
            <Chart />
        </div>
    );
};

export default Home;