import {SyntheticEvent} from 'react'

export default function StopPropagation() {
  const onDivClick = () => {
    console.log(`click event bubbles on <div>`)
  }

  const onButtonClick = (e: SyntheticEvent) => {
    console.log(`click event starts at <button> and call stopPropagation`)
    e.stopPropagation()
  }

  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>Click Me And stopPropagation</button>
    </div>
  )
}
