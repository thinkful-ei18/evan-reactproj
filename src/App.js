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
      inputText:'',
      outputText:''
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

  produceTranslation () {
    const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
    let params = new URLSearchParams();
    params.set('key', 'trnsl.1.1.20180228T161729Z.3662ef5342557f7f.4eb4bca2a19076bf2aba826445101c199a71a0ae');
    params.set('text',this.state.inputText);
    params.set('lang',(this.state.sourceLang + '-' + this.state.targetLang)); 

    return fetch(url + params.toString())
      .then(res => {
        // this.setState({
        //   outputText:data.text
        // })
        return res.json();
      })
      .then(data => {
        this.setState({
          outputText:data.text[0]
        });
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LanguageSelector alterTargetLang={(e) => this.alterTargetLang(e)} alterSourceLang={(e) => this.alterSourceLang(e)} {...this.state} />
        <InputContainer outputText={this.state.outputText} onChange={(e) => this.changeInputText(e)}/>
        <TranslateButton onClick = {() => this.produceTranslation()} />
      </div>
    );
  }
}

export default App;
