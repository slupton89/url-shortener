import axios from 'axios'

import ('./scss/index.scss')

class Index extends React.Component {
  constructor() {
    super()

    this.state = {
      urlInput: 'https://',
      loading: false,
      shortLink: ''
    }
  }

  resetForm = () => {
    this.setState({
      urlInput: 'https://',
      loading: false,
      shortLink: ''
    })
  }


  render() {
    return this.state.loading === true ? <div className='main'>Loading...</div>
      : this.state.shortLink.length >= 1
        ? <div className='main'>
            <div className="info">
              <img className="logo" src='https://raw.githubusercontent.com/slupton89/url-shortener/master/Static/logo.png' alt="logo" />
              <img className="title" src='https://raw.githubusercontent.com/slupton89/url-shortener/master/Static/shrinky.png' alt="logo" />
            </div>
            <div className='result'>
              <h1 className='yourLink'>Your new link is</h1>
              <a href={`/${this.state.shortLink}`}>{window.location.href}{this.state.shortLink}</a>
            </div>
            <button onClick={() => this.resetForm()} className='btn'>Go Back</button>
          </div>
      : (
        <div className="main">
          <div className="info">
            <img className="logo" src='https://raw.githubusercontent.com/slupton89/url-shortener/master/Static/logo.png' alt="logo" />
            <img className="title" src='https://raw.githubusercontent.com/slupton89/url-shortener/master/Static/shrinky.png' alt="logo" />
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
            defaultValue={this.state.urlInput}
            onChange={(e) => {this.state.urlInput = e.target.value}}
            required></input>
          <button type="submit" className="btn">Shrink!</button>
          </form>
        </div>
      )
  }
}
export default Index