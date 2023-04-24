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
  const [resting, setResting] = useState(false);

  useEffect(() => {
    if(working) document.body.classList.add('working');
    if(resting) document.body.classList.remove('working');
  }, [working, resting])

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, timeCounting ? 1000 : null);

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
  }

  const configureRest = (long: boolean) => {
    setTimeCounting(false);
    setWorking(false)
    setResting(true);

    if(long) {
      setMainTime(props.longRestTime);
    } else {
      setMainTime(props.shortRestTime);
    }

  }

  return(
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configureWork()} />
        <Button text="Rest" onClick={() => configureRest(false)} />
        <Button
        className={!working && !resting ? 'hidden' : ''}
        text={timeCounting ? 'Pause' : 'Play'}
        onClick={() => setTimeCounting(!timeCounting)} />
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
