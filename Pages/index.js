import axios from 'axios'

import ('./scss/index.scss')

class Index extends React.Component {
  constructor() {
    super()

    this.state = {
      urlInput: '',
      loading: false,
      shortLink: ''
    }
  }

  resetForm = () => {
    this.setState({
      urlInput: '',
      loading: false,
      shortLink: ''
    })
  }


  render() {
    return this.state.loading === true ? <div className='main'>Loading...</div>
      : this.state.shortLink.length >= 1
        ? <div className='main result'>
            <div className="info">
              <img className="logo" src='../Static/logo.png' alt="logo" />
              <img className="title" src='../Static/shrinky.png' alt="logo" />
            </div>
            <a href={`/${this.state.shortLink}`}>{window.location.href}{this.state.shortLink}</a>
            <button onClick={() => this.resetForm()} className='btn'>Go Back</button>
          </div>
      : (
        <div className="main">
          <div className="info">
            <img className="logo" src='../Static/logo.png' alt="logo" />
            <img className="title" src='../Static/shrinky.png' alt="logo" />
          </div>
          <form className="linkForm"
          onSubmit={(e) => {
            e.preventDefault()
            this.setState({ loading: true })
            axios.post('/submit', {
              url: this.state.urlInput
            }).then(res => {
              this.setState({
                loading: false,
                shortLink: res.data
              })
            }).catch(err => {
              console.error(err);
            })
          }}>
          <input type="text" className="textField"
            name="url"
            placeholder="Enter a url to shrink"
            autoComplete="off"
            defaultValue='https://'
            onChange={(e) => {this.state.urlInput = e.target.value}}
            required></input>
          <button type="submit" className="btn">Shrink!</button>
          </form>
        </div>
      )
  }
}
export default Index