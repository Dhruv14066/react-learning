
import './App.css'
import UserContextProvider from './context/UserConetxtProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
