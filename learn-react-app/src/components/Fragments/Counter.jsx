import React from "react";
import Button from "../Elements/Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <div className="flex flex-row justify-center gap-7 my-9">
          <Button
            variant="bg-blue-700"
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </Button>
          <h1 className="text-3xl font-bold">{this.state.count}</h1>
          <Button
            variant="bg-blue-700"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </Button>
        </div>
      </>
    );
  }
}

export default Counter;
