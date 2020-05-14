import React from "react";
import Guest from "./guest";
import Names from "./names";

type MyProps = {
  setNames: any;
  handleChoice: any;
};
type MyState = {
  numberofGuests: number; // like this
};
class Form extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    numberofGuests: 0,
  };

  render() {
    console.log("Form");
    return (
      <div>
        <Guest setGuest={this.setGuests} />
        {this.checkNames()}
      </div>
    );
  }
  checkNames = () => {
    if (this.state.numberofGuests > 0) {
      return (
        <Names
          numberofGuests={this.state.numberofGuests}
          setNames={this.props.setNames}
          setChoice={this.props.handleChoice}
        />
      );
    }
  };
  setGuests = (guest: number) => {
    console.log("pressed        " + guest);
    this.setState((state) => ({
      numberofGuests: guest,
    }));
  };
}

export default Form;
