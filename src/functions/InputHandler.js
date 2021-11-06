export default function inputHandler(e, command, setCommand, history, setHistory, running, setRunning) {
    switch (e.key) {
        case "Enter":
            if (!running) {
                let com = command.content;
                com = com.trim();
                if (com !== "") {
                    setHistory([...history, {content: com, type: 'command'}]);
                    setRunning(true);
                }
                setCommand({content: '', type: 'command'});
            }
            break;
        case "Backspace":
            if (command.length !== 0) setCommand({content: command.content.substr(0, command.content.length-1), type: 'command'});
            break;
        case "ArrowLeft":
            break;
        case "ArrowRight":
            break;
        case "ArrowUp":
            break;
        case "ArrowDown":
            break;
        default:
            if (e.key.length === 1) setCommand({content: command.content+e.key, type: 'command'});
            break;
    }
};
