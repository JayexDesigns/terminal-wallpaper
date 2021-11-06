import React from 'react';

function Command(props) {
    let command = {
        content: props.content,
        type: props.type,
    }
    if (command.type === "command") command.content = `> ${command.content}`;

    return (
        <div className="TerminalElement">
            {command.content.split("").map((letter, index) => {
                if (letter === " ") return <span className="Space" key={index}></span>
                else return <p key={index} className={(() => {
                    switch (command.type) {
                        case "command":
                            return "text-c";
                        case "text":
                            return "text-c";
                        case "success":
                            return "success-c";
                        case "info":
                            return "info-c";
                        case "warning":
                            return "warning-c";
                        case "error":
                            return "error-c";
                        default:
                            return "text-c";
                    }
                })()}>{letter}</p>
            })}
        </div>
    );
}

export default Command;
