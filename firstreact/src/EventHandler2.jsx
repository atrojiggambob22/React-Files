import React from "react";
//import { P } from "./CompoundInterest"
import './App.css'

function PlayButton({movieName}) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }

    // It's passing the event as a value so that react can add the function as an event handler in case a click ever happens on the button

    return (
        <button className="fbut2" onClick={() =>handlePlayClick()}>
            Play "{movieName}"
        </button>
    );
}

function UploadButton() {
    return (
        <button className="fbut" onClick={() => alert('Uploading!')}>
            Upload Image
        </button>
    );
}

function EventHandler2() {
    return (
        <div>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
    );
}

export default EventHandler2