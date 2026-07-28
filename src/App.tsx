import './App.css'
/* import Example from './example' */
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <h1>Home</h1>
        <p>Some home content</p>
      </main>
    </>
  )
}

export default App
