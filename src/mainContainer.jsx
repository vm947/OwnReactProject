import React, { Component } from "react";
import HelloWorld from "./components/helloWorld";
import ButtonAdd from "./components/buttonAdd";
import ButtonSubtract from "./components/buttonSubtract";

class MainContainer extends Component {
  state = {
    number: 0,
    successAdd: 'danger'
  };

  handleIncrement = () => {
    let newNumber = this.state.number;
    newNumber++;
    const newColor = this.state.successAdd === 'danger' ? 'warning' : 'danger';
    this.setState({ number: newNumber, successAdd: newColor });
  };

  handleDecrement = () => {
    let newNumber = this.state.number;
    newNumber--;
    this.setState({ number: newNumber });
  };

  render() {
    const { number, successAdd } = this.state;

    return (
      <div>
        <HelloWorld passNum={number} />
        <div className ='flexContainer'>
          <ButtonAdd
            onHandleIncrement={this.handleIncrement}
            passNum={number}
            passActive ={successAdd}
          />
          <ButtonSubtract
            onHandleDecrement={this.handleDecrement}
            passNum={number}
          />
        </div>
      </div>
    );
  }
}

export default MainContainer;
