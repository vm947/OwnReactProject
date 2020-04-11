import React, { Component } from "react";
import HelloWorld from "./components/helloWorld";
import ButtonAdd from "./components/buttonAdd";
import ButtonSubtract from "./components/buttonSubtract";
import ButtonRandom from "./components/buttonRandom";

class MainContainer extends Component {
  state = {
    number: 0,
    phrase: 'I love ',
    successAdd: "warning",
    successSubtract: "warning",
    successRandom: "warning",
  };

  handleIncrement = () => {
    let newNumber = this.state.number;
    newNumber++;
    const newAddColor =
      this.state.successAdd === "warning" ? "success" : "warning";
    this.setState({ number: newNumber, successAdd: newAddColor });
  };

  handleDecrement = () => {
    let newNumber = this.state.number;
    newNumber--;
    const newColorSubtract =
      this.state.successSubtract === "warning" ? "success" : "warning";
    this.setState({ number: newNumber, successSubtract: newColorSubtract });
  };

  handleRandom = () => {
    let randomNumber = Math.floor(Math.random() * 100);
    const newColorRandom =
      this.state.successRandom === "warning" ? "success" : "warning";
    this.setState({ number: randomNumber, successRandom: newColorRandom });
  };

  render() {
    const { number, successAdd, successSubtract, successRandom, phrase } = this.state;

    return (
      <div>
        <HelloWorld passNum={number} passPhrase ={phrase}/>
        <div className="flexContainer">
          <ButtonAdd
            onHandleIncrement={this.handleIncrement}
            passAddActive={successAdd}
          />
          <ButtonSubtract
            onHandleDecrement={this.handleDecrement}
            passSubActive={successSubtract}
          />
          <ButtonRandom
            onHandleRandom={this.handleRandom}
            passRandomActive={successRandom}
          />
        </div>
      </div>
    );
  }
}

export default MainContainer;
