import { useNavigate } from "react-router-dom"
import { getTimeString } from "../helper/toString"
import { getRecord } from "../helper/data"
import { useEffect, useState } from "react"

export interface History {
  date: Date,
  timeUsed: number
}

const HistoryScreen = () => {
  const navigate = useNavigate()
  const [history, setHistory] = useState<History[] | null>(null)

  useEffect(() => {
    const prev = getRecord();
    setHistory(prev?? [])
  },[])

  return (
    <div className="container" style={{justifyContent: "flex-start", margin: '2vh'}}>
      <div style={{margin: '0 auto'}}>
        <div style={{width: '100%', textAlign: "left"}}><a onClick={() => navigate('/')}>{'< Back'}</a></div>
      <div className="row"><p className="col">Date</p><p className="col">Record</p></div>
      {history == null ? <h3>No Record</h3> : 
        history.map(rec => {
          return <div className="row">
            <p className="col">{new Date(rec.date).toDateString()}</p>
            <p className="col">{getTimeString(rec.timeUsed)}</p>
          </div>
        })
      }
      </div>
      
    </div>
  )
}

export default HistoryScreen;