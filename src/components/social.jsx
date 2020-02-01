import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Social() {
    return (
        <div className="Social" id="social">
            <h2 className="Subtitle">Get in Touch</h2>
            <br />
            <p className="Paragraph">Feel free to get in touch through any of the social media platforms listed below or just listen along on spotify.</p>
            <br />
            <iframe src="https://open.spotify.com/embed/playlist/6GTorzH0XROCd0kBqiDKBQ" title="spotify playlist" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <br />
            <a className="btn btn-dark cv" href="https://drive.google.com/file/d/10JS6e8AnNfVwuHiB5PUV1HUbs8W-Qzqp/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
            <br/>
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