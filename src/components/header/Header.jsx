import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import './header.css';

const Header = () => {

    return (
        <header>
            <div className='container header__container'>
                <div className='title__container'>
                    <a href='/' className='title'>Ralph Santos</a>
                </div>
                <div className='pages__container'>
                    <div id='work'>
                        <a href='/' onClick={document.getElementById('work').style.textDecoration='underline'}>Work</a>
                    </div>
                    <div id='about'>
                        <a href='/about' onClick={document.getElementById('about').style.textDecoration='underline'}>About</a>
                    </div>
                </div>
                <div className='socials__container'>
                    <a href='https://www.instagram.com/jimmitran3/' target="_blank"><BsInstagram/></a>
                    <a href='https://twitter.com/xirenaa_' target="_blank"><BsTwitter/></a>
                    <a href='https://www.linkedin.com/in/jimmy-tran-8885a721a/' target="_blank"><BsLinkedin/></a>
                </div>
            </div>
        </header>
    )
}

export default Header;
