import React from "react";

type MyProps = {
  setGuest: any;
};
type MyState = {
  flag: boolean;
};
class Guest extends React.Component<MyProps, MyState> {
  state: MyState = {
    flag: false,
  };
  render() {
    console.log("guest");
    return (
      <div>
        <h1>Select Number of Guests</h1>
        <div className="guests-btns">
          <button
            className="guests-btn"
            onClick={() => {
              this.clickGuest(1);
            }}
          >
            1
          </button>
          <button
            className="guests-btn"
            onClick={() => {
              this.clickGuest(2);
            }}
          >
            2
          </button>
          <button
            className="guests-btn"
            onClick={() => {
              this.clickGuest(3);
            }}
          >
            3
          </button>
          <button
            className="guests-btn"
            onClick={() => {
              this.clickGuest(4);
            }}
          >
            4
          </button>
          <button
            className="guests-btn"
            onClick={() => {
              this.clickGuest(5);
            }}
          >
            5
          </button>
          <button
            className="guests-btn"
            onClick={() => {
              this.clickGuest(6);
            }}
          >
            6
          </button>
        </div>
      </div>
    );
  }
  clickGuest = (guest: number) => {
    if (!this.state.flag) {
      console.log("here");
      this.props.setGuest(guest);
      this.setState({ flag: true });
    }
  };
}

export default Guest;
