import { useNavigate } from "react-router-dom";
import { colorSet } from "../data/color-set";

const InstructionScreen = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h3>You need to match the color in the box and the word in this game!</h3>
      <h3>To finished the game, you will have to match 10 sets correctly.</h3>
      <h3>Time is counted as the game result.</h3>
      <h3>Check your game history from History!</h3>
      <div>
        <p>The color sets that will appear in the game</p>
        <div className="color_set">{colorSet.map(color => {
            return <div className="row">
                <div style={{backgroundColor: color.code, width: '5vw', height: '4vw', margin: '10px'}}></div>
                <p>{color.name}</p>
            </div>
        })}</div>
      </div>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  )
}

export default InstructionScreen;