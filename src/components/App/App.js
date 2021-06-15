import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: ''
    }
  }

  async componentDidMount() {
    try {
      const fetchedUrl = await getUrls()
      this.setState({urls: fetchedUrl.urls})
    } catch (e) {
      this.setState({error: 'Failed to fetch Urls'})
    }
  }

  makePost = (data) => {
    this.setState({urls: [...this.state.urls, data]})
    postUrls(data)
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm makePost={this.makePost}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
