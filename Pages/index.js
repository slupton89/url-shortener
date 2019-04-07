
import ('./scss/index.scss')

class Index extends React.Component {
  constructor() {
    super()

    this.state = {
      urlInput: '',
      loading: false
    }
  }

  render() {
    return (
      <div className="main">
        <div className="info">
          <img className="logo" src='../Static/logo.png' alt="logo" />
          <img className="title" src='../Static/shrinky.png' alt="logo" />
        </div>
        <form className="linkForm"
        onSubmit={(e) => {
          e.preventDefault()
          console.log('Form submitted!', this.state.urlInput)
        }}>
        <input type="text" className="textField"
          name="url"
          placeholder="Enter a url to shrink"
          autoComplete="off"
          defaultValue=''
          onChange={(e) => {this.state.urlInput = e.target.value}}
          required></input>
        <button type="submit" className="submitBtn">Shrink!</button>
        </form>
      </div>
    )
  }
}
export default Index