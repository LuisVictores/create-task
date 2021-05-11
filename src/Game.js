import React from 'react';
import { Link } from 'react-router-dom';


var pHealth = 100;
var pStamina = 100;

var eHealth = 100;
var eStamina = 100;

function Game() {
    return (
        <div className="Page">
            <div className="Background">
                <Link to="/">
                    <button className="buttons"><p className="buttonText">Back to Start</p></button>
                </Link>
                <div className="TopHalf">
                    <div className="StatusBars">
                        <div>
                            <p>Player Health: {pHealth}/100</p>
                            <p>Player Stamina: {pStamina}/100</p>
                        </div>
                        <div>
                            <p>Enemy Health: {eHealth}/100</p>
                            <p>Enemy Stamina: {eStamina}/100</p>
                        </div>
                    </div>
                    <div className="Characters">
                        <h1>Nothing Here Yet Folks</h1>
                    </div>
                </div>

                <div className="BottomHalf">
                    <div>
                        <button className="buttons"><p className="buttonText">Attack</p></button>
                        <button className="buttons"><p className="buttonText">Skills</p></button>
                    </div>
                    <div>
                        <button className="buttons"><p className="buttonText">Defend</p></button>
                        <button className="buttons"><p className="buttonText">Items</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game