import React from 'react';
import './Header.scss';
import facebook from '../Images/svg/facebook.svg';
import gitHub from '../Images/svg/git-hub.svg';
import instagram from '../Images/svg/instagram.svg';
import telegram from '../Images/svg/telegram.svg';
import youtube from '../Images/svg/youtube.svg';
import myImg from '../Images/my-img.png';

function Header () { 
    return (
      <>
      <header>
      <section className='section-1'>
        <div className='my-links'>
            <a href='https://ru-ru.facebook.com/'><img src={facebook} /></a>
            <a href='https://github.com/kamronovv'><img src={gitHub} /></a>
            <a href='https://www.instagram.com/kamronlivee/'><img src={instagram}/></a>
            <a href='https://t.me/KamronDevv'><img src={telegram}/></a>
            <a href='https://www.youtube.com/channel/UCo6BoZndNgnlSMny0WLzdmw'><img src={youtube}/></a>
        </div>
        <div className='header-text'>
            <h1 className='text-1'>Hi</h1>
            <h1 className='text-2'>I`m <span>Olimov Kamron</span></h1>
            <h1 className='text-3'>Frontend <span>Developer</span></h1>
            <a href='#'>Contact</a>
        </div>
            <img className='my-img' src={myImg} /> 
            <a className='' ></a>      
        </section>
      </header>     
      </>
    );
  }
  
  export default Header;
  
