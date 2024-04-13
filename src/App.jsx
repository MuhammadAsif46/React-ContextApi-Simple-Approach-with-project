import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
   <div className="bg-[#ffcdb2] p-4 min-h-screen flex flex-col">
   <h1 className='text-3xl mb-5 text-[#6d6875] text-center'>Context Api Simple Approach</h1>
   <Login/>
   <Profile/>
   </div>
  )
}

export default App
