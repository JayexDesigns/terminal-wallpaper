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
            setHistory(prevHistory => [...prevHistory, {content: `v: 0.1.3`, type: 'info'}]);
            setHistory(prevHistory => [...prevHistory, {content: `this is a simple terminal simulator made with JavaScript and ReactJS, this is still a beta version made by Jayex Designs`, type: 'info'}]);
            setHistory(prevHistory => [...prevHistory, {content: ` `, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `available commands:`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'hello world'   ->   outputs 'hello world!'`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'help'   ->   shows list of commands, scripts and other info`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'ls'   ->   shows list of files in the current directory`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'clear'   ->   clears the command history`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: ` `, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `available scripts:`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'is_it_wednesday.sh'   ->   tells you if it is wednesday`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'infinite_download.sh'   ->   a script that simulates update the system infinitely, great as a wallpaper, you can stop it with ctrl + c`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: ` `, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `there's still more content to come but if you like the project so far please hit the like button on its wallpaper engine page`, type: 'info'}]);
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