import { useEffect, useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { SecondsToTime } from "../utils/SecondsToTime";
import { Button } from "./Button";
import { Timer } from "./Timer";

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props){
  const [mainTime, setMainTime] = useState(props.pomodoroTime)
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if(working) document.body.classList.add('working');
  }, [working])

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, timeCounting ? 1000 : null);

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true)
  }

  return(
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configureWork()} />
        <Button text="teste" onClick={() => console.log('olá')} />
        <Button text={timeCounting ? 'Pause' : 'Play'} onClick={() => setTimeCounting(!timeCounting)} />
      </div>

      <div className="details">
        <p>Testanto: Olá ola</p>
        <p>Testanto: Olá ola</p>
        <p>Testanto: Olá ola</p>
        <p>Testanto: Olá ola</p>
      </div>
    </div>
  )
}
