const rootDiv = document.querySelector(`#root`)

if (rootDiv) {
  // rootDiv.onclick = (e: Event) => {
  //   const {isTrusted, target, bubbles} = e
  //   console.log(`mouse click ouccurs on rootDiv`, isTrusted, target, bubbles)
  // }
  // rootDiv.onclick = (e: Event) => {
  //   const {isTrusted, target, bubbles} = e
  //   console.log(`mouse click Also ouccurs on rootDiv`, isTrusted, target, bubbles)
  // }
}

export default function Onclick() {
  return <div>Onclick</div>
}
