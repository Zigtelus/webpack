import React from "react";
import { connect } from "react-redux";

type Props = {
  // свойства Props
  increment: any;
  decrement: any;
  first: any;
};

class App extends React.Component <Props> {

  constructor(props: Props) {
    super(props);
    this.hundleClickPlus = this.hundleClickPlus.bind(this);
    this.hundleClickMinus = this.hundleClickMinus.bind(this);
  }

  hundleClickPlus() {
    console.log(this)
    this.props.increment()
  }

  hundleClickMinus() {
    console.log(this)
    this.props.decrement()
  }

  render() {
    console.log(this);
    return (
      <div className="first">
        <h1>star1t</h1>
        <h2>{this.props.first.counter}</h2>
        <button
          onClick={this.hundleClickPlus}
        >+</button>
        <button
          onClick={this.hundleClickMinus}
        >-</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    first: state
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
