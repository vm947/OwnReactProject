import React, { Component } from "react";
import HelloWorld from "./components/helloWorld";
import ButtonAdd from "./components/buttonAdd";
import ButtonSubtract from "./components/buttonSubtract";
import ButtonRandom from "./components/buttonRandom";

class MainContainer extends Component {
  state = {
    number: 0,
    phrase: "I love ",
    successAdd: "warning",
    successSubtract: "warning",
    successRandom: "warning",
  };

  handleIncrement = () => {
    let newNumber = this.state.number;
    newNumber++;
    const newAddColor =
      this.state.successAdd === "warning" ? "success" : "warning";

    const newPhrase = "I feel lucky with number ";
    this.setState({
      number: newNumber,
      successAdd: newAddColor,
      phrase: newPhrase,
    });
  };

  handleDecrement = () => {
    let newNumber = this.state.number;
    newNumber--;
    const newColorSubtract =
      this.state.successSubtract === "warning" ? "success" : "warning";
    const newPhrase = "I am thinking about number ";
    this.setState({
      number: newNumber,
      successSubtract: newColorSubtract,
      phrase: newPhrase,
    });
  };

  handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    let randomPhrases = [
      "I hate number ",
      "I adore number ",
      "I cherish number ",
      "I dream about number ",
      "I don't care about number ",
      "You are thinking about number ",
      "Your shoe size is ",
      "You have these many dogs: ",
      "I eat these many cookies every day: ",
      "I have slept these many hours last night: ",
      "I bet you can't count to ",
      "Why are your thinking about number ",
      "Your AREN'T thinking about number ",
      "In my heart you are number "
    ];

    const randomIndex = Math.floor(Math.random() * randomPhrases.length);

    const newColorRandom =
      this.state.successRandom === "warning" ? "success" : "warning";

    const newRandomPhrase = randomPhrases[randomIndex];
    this.setState({
      number: randomNumber,
      successRandom: newColorRandom,
      phrase: newRandomPhrase,
    });
  };

  render() {
    const {
      number,
      successAdd,
      successSubtract,
      successRandom,
      phrase,
    } = this.state;

    return (
      <div>
        <HelloWorld passNum={number} passPhrase={phrase} />
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
