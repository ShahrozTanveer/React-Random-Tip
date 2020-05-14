import React from "react";
import Name from "./name";
type MyProps = {
  numberofGuests: number;
  setNames: any;
  setChoice: any;
};
type MyState = {
  names: Array<string>;
  currentName: string;
  error: Array<string>;
  btn: any;
};
class Names extends React.Component<MyProps, MyState> {
  state: MyState = {
    names: [],
    currentName: "",
    error: [],
    btn: [],
  };
  render() {
    // console.log("here");
    return (
      <div className="names">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.currentName}
            onChange={this.handleChange}
          />

          {/* <input type="submit" value="Submit" /> */}
        </form>
        {this.state.error.map((e: string, index: number) => {
          return (
            <p key={index}>
              {e}{" "}
              <span
                className="close"
                onClick={() => {
                  this.setState({ error: [] });
                }}
              >
                &times;
              </span>
            </p>
          );
        })}
        <div className="name-con">
          {this.state.names.map((name: string, index: number) => {
            return (
              <Name
                key={index}
                id={index}
                nameStr={name}
                onDelete={this.handleDelete}
              />
            );
          })}
        </div>
        <div className="random-btn">
          {this.state.btn.map((b: string, i: number) => {
            return (
              <button key={i} onClick={this.handleRandom}>
                {b}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
  // componentWillUpdate() {
  //   console.log("change occurred");
  // }
  handleSubmit = (event: any) => {
    if (this.state.names.length < this.props.numberofGuests) {
      const names = [...this.state.names];
      names.push(this.state.currentName);

      this.setState({ names: names });
      this.setState({ currentName: "" });
      this.props.setNames(names);
      const len: number = this.state.names.length + 1;
      if (len === this.props.numberofGuests) {
        console.log("here ==");
        this.setState({ btn: ["Select Random"] });
      }
    } else {
      let error: Array<string> = [...this.state.error];
      if (error.length == 0) {
        error.push("All names of guests are entred");
        this.setState({ error });
      }
    }
    event.preventDefault();
  };

  handleChange = (event: any) => {
    const name: string = event.target.value;

    // console.log(name);
    // names.push();
    this.setState({ currentName: name });

    // console.log("state name: " + this.state.currentName);
  };
  handleDelete = (key: number) => {
    let names: Array<string> = [...this.state.names];
    names = names.filter((name: string, index: number) => {
      return index !== key;
    });
    this.setState({ error: [] });
    this.setState({ names });
    this.props.setNames(names);
    this.setState({ btn: [] });
  };
  handleRandom = () => {
    console.log("click rand");
    this.props.setChoice();
  };
}

export default Names;
