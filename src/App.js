import React, { Component } from 'react'
import Navbardesign from './Navbar'
import Services from './Services'
import Header from './Header'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbardesign/>
        <Header />
        <Services/>
        <Portfolio/>
        <About/>
        <Contact/>
      </>
    )
  }
}
