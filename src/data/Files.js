import sleep from '../functions/sleep';

var Files = [
    {
        name: "is_it_wednesday.sh",
        checkScript(command) {
            return (command.content === `./${this.name}` || command.content.startsWith(`./${this.name} `));
        },
        async executeScript(command, setHistory) {
            setHistory(prevHistory => [...prevHistory, {content: ((new Date()).getDay() === 3) ? "yes" : "no", type: "text"}]);
        },
    },
    {
        name: "infinite_download.sh",
        checkScript(command) {
            return (command.content === `./${this.name}` || command.content.startsWith(`./${this.name} `));
        },
        async executeScript(command, setHistory) {
            for (let i = 0; i < 10; ++i) {
                setHistory(prevHistory => [...prevHistory, {content: "downloading python3...", type: "text"}]);
                await sleep(3000);
                setHistory(prevHistory => [...prevHistory, {content: "download complete", type: "success"}]);
                await sleep(500);
            }
        },
    },
    {
        name: "time.sh",
        checkScript(command) {
            return (command.content === `./${this.name}` || command.content.startsWith(`./${this.name} `));
        },
        async executeScript(command, setHistory) {
            let date = new Date();
            setHistory(prevHistory => [...prevHistory, {content: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`, type: "text"}]);
        },
    }
];

export default Files;