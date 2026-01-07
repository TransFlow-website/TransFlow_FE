import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Translation from './pages/Translation'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translate" element={<Translation />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

