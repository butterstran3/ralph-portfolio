import React, { useEffect, useState } from 'react';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const [activeNav, setActiveNav] = useState('work');
    const [mobileActive, setMobileActive] = useState(false);
    const [mobileNavActive, setMobileNavActive] = useState(false);

    const toggleNav = (page) => {
        setActiveNav(page);
        setMobileNavActive(!mobileNavActive);
    }

    useEffect(() => {
        const checkIsPhone = () => {
            if (window.innerWidth <= 600) {
                setMobileActive(true);
            } else {
                setMobileActive(false);
            }
        };

        checkIsPhone();
        window.addEventListener('resize', checkIsPhone);
    
        return () => {
            window.removeEventListener('resize', checkIsPhone);
        };
    }, []);


    if (mobileActive && !mobileNavActive) {
        return (
                <header>
                    <div className='container header__container'>
                        <div className='title__container'>
                            <a href='/' className='title'>Ralph Santos</a>
                        </div>
                        <div className='modal-btn__container'>
                            <button className='modal-btn' onClick={() => setMobileNavActive(!mobileNavActive)}><AiOutlineMenu/></button>
                        </div>
                    </div>
                </header>
        )
    } else if (mobileActive && mobileNavActive) {
        return (
            <div className='modal__container'>
                <header>
                    <div className='container mobile-header__container'>
                        <div className='title__container'>
                            <a href='/' className='title'>Ralph Santos</a>
                        </div>
                        <div className='modal-btn__container'>
                            <button className='modal-btn' onClick={() => setMobileNavActive(!mobileNavActive)}><RxCross1/></button>
                        </div>
                    </div>
                </header>
                <div className='modal-content__container'>
                    <header>
                        <div className='container header__container'>
                            <div className='title__container'>
                                <a href='/' className='title'>Ralph Santos</a>
                            </div>
                            <div className='modal-btn__container'>
                                <button className='modal-btn' onClick={() => setMobileNavActive(!mobileNavActive)}><RxCross1/></button>
                            </div>
                        </div>
                    </header>
                    <div className='mobile-pages__container'>
                        <div className='mobile-work'>
                            <Link to="/" onClick={() => toggleNav('work')} className={activeNav === 'work' ? 'active' : ''}>Work</Link>
                        </div>
                        <div className='mobile-about'>
                            <Link to="/about" onClick={() => toggleNav('about')} className={activeNav === 'about' ? 'active' : ''}>About</Link>
                        </div>
                        <div className='mobile-socials__container'>
                            <a href='https://www.instagram.com/jimmitran3/' target="_blank"><BsInstagram/></a>
                            <a href='https://twitter.com/xirenaa_' target="_blank"><BsTwitter/></a>
                            <a href='https://www.linkedin.com/in/jimmy-tran-8885a721a/' target="_blank"><BsLinkedin/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <header>
                <div className='container header__container'>
                    <div className='title__container'>
                        <a href='/' className='title'>Ralph Santos</a>
                    </div>
                    <div className='pages__container'>
                        <Link to="/" onClick={() => setActiveNav('work')} className={activeNav === 'work' ? 'active' : ''}>Work</Link>
                        <Link to="/about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}>About</Link>
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
}

export default Header;
