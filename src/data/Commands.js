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
            setHistory(prevHistory => [...prevHistory, {content: `v: 0.1.6`, type: 'info'}]);
            setHistory(prevHistory => [...prevHistory, {content: `this is a simple terminal simulator made with JavaScript and ReactJS, this is still a beta version made by Jayex Designs`, type: 'info'}]);
            setHistory(prevHistory => [...prevHistory, {content: ` `, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `available commands:`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'hello world'   ->   outputs 'hello world!'`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'help'   ->   shows list of commands, scripts and other info`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'ls'   ->   shows list of files in the current directory`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'clear'   ->   clears the command history`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'echo'   ->   show a message on the console`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: ` `, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `available scripts:`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'infinite_download.sh'   ->   a script that simulates update the system infinitely, great as a wallpaper, you can stop it with ctrl + c`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'is_it_wednesday.sh'   ->   tells you if it is wednesday`, type: 'text'}]);
            setHistory(prevHistory => [...prevHistory, {content: `'time.sh'   ->   display the actual day and hour`, type: 'text'}]);
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
            for (let i = 0; i < Files.length; ++i) {
                setHistory(prevHistory => [...prevHistory, {content: `'${Files[i].name}'`, type: "text"}]);
            }
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
    {
        name: "echo",
        checkCommand(command) {
            return (command.content === "echo" || command.content.startsWith("echo "));
        },
        async executeCommand(command, setHistory) {
            if (command.content === "echo") setHistory(prevHistory => [...prevHistory, {content: ` `, type: "text"}]);
            else setHistory(prevHistory => [...prevHistory, {content: `${command.content.substring(5, command.content.length)}`, type: "text"}]);
        },
    },
];

export default Commands;