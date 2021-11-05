export default function inputHandler(e, command, setCommand, history, setHistory) {
    switch (e.key) {
        case "Enter":
            let com = command.content;
            com = com.trim();
            if (com !== "") {
                setHistory([...history, {content: com}]);
                setCommand({content: ""});
            }
            break;
        case "Backspace":
            if (command.length !== 0) setCommand({content: command.content.substr(0, command.content.length-1)});
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
            if (e.key.length === 1) setCommand({content: command.content+e.key});
            break;
    }
};
