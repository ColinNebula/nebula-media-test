import React from "react";
import BgVideo from '../assets/videos/bg.mp4'

const Landingpage = () => {
    return (
        <div className="landingpage">

            <video src={BgVideo} autoPlay muted loop class="video-bg" />
            <div className="bg-overlay"></div>
            <div className="navbar">
            <div className="menu">
                <div></div>
                <div>Here</div>
                <div> There</div>
                <div>Everywhere</div>
            </div>
            </div>
            <div className="home-text">
                <h1>Nebula Media</h1>
                <p>VFX  Video Editing  Compositing</p>
            </div>

            <div className="home-btn">Enter</div>
        </div>
    )
}

export default Landingpage;