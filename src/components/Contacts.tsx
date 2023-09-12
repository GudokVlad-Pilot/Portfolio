import React from 'react'
import '../styles/Contacts.css'

const phoneNumber = '+358465508147';

function openWhatsAppWithPhoneNumber(phoneNumber: string) {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
  const whatsappURL = `https://wa.me/${cleanedPhoneNumber}`;
  window.open(whatsappURL);
}

function openLinkedIn() {
  const linkedinURL = `https://www.linkedin.com/in/vladislavpogudin/`;
  window.open(linkedinURL);
}

const Contacts = () => {
  const handleWhatsAppClick = () => {
    openWhatsAppWithPhoneNumber(phoneNumber);
  };

  return (
    <div className='underline'>
      <div className="contacts">Contacts</div>
      <tr className='contactsTable'>
        <th className="row">Email <div className="socialMediaLinkEmail">pogudinvladislav9b@gmail.com</div></th>
        <th className="row">LinkedIn <div className="socialMediaLink" onClick={openLinkedIn}>Vladislav Pogudin</div></th>
        <th className="row">WhatsApp <div className="socialMediaLink" onClick={handleWhatsAppClick}>+358465508147</div></th>
      </tr>
    </div>
  )
}

export default Contacts
