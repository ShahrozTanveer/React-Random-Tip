import React from "react";
import "./App.css";
import Form from "./components/form";
import Result from "./components/result";

type MyProps = {};
type MyState = {
  names: Array<string>;
  flag: boolean;
};
class App extends React.Component<MyProps, MyState> {
  state: MyState = {
    names: [],
    flag: false,
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {this.checkRandom()}

          <div className="footer">
            <div
              className="footer-link"
              onClick={() =>
                window.open("https://github.com/ShahrozTanveer", "_blank")
              }
            >
              Github
            </div>
            <div
              className="footer-link"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sharoz-tanveer-b55939122/",
                  "_blank"
                )
              }
            >
              LinkedIn
            </div>
          </div>
        </div>
      </div>
    );
  }
  checkRandom = () => {
    if (this.state.flag === false) {
      return (
        <Form setNames={this.setNames} handleChoice={this.handleRandomCheck} />
      );
    } else {
      return <Result names={this.state.names} />;
    }
  };
  handleRandomCheck = () => {
    console.log("falg chane");
    this.setState({ flag: true });
  };
  setNames = (names: Array<string>) => {
    this.setState({ names });
  };
}

export default App;
