import CommandList from '../data/Commands';

export default function CommandHandler(command, setHistory, running, setRunning) {
    if (running) {
        for (let i = 1; i < CommandList.length; ++i) {
            if (CommandList[i].checkCommand(command)) {
                CommandList[i].executeCommand(command, setHistory, setRunning).then(() => {setRunning(false)});
                return;
            }
        }
        CommandList[0].executeCommand(command, setHistory, setRunning);
        setRunning(false);
        return;
    }
}