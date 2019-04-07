
import ('./scss/index.scss')

function Index() {
  let urlInput = ''

  return (
    <div className="main">
      <img className="logo" src='../Static/logo.png' alt="logo" />
      <img className="title" src='../Static/shrinky.png' alt="logo" />
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log('Form submitted!', urlInput)
      }}>
      <input type="text" className="textField"
        name="url"
        placeholder="Enter a url to shrink"
        defaultValue=''
        onChange={(e) => {urlInput = e.target.value}}
        required></input>
      <button type="submit" className="submitBtn">Shrink!</button>
      </form>
    </div>
  )
}
export default Index