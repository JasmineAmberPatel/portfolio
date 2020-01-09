import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Social() {
    return (
        <div className="Social" id="social">
            <h2 className="Subtitle">Get in Touch</h2>
            <p className="Paragraph">Feel free to get in touch through any of the social media platforms listed below.</p>
            <div className="social-icons">
                <SocialIcon url="https://twitter.com/CodesJamber" network="twitter" target="_blank" style={{ height: 25, width: 25, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
                <SocialIcon url="https://www.linkedin.com/in/jasmine-amber-patel-b04956a1/" network="linkedin" target="_blank" style={{ height: 25, width: 25, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
                <SocialIcon url="https://github.com/JasmineAmberPatel" network="github" target="_blank" style={{ height: 25, width: 25, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
                <SocialIcon url="https://www.behance.net/jasmineamberdesign" network="behance" target="_blank" style={{ height: 25, width: 25, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
            </div>
        </div>
    )
};


export default Social;