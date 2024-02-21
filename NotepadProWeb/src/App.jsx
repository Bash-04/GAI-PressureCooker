import NotFound from './views/not-found'
import Home from './views/home'
import { BrowserRouter, Router, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route component={NotFound} element={<NotFound />} />
        <Route component={Home} element={<Home />} />
      </Router>
    </BrowserRouter>
  )
}

export default App;