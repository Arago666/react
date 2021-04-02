import React, { Component, createRef, useEffect } from "react"
import ReactDOM from "react-dom"

import "./index.css"

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1,
      left: 0,
    }
     this.ref = createRef() //{current: div}
    console.log("constructor")
  }

  handleChangeCounter = () => {
    console.log("click")
    this.setState( (state) => ({ counter: state.counter + 1 }))
  }

  render() {
    const {counter} = this.state
    console.log("render")
    return (
      <div ref={this.ref}>
        <h1>Hello! {counter}</h1>
        <button onClick={this.handleChangeCounter}>Click me!</button>
        <Children
            counter={counter}
            handleChangeCounter={this.handleChangeCounter}
        />
      </div>
    )
  }
}

const Children = React.memo(( { counter, handleChangeCounter}) => {
  console.log("render Children")
  return <h1 onClick={handleChangeCounter}>Children {counter}</h1>
})

ReactDOM.render(
  <>
    <Example />
  </>,
  document.querySelector("#root"),
)
