import React from 'react'
import ReactDOM from 'react-dom/client'
import * as D from './data'

// const children = [
//   <li>
//     <a href="http://google.com" target="blank">
//       <p>Go to Google</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://facebook.com" target="blank">
//       <p>Go to facebook</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://twitter.com" target="blank">
//       <p>Go to twitter</p>
//     </a>
//   </li>,
// ]

// const children = [0, 1, 2].map((n: number) => <h3>Hello World! {n}</h3>)

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))

const rootVirtualDOM = <ul>{children}</ul>

const root = ReactDOM.createRoot(document.querySelector(`#root`) as HTMLElement)
root.render(rootVirtualDOM)
