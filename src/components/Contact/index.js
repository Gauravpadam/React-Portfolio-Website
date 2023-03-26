import './index.scss'

import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);

      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_ongk6ye', 'template_8m7raw5', form.current, 'Q1_uhRQrubkK2aymB')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

  return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass = {letterClass}
                strArray={['C','o','n','t','a','c','t',' ','m','e']}
                idx ={15}
                />
            </h1>
            <p>
                I am interested in freelance opportunities - especially ambitious or
                large projects. However, If you have any other request or questions,
                don't hesitate to contact me using below form either.
            </p>
            <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                 <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
    </div>
    <div className='info-map'>
      Gaurav Padam,
      <br />
      India,
      <br />
      Santacruz East, Mumbai<br />
      <span>gauravpadam2@gmail.com</span>
    </div>
    <div className='map-wrap'>
          <MapContainer center={[19.0815087, 72.8376755]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[19.0815087, 72.8376755]}>
              <Popup>Gaurav lives here, Come over for a cup of coffee ;D</Popup>
            </Marker>
          </MapContainer>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Contact