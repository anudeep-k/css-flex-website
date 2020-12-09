import React from 'react'
import {Link} from 'react-router-dom'
import './contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <div className="online-contact">
            <h1>Sales and Product Inquiries</h1>
            <h2>Apple Online Store</h2>
            <p>
            <a href="https://www.apple.com/">Apple.com</a> is a convenient place to purchase Apple products and accessories from Apple. You can buy online or call 000800 040 1966.
            </p>
            </div>

            <div className="online-contact">
            <h1>How to Buy for Education</h1>
            <p>
            If you are a student or teacher, visit the Apple Store for Education or call 000800 040 1966.
            </p>
            <h2>Find Apple Authorised Resellers</h2>
            </div>
        </div>
    )
}

export default Contact
