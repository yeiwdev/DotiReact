// // // // import React from 'react'
// // // // import logo from './logo.svg'
// // // // import './App.css'

import ArrowComponent from './ArrowComponent'
import ClassComponent from './ClassComponent'

// // import {Component} from 'react'

// // import {Children, Component} from 'react'
// // // import ClassComponent from './ClassComponent'

// // // // function App() {
// // // //   return (
// // // //     <ul>
// // // //       <li>
// // // //         <a href="http://google.com" target="blank">
// // // //           <p>Go to Google</p>
// // // //         </a>
// // // //       </li>
// // // //     </ul>
// // // //   )
// // // // }

// // // // export default App

// // // export default class App extends Component {
// // //   // render() {
// // //   //   const isLoading = true

// // //   //   const children = (
// // //   //     <li>
// // //   //       <a href="http://google.com" target="blank">
// // //   //         <p>Go to Google</p>
// // //   //       </a>
// // //   //     </li>
// // //   //   )
// // //   //   return (
// // //   //     <div>
// // //   //       {isLoading && <p>Loading...</p>}
// // //   //       {!isLoading && <ul>{children}</ul>}
// // //   //     </div>
// // //   //   )
// // //   // }

// // //   //   render() {
// // //   //     const isLoading = true
// // //   //     const children = isLoading ? (
// // //   //       <p>Loading...</p>
// // //   //     ) : (
// // //   //       <ul>
// // //   //         <li>
// // //   //           <a href="http://google.com" target="blank">
// // //   //             <p>Go to Google</p>
// // //   //           </a>
// // //   //         </li>
// // //   //       </ul>
// // //   //     )

// // //   //     return <div>children</div>
// // //   //   }

//   render() {
//     return (
//       <ul>
//         <ClassComponent href="http://google.com" text="go to Goole" />
//         <ClassComponent href="http://facebook.com" text="go to facebook" />
//       </ul>
//     )
//   }
// }

// // export default class App extends Component {
// //   render() {
// //     return <h1>class component</h1>
// //   }
// // }

// // export default function App() {
// //   return <div>Hello function-keyword component!</div>
// // }

// // const App = () => {
// //   return <div>Hello function-keyword component!</div>
// // }

// // export default App

export default function App() {
  return (
    <ul>
      <ClassComponent href="https://googl.com" text="Google" />
      <ArrowComponent href="https://googl.com" text="Google" />
    </ul>
  )
}
