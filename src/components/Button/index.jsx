export function Button(props) {
  return <button className={`button ${props.className}`}>
    {props.children}
  </button>
}