import React, { useState, useEffect } from 'react';
import './App.css';
import Command from './components/Command';
import InputHandler from './functions/InputHandler';
import CommandHandler from './functions/CommandHandler';

let firstCommand = {content: "help", type: "command"};
// let firstCommand = {content: "./infinite_download.sh", type: "command"};

function App() {
    const [history, setHistory] = useState([firstCommand]);
    const [command, setCommand] = useState({content: '', type: 'command'});
    const [running, setRunning] = useState((firstCommand.content === "") ? false : true);

    useEffect(() => {
        if (running && history[history.length-1] !== undefined && history[history.length-1].type === "command") {
            CommandHandler(history[history.length-1], setHistory, running, setRunning);
        }
    }, [history, running]);

    return (
        <div id="MainContainer" className="background-b">
            <div className="Terminal">
                <div className="TerminalSection" onKeyDown={(e) => InputHandler(
                    e, command, setCommand, history, setHistory, running, setRunning 
                )} tabIndex="0"></div>

                {(() => {if (!running) {
                    return <div className="TerminalInput TerminalElement">
                        <p className="primary-c">[root@pc]$</p>
                        <span className="Space"></span>
                        {command.content.split("").map((letter, index) => {
                            if (letter === " ") return <span className="Space" key={index}></span>
                            else return <p key={index} className="text-c">{letter}</p>
                        })}
                        <p className="TerminalCursor cursor-c">█</p>
                    </div>
                }})()}

                <div className="TerminalHistory">
                    {history.map((com, index) => {
                        return <Command content={com.content} type={com.type} key={index} className="TerminalElement"/>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
