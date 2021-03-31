import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import "./index.css";
import styles from "./index.module.css";
import logo from "@assets/unnamed.png";

const messages = ["Hello"]

const Messages = () => {
    return(
        <div>
        <h1>messages</h1>
        {messages.map((message) => (
            <p key={messages}>{message}</p>
        ))}
        <input placeholder="Введите сообщение"/>
        <button>Отправить</button>
        </div>
    )
}

ReactDOM.render(
    <>
    <Messages title="title"/>
    </>,
document.querySelector("#root"));











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