import React from 'react';
import Fourthpage from './assets/Components/Fourthpage.jsx'
import Landing from './assets/Components/Landing.jsx'
import SecondPage from './assets/Components/SecondPage.jsx'
import ThirdPage from './assets/Components/ThirdPage.jsx'
import Footer from './assets/Components/Footer.jsx'

function App() {
  const intaxFujifilmRef = React.useRef(null);
  return (
    <>
      <Landing intaxFujifilmRef={intaxFujifilmRef} />
      <SecondPage />
      <ThirdPage/>
      <Fourthpage ref={intaxFujifilmRef}/>
      <Footer/>
    </>
  )
}

export default App
