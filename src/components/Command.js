import React from 'react';

function Command(props) {
    let command = {
        content: props.content,
        type: props.type,
        properties: props.properties,
    }
    if (command.type === "command") command.content = `> ${command.content}`;

    return (
        <div className="TerminalElement">
            {command.content.split("").map((letter, index) => {
                if (letter === " ") return <span className="Space" key={index}></span>
                else return <p key={index} style={{color: (() => {
                    switch (command.type) {
                        case "command":
                            return props.properties.textColor;
                        case "text":
                            return props.properties.textColor;
                        case "success":
                            return props.properties.successColor;
                        case "info":
                            return props.properties.infoColor;
                        case "warning":
                            return props.properties.warningColor;
                        case "error":
                            return props.properties.errorColor;
                        default:
                            return props.properties.textColor;
                    }
                })()}}>{letter}</p>
            })}
        </div>
    );
}

export default Command;
