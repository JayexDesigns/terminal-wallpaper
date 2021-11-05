import React from 'react';

function Command(command) {
    return (
        <div className="TerminalElement">
            {command.content.split("").map((letter, index) => {
                if (letter === " ") return <span className="Space" key={index}></span>
                else return <p key={index}>{letter}</p>
            })}
        </div>
    );
}

export default Command;
