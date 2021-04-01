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
    // this.foo = this.foo.bind()
    this.ref = createRef() //{current: div}
    this.timer = null
    // this.handleChangeCounter=this.handleChangeCounter.bind(this)
    console.log("constructor")
  }

  // foo() {}

  static getDerivedStateFromProps(props, state) {
    console.log("static getDerivedStateFromProps", props, state)
    return null
  }

  componentDidMount() {
    console.log("componentDidMount", this.ref)

    document.addEventListener("click", this.handleChangeCounter)
    // this.timer = setInterval(() => {
    //   this.handleChangeCounter()
    // }, 1000)

    // const arr = Array.from({ length: 10000 })
    // arr.map((e) => 12 ** 12)
    // this.setState({ left: 500 })
  }

  //нужен для оптимизации, но почти никогда не используется
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState)
    return {}
  }

  //рекомендуется тут делать запросы (сетевые)
  //обязательно делать с условием, например if(prevState.counter!==this.state.couter){}
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("componentDidUpdate", this.ref)
  }

  //метод при удалении компонента
  componentWillUnmount() {
    console.log("componentWillUnmount")
    document.removeEventListener("click", this.handleChangeCounter)
    // clearInterval(this.timer)
  }

  handleChangeCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
    console.log("click")
  }

  render() {
    console.log("render")
    return (
      <div ref={this.ref}>
        <h1>Hello! {this.state.counter}</h1>
        <button onClick={this.handleChangeCounter}>Click me!</button>
        {/*<Component2 counter={1} />*/}
      </div>
    )
  }
}

class Wrapper extends React.Component {
  state = {
    isVisible: true,
  }

  handleShowComponent = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleShowComponent}>toggle</button>
        {this.state.isVisible && <Example someProps={2} />}
      </div>
    )
  }
}

ReactDOM.render(
  <>
    <Wrapper />
  </>,
  document.querySelector("#root"),
)

// class Component2 extends React.Component {
//   render() {
//     console.log("Component2")
//     return <div>Component2</div>
//   }
//
//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextProps.counter === this.props.counter) {
//       return false
//     }
//     return true
//   }
// }

// //добавление сообщения по клику
// const messages = ["Hello"]
// let value = "sdfgsdfgsdfg"
//
// const sendMessage = () =>{
//     messages.push(value)
//     render()
// }
//
// const Messages = () => {
//     return(
//         <div>
//         <h1>messages</h1>
//         {messages.map((message) => (
//             <p key={messages}>{message}</p>
//         ))}
//         <input placeholder="Введите сообщение"/>
//         <button onClick={sendMessage}>Отправить</button>
//         </div>
//     )
// }
//
// const render = () => {
//     ReactDOM.render(
//         <>
//             <Messages title="title"/>
//         </>,
//         document.querySelector("#root"));
// }
//
// render()

// import styles from "./index.module.css";
// import logo from "@assets/unnamed.png";

//
// const App = () => {
//     return <div>Hello React</div>;
// };
//
// class App2 extends Component {
//     render() {
//         return (
//             <div className={styles.app}>
//                 <div> App2 class {this.props.title}</div>
//                 <App />
//              </div>
//     )
//     }
// }
//
// const Test = () => {
//     return React.createElement(
//         "ul",
//         null,
//         React.createElement("li", null, "Первый пункт"),
//         React.createElement("li", null, "Второй пункт"),
//         )
// }
//
// ReactDOM.render(
//     <>
//         <App />
//         <App2 title="title"/>
//         <Test />
//     </>,
//     document.querySelector("#root"));
//
//
//
// console.log(style);
//
// console.log("Hello webpack");
//
// // console.log("Hello webpack", new Test().a);
// //
// // class Test {
// //     a=12;
// // }
//
// const a = { b: 12, c: null};
// const b = { b: 12, c: { y : 1 }};
//
// console.log(a?.c?.y);
// console.log(b?.c?.y);
