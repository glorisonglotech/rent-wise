import { ThemeProvider } from "./components/ThemeProvider"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
