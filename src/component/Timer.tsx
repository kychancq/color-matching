import { useState, useEffect } from "react";
import { getTimeString } from "../helper/toString";

interface TimerProps {
  isActive: boolean,
  onFinished: (time: number) => void
}

const Timer: React.FC<TimerProps> = ({isActive, onFinished}) => {
  const [timeUsed, setTimeUsed] = useState(0); //in sec

  useEffect(() => {
    let interval: any = null;
    
    if(isActive) {
      interval = setInterval(() => {
        setTimeUsed(timeUsed => timeUsed + 1);
      }, 1000)
    } else {
      onFinished(timeUsed);
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [timeUsed])

  return (
    <div style={{margin: '2vh auto'}}>
        <h3>{getTimeString(timeUsed)}</h3>
    </div>
  )
}

export default Timer;
  