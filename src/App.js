import React, { Component } from 'react';
import Header from './Components/Header';
import './Components/App.css';
import LanguageSelector from './Components/LanguageSelector';
import InputContainer from './Components/InputContainer';
import TranslateButton from './Components/TranslateButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      sourceLang:'en',
      targetLang:'de',
      inputText:''
    }
  }

  alterSourceLang (e) {
    this.setState({
      sourceLang:e
    })
  }

  alterTargetLang (e) {
    this.setState({
      targetLang:e
    })
  }

  changeInputText (e) {
    this.setState({
      inputText:e.target.value
    })
  }

  produceTranslation (url) {
    let data = {
      key:'trnsl.1.1.20180228T161729Z.3662ef5342557f7f.4eb4bca2a19076bf2aba826445101c199a71a0ae',
      lang:(this.state.sourceLang + '-' + this.state.targetLang)
    }
    return fetch(url, data)
      .then(data => {
        this.setState({
          outputText:data.text
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LanguageSelector alterTargetLang={(e) => this.alterTargetLang(e)} alterSourceLang={(e) => this.alterSourceLang(e)} {...this.state} />
        <InputContainer onChange={(e) => this.changeInputText(e)}/>
        <TranslateButton />
      </div>
    );
  }
}

export default App;
