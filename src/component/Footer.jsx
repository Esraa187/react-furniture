import React from 'react'
import './footer.css'
import { VscGlobe } from "react-icons/vsc";
import { TfiTwitterAlt } from "react-icons/tfi";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
function Footer() {
    return (
        <footer>
            <div class="footer_contact">
                <p class="footer_head">CONTACT</p>
                <p>+112 345 6789</p>
                <p>1316 Abbot Kinney Blvd.</p>
                <p>Copenhagen CA 90291</p>
                <div>
                    <TfiTwitterAlt className='footer-icons'/>
                    <RiFacebookFill className='footer-icons'/>
                    <RiInstagramLine className='footer-icons'/>
                    <VscGlobe className='footer-icons'/>
                </div>
            </div>
            <div class="footer_help">
                <p class="footer_head">HELP</p>
                <p>FAQs</p>
                <p>Pricing Plans</p>
                <p>Track</p>
                <p>Your Order</p>
            </div>
            <div class="footer_about">
                <p class="footer_head">ABOUT US</p>
                <p>Our Story</p>
                <p>Job Opportunities</p>
                <p>Store Locator</p>
                <p>Contact Us</p>
            </div>
            <div class="footer_service">
                <p class="footer_head">CUSTOMER SERVICE</p>
                <p>My Account</p>
                <p>Terms of Use</p>
                <p>Deliveries & Returns</p>
                <p>Gift Card</p>
            </div>

        </footer>
    )
}

export default Footer
