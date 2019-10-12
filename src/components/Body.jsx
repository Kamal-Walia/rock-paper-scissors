import React from "react";
import "../assets/css/body.css";

const options = [
  { value: "rock", icon: "✊", imageUser:require("../assets/images/rock-user.png"),imageComputer:require("../assets/images/rock-computer.png") },
  { value: "paper", icon: "🖐️", imageUser:require("../assets/images/paper-user.png"),imageComputer:require("../assets/images/paper-computer.png") },
  { value: "scissors", icon: "✌", imageUser:require("../assets/images/scissor-user.png"),imageComputer:require("../assets/images/scissor-computer.png") }
];

const weapons = {
	rock: {
		wins: ['scissors'],
	},
	paper: {
		wins: ['rock'],
	},
	scissors: {
		wins: ['paper'],
	},
};

const Option = props => {
  const { option } = props;
  return (
    <div>
      <button className="option" onClick={() => props.checkResult(option)}>
        {option.icon}
      </button>
    </div>
  );
};

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state={userSelection:options[0], computerSelection:options[0]}
  }

  checkResult = option => {
    const userSelection = option.value;
    this.setState({userSelection:option});
    const computerSelection = this.computeTurn();
    setTimeout(() => {
      const winner = this.getWinner(userSelection,computerSelection);
      let msg = "";
      if(winner === 0){
        msg = "Match Tied";
      } else if(winner === 1 ){
        msg = "You Win";
      } else {
        msg = "Computer Wins"
      }
      alert(msg);
    }, 1000)
    
   };
  computeTurn = () => {
    const randomTurn = options[Math.floor(Math.random() * options.length)];
    this.setState({computerSelection:randomTurn})
    return randomTurn.value;
  };

  getWinner = (weapon1, weapon2) => {
    if (weapon1 === weapon2) return 0;
    return weapons[weapon1].wins.some(wins => wins === weapon2) ? 1 : 2;
  } 
  render() {
   const userImage = this.state.userSelection.imageUser;
   const computerImage = this.state.computerSelection.imageComputer;
    return (
      <div className="body">
        <div className="computer">
        <div>
            <img src={computerImage} alt="user-selection" />
          </div>
        </div>
        <div><h1 className="vs">VS</h1></div>
        <div className="user">
          <div>
            <img src={userImage} alt="user-selection" />
          </div>
          <div className="options">
            {options.map((option, index) => {
              return (
                <Option
                  key={index}
                  option={option}
                  checkResult={this.checkResult}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Body;
