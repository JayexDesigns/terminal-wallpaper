import infinite_download from "./utils/infinite_download";

var Files = [
    {
        name: "infinite_download.sh",
        checkScript(command) {
            return (command.content === `./${this.name}` || command.content.startsWith(`./${this.name} `));
        },
        async executeScript(command, setHistory, setRunning) {
            await infinite_download(command, setHistory, setRunning);
        },
    },
    {
        name: "is_it_wednesday.sh",
        checkScript(command) {
            return (command.content === `./${this.name}` || command.content.startsWith(`./${this.name} `));
        },
        async executeScript(command, setHistory, setRunning) {
            setHistory(prevHistory => [...prevHistory, {content: ((new Date()).getDay() === 3) ? "yes" : "no", type: "text"}]);
        },
    },
    {
        name: "time.sh",
        checkScript(command) {
            return (command.content === `./${this.name}` || command.content.startsWith(`./${this.name} `));
        },
        async executeScript(command, setHistory, setRunning) {
            let date = new Date();
            let day = (date.getDate() < 10) ? `0${date.getDate()}` : `${date.getDate()}`;
            let month = (date.getMonth() < 10) ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`;
            let year = `${date.getFullYear()}`;
            let hour = (date.getHours() < 10) ? `0${date.getHours()}` : `${date.getHours()}`;
            let minute = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
            let second = (date.getSeconds() < 10) ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
            setHistory(prevHistory => [...prevHistory, {content: `${day}/${month}/${year} ${hour}:${minute}:${second}`, type: "text"}]);
        },
    }
];

export default Files;