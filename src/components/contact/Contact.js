import React from 'react';
import './Contact.scss'
// images
import location from '../Images/lacation.png';
import Phone from '../Images/phone.png';
import Email from '../Images/email.png';

function Contact() {
    return (
      <div className='contact-container'>
        <div className='box-1'>
        <h1 className='title'>Contact Us</h1>
        <p className='title-pgf'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit eligendi quaerat accusantium temporibus magnam doloribus facere voluptas incidunt odio. Corporis sunt provident ratione dolores!</p>
        </div>
        <div className='box-2'>
          <div className='left-box' >
            <div className='items'>
              <div className='img-box'>
                <img src={location} />
              </div>
              <div className='text-box'>
                <h3>Address</h3>
                <p>Uzbekiston davlati xorazim vlloyati Urganch Shahar 17/2 76-uy</p>
              </div>
            </div>
            <div className='items'>
              <div className='img-box'>
                <img src={Phone} />
              </div>
              <div className='text-box'>
                <h3>Phone</h3>
                <p>+998900907022</p>
              </div>
            </div>
            <div className='items'>
              <div className='img-box'>
                <img src={Email} />
              </div>
              <div className='text-box'>
                <h3>Email</h3>
                <p>Kamronovv@gmail.com</p>
              </div>
            </div>
          </div>
          {/*right box */}
          <div className='right-box' >
            <div className='Big-box' >
              <h3>Sent Message</h3>
              <form>
                <input type='text' placeholder='Full Name'></input>
                <input type='text' placeholder='Email but phone number'></input>
                <textarea className='massage' rows={2} cols={35} type='Submit' placeholder='Type your Message...'></textarea>           
              </form>
              <a className='btn-send' href='#'>Send</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  