import React, { useState } from 'react';
import './App.css';
import Command from './components/Command';
import InputHandler from './functions/InputHandler';

function App() {
    const [history, setHistory] = useState([]);
    const [command, setCommand] = useState({content: ''});

    return (
        <div id="MainContainer">
            <div id="Terminal">
                <div className="TerminalSection" onKeyDown={(e) => InputHandler(e, command, setCommand, history, setHistory)} tabIndex="0"></div>

                <div className="TerminalInput TerminalElement">
                    <p>[root@pc]$</p>
                    <span className="Space"></span>
                    {command.content.split("").map((letter, index) => {
                        if (letter === " ") return <span className="Space" key={index}></span>
                        else return <p key={index}>{letter}</p>
                    })}
                    <p className="TerminalCursor">█</p>
                </div>

                <div className="TerminalHistory">
                    {history.map((com, index) => <Command content={com.content} key={index} className="TerminalElement"/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
