import React, {Component} from 'react'
import API from '../api/api'
import SelectLanguage from './SelectLanguage'
import ReposGrid from './ReposGrid'

class App extends Component {
  
      constructor() {
          super();
          this.state = {
              selectedLanguage:  'maybelline',
              repos: null
          }
      };
  
      componentDidMount() {
          this.updateLanguage(this.state.selectedLanguage);
      };
  
      updateLanguage = (language) => {
          this.setState({
              selectedLanguage: language,
              repos: null
          })
  
  
          API.fetchPopularRepositories(language)
              .then((data) => {
                console.log(data)
                  this.setState({
                      selectedLanguage: language,
                      repos: data
                  })
              })
  
      };
  
      render() {
          return (
              <div>
                  <SelectLanguage 
                  updateLanguage={this.updateLanguage}
                  selectedLanguage={this.state.selectedLanguage} />
                  {!this.state.repos
                      ? <p>LOADING</p>
                      : <ReposGrid repos={this.state.repos} />}
              </div>
          )
      };
  
  };

  export default App