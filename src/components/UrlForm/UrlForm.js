import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e, title, url) => {
    e.preventDefault();
    const newUrl = {
      id: Date.now(),
      title: this.state.title,
      long_url: this.state.url,
      short_url: `http://localhost:3001/useshorturl/${Date.now()}`
    };
    console.log(newUrl)
    this.props.makePost(newUrl);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
          required
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
          required
        />

        <button type='submit' >
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
