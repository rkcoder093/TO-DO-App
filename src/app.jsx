import React, { Component } from 'react';
import Child1 from './child1';
import Child2 from './child2';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      todoItem: null,
    };
  }
  async componentDidMount() {

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await res.json();
      this.setState({ todoItem: json });
    } catch (error) { }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter === 3) {
      const pTag = document.getElementsByTagName('p');
      if (pTag.length > 0) {
        pTag[0].style.color = 'red';
      }
    }
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  componentDidCatch(error, errorInfo) {

    console.log(errorInfo.componentStack);
  }

  increment = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  decrement = () => {
    this.setState(({ counter }) => ({
      counter: counter - 1,
    }));
  };

  addElement = () => {
    const div = document.createElement('div');
    div.style.height = '200px';
    div.style.backgroundColor = `#${(((1 << 24) * Math.random()) | 0).toString(
      16
    )}`;
    this.divRef.prepend(div);
  };

  render() {
    console.log('render');

    const { counter, greet, todoItem, error } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <div>


        <h1 id="heading">{greet}</h1>
        <h2>{todoItem?.title}</h2>
        <button type="button" onClick={this.increment}>
          +
        </button>
        <p>{counter}</p>
        <button type="button" onClick={this.decrement}>
          -
        </button>
        {counter < 10 && <Child1 counter={counter} />}
        <Child2 />
      </div>
    );
  }
}