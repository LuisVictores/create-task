import React from 'react';
import { Link } from 'react-router-dom';

function Settings() {
    return (
        <div className="Page">
            <div className="Background">
                <h1>Settings</h1>
                <p>Nothing Here Works Yet :(</p>
                <button className="buttons"><p className="buttonText">Change Background Color</p></button>
                <button className="buttons"><p className="buttonText">Change Text Color</p></button>
                <button className="buttons"><p className="buttonText">Change Text Font</p></button>
                <Link to="/">
                    <button className="buttons"><p className="buttonText">Back to Start</p></button>
                </Link>
            </div>
        </div>
    );
}

export default Settings