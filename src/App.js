import React, { useState, useEffect } from 'react';
import './App.css';
import Command from './components/Command';
import InputHandler from './functions/InputHandler';
import CommandHandler from './functions/CommandHandler';
import WallpaperHandler from './functions/WallpaperHandler';

let firstCommand;
if (window.wallpaperOnVideoEnded !== undefined) firstCommand = {content: "./infinite_download.sh", type: "command"};
else firstCommand = {content: "help", type: "command"};

function App() {
    const [history, setHistory] = useState([firstCommand]);
    const [command, setCommand] = useState({content: '', type: 'command'});
    const [running, setRunning] = useState((firstCommand.content === "") ? false : true);
    const [properties, setProperties] = useState({
        backgroundColor: "#000000",
        cursorColor: "#ffffff",
        textColor: "#ffffff",
        hintColor: "#666666",
        primaryColor: "#ff0066",
        secondaryColor: "#7c4dff",
        successColor: "#00e676",
        infoColor: "#03a9f4",
        warningColor: "#ffc107",
        errorColor: "#f44336",
        terminalWidth: 50,
        terminalHeight: 80,
        terminalPosX: 50,
        terminalPosY: 50,
    });

    if (window.wallpaperOnVideoEnded !== undefined) WallpaperHandler(setProperties);

    useEffect(() => {
        if (running && history[history.length-1] !== undefined && history[history.length-1].type === "command") {
            CommandHandler(history[history.length-1], setHistory, running, setRunning);
        }
    }, [history, running]);

    return (
        <div id="MainContainer" style={{backgroundColor: properties.backgroundColor}}>
            <div className="Terminal" style={{
                width: `${properties.terminalWidth}%`,
                height: `${properties.terminalHeight}%`,
                left: `${properties.terminalPosX}%`,
                top: `${properties.terminalPosY}%`
            }}>
                <div className="TerminalSection" onKeyDown={(e) => InputHandler(
                    e, command, setCommand, history, setHistory, running, setRunning 
                )} tabIndex="0"></div>

                {(() => {if (!running) {
                    return <div className="TerminalInput TerminalElement">
                        <p style={{color: properties.primaryColor}}>[root@debian]$</p>
                        <span className="Space"></span>
                        {command.content.split("").map((letter, index) => {
                            if (letter === " ") return <span className="Space" key={index}></span>
                            else return <p key={index} style={{color: properties.textColor}}>{letter}</p>
                        })}
                        <p className="TerminalCursor" style={{color: properties.cursorColor}}>█</p>
                    </div>
                }})()}

                <div className="TerminalHistory">
                    {history.map((com, index) => {
                        return <Command content={com.content} type={com.type} properties={properties} key={index} className="TerminalElement"/>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
