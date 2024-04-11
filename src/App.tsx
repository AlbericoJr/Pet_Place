import './App.css'
import Div from './Components/Div'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  return (
    <div className='bg-slate-900 w-full min-h-screen flex flex-col items-center justify-center'>
      <Header/>
      <Div/>
      <Footer/>
    </div>
  )
}

export default App
