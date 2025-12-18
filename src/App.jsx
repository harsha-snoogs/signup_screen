import './App.css'
import Signup from './components/signup/Signup'
import Main from './components/main/Main.jsx'
function App() {

  return (
    <div className="screen">
      <div className="main"><Main /></div>
      <div className="aside"><Signup /></div>
    </div>
  )
}

export default App
