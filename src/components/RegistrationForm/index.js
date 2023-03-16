// Write your JS code here
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {first: false, last: false, a: '', b: '', isImg: false}

  onFinal = event => {
    event.preventDefault()
    const {a, b} = this.state
    if (a === '' && b === '') {
      this.setState({first: true, last: true})
    }
    if (a === '' && b !== '') {
      this.setState({first: true, last: false})
    }
    if (a !== '' && b === '') {
      this.setState({first: false, last: true})
    }
    if (a !== '' && b !== '') {
      this.setState({first: false, last: false})
      this.setState({isImg: true})
    }
  }

  onFirst = event => {
    console.log('prem')
    if (event.target.value === '') {
      this.setState({first: true})
    } else {
      this.setState({first: false})
      this.setState({a: event.target.value})
    }
  }

  onLast = event => {
    console.log('prem in last')
    if (event.target.value === '') {
      this.setState({last: true})
    } else {
      this.setState({last: false})
      this.setState({b: event.target.value})
    }
  }

  onAnother = () => {
    this.setState({isImg: false})
  }

  render() {
    const {first, last, isImg} = this.state
    return (
      <div>
        <h1>Registration</h1>
        <form onSubmit={this.onFinal}>
          {isImg ? (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p>Submitted Successfully</p>
              <button onClick={this.onAnother} type="button">
                Submit Another Response
              </button>
            </>
          ) : (
            <>
              <label htmlFor="first">FIRST NAME</label>
              <input id="first" type="text" onBlur={this.onFirst} />
              {first && <p>Required</p>}
              <label htmlFor="last">LAST NAME</label>
              <input id="last" onBlur={this.onLast} type="text" />
              {last && <p>Required</p>}
              <button type="submit">Submit</button>
            </>
          )}
        </form>
      </div>
    )
  }
}
export default RegistrationForm
