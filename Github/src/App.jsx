import './App.css'
import Mainpage from './components/Mainpage/Mainpage'
import { ThemeProvider } from './ThemeContext'
function App() {
  return (
    <ThemeProvider>
    <Mainpage></Mainpage> 
    </ThemeProvider>
  )
}
export default App