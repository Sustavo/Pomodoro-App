import { useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { SecondsToTime } from "../utils/SecondsToTime";
import { Button } from "./Button";
import { Timer } from "./Timer";

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props){
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime)

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return(
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <Button text="teste" onClick={() => console.log('olá')} />
    </div>
  )
}
