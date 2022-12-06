import React from 'react'
import { Mailbox, Phone } from 'react-bootstrap-icons'

const Contact = () => {
    return (
        <div className="home-container orange-background">
            <div className="home-headings-box">
                <h1>CONTACT</h1>
            </div>
            <div className="contact-section">
                <Mailbox />
                <p>phoebe.thompson02@gmail.com</p>
                <Phone />
                <p>027 963 0061</p>
            </div>
        </div>
    )
}

export default Contact