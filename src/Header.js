import React from 'react'

function Header() {
  return (
    <React.Fragment>
      <header className="jumbotron" id="header">
        <div className="text-center mt-5">
          <h4 className="text-center font-italic">Welcome, It's Nice To Meet You!</h4>
          <h2 className="text-uppercase text-center font-weight-bold mt-5">Tell us how we can help — and we will.</h2>
          <a className="btn btn-warning btn-xl text-uppercase text-center js-scroll-trigger mt-5" href="#services" >Tell Me More</a>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;