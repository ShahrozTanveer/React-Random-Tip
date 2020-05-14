import React from "react";

type MyProps = {
  id: number;
  nameStr: string;
  onDelete: any;
};

class Name extends React.Component<MyProps> {
  render() {
    return (
      <div>
        <p key={this.props.id} className="name">
          {this.props.nameStr}
          <span
            className="close"
            onClick={() => {
              this.props.onDelete(this.props.id);
            }}
          >
            &times;
          </span>
        </p>
      </div>
    );
  }
}

export default Name;
