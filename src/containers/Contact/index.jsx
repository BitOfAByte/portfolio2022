import React from 'react'
import PageHeader from '../../Components/pageHeader'
import { FaEnvelope } from 'react-icons/fa'
import './index.scss'
export default function Contact() {
  return <section id="contact" className="contact">
    <PageHeader headerText="Contact" icon={<FaEnvelope size={40}/>} />
    <div className="contact__content">
      <h1>Coming soon</h1>
    </div>
  </section>
}
