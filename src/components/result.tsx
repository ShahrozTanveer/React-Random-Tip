import React from "react";

type MyProps = {
  names: Array<string>;
};

class Result extends React.Component<MyProps> {
  render() {
    console.log("result");
    return (
      <div className="result">
        <h1>{this.getRandomName()}</h1>
      </div>
    );
  }
  getRandomName = () => {
    const count: number = this.props.names.length;
    const random = Math.floor(Math.random() * count);
    return this.props.names[random];
  };
}

export default Result;
