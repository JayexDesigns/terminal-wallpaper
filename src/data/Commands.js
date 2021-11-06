import Files from './Files';

var Commands = [
    {
        name: "not found",
        async executeCommand(command, setHistory) {
            setHistory(prevHistory => [...prevHistory, {content: `command: '${command.content}' not found`, type: 'error'}]);
        },
    },
    {
        name: "hello world",
        checkCommand(command) {
            return (command.content === "hello" || command.content === "hi" || command.content === "hello world");
        },
        async executeCommand(command, setHistory) {
            setHistory(prevHistory => [...prevHistory, {content: `hello world!`, type: 'success'}]);
        },
    },
    {
        name: "help",
        checkCommand(command) {
            return (command.content === "help");
        },
        async executeCommand(command, setHistory) {
            setHistory(prevHistory => [...prevHistory, {content: `this is a simple terminal simulator made with JavaScript, this is still a beta version`, type: 'info'}]);
        },
    },
    {
        name: "execute script",
        checkCommand(command) {
            if (command.content.startsWith("./")) {
                for (let i = 0; i < Files.length; ++i) {
                    if (Files[i].checkScript(command)) return true;
                }
                return false;
            }
        },
        async executeCommand(command, setHistory) {
            for (let i = 0; i < Files.length; ++i) {
                if (Files[i].checkScript(command)) {
                    await Files[i].executeScript(command, setHistory);
                    break;
                };
            }
        },
    },
    {
        name: "ls",
        checkCommand(command) {
            return (command.content === "ls" || command.content.startsWith("ls "));
        },
        async executeCommand(command, setHistory) {
            let outs = [];
            for (let i = 0; i < Files.length; ++i) {
                outs.push({content: `'${Files[i].name}'`, type: "text"});
            }
            setHistory(prevHistory => [...prevHistory, ...outs]);
        },
    },
    {
        name: "clear",
        checkCommand(command) {
            return (command.content === "clear");
        },
        async executeCommand(command, setHistory) {
            setHistory([]);
        },
    },
];

export default Commands;