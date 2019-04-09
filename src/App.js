import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-flexbox-grid';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      language: 'es'
    }
  }

  componentDidMount(){
    let language = localStorage.getItem('language');
    if (language)
      this.setState({language});
  }

  _changeLang = () => {
    const { language } = this.state;
    let lang = 'es';
    if(language === 'es')
      lang = 'en';
    this.setState({ language: lang });
    localStorage.removeItem('language');
    localStorage.setItem('language', lang);
  }

  render() {
    return (
      <Grid fluid>
        <Header lang={this.state.language} changeLang={this._changeLang}/>
        <Content lang={this.state.language}/>
      </Grid>
    );
  }
}

export default App;
