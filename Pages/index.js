
import ('./scss/index.scss')

function Index() {
  let urlInput = ''

  return (
    <div className="main">
      <div className="info">
        <img className="logo" src='../Static/logo.png' alt="logo" />
        <img className="title" src='../Static/shrinky.png' alt="logo" />
      </div>
      <form className="linkForm"
      onSubmit={(e) => {
        e.preventDefault()
        console.log('Form submitted!', urlInput)
      }}>
      <input type="text" className="textField"
        name="url"
        placeholder="Enter a url to shrink"
        autoComplete="off"
        defaultValue=''
        onChange={(e) => {urlInput = e.target.value}}
        required></input>
      <button type="submit" className="submitBtn">Shrink!</button>
      </form>
    </div>
  )
}
export default Index