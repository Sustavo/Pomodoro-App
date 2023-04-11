import { useState } from "react";
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

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return(
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="teste" onClick={() => console.log('olá')} />
        <Button text="teste" onClick={() => console.log('olá')} />
        <Button text="teste" onClick={() => console.log('olá')} />
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
