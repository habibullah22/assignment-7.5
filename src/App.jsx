
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <header className='w-11/12 mx-auto py-3'>
      <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>
      </main>
    </div>
  )
}

export default App
