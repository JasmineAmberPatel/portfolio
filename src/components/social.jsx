import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Social() {
    return (
        <div className="Social" id="social">
            <h2 className="Subtitle">Get in Touch</h2>
            <div className="social-icons">
                <SocialIcon url="https://twitter.com/CodesJamber" network="twitter" style={{ height: 25, width: 25, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
                <SocialIcon url="https://www.linkedin.com/in/jasmine-amber-patel-b04956a1/" network="linkedin" style={{ height: 25, width: 25, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
                <SocialIcon url="https://github.com/JasmineAmberPatel" network="github" style={{ height: 25, width: 25, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
                <SocialIcon url="https://www.behance.net/jasmineamberdesign" network="behance" style={{ height: 25, width: 25, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
            </div>
        </div>
    )
};


export default Social;