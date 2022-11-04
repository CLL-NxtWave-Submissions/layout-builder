import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = () =>
    this.setState(prevAppState => ({
      showContent: !prevAppState.showContent,
    }))

  onToggleShowLeftNavbar = () =>
    this.setState(prevAppState => ({
      showLeftNavbar: !prevAppState.showLeftNavbar,
    }))

  onToggleShowRightNavbar = () =>
    this.setState(prevAppState => ({
      showRightNavbar: !prevAppState.showRightNavbar,
    }))

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <div>
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.onToggleShowContent,
            onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
            onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
