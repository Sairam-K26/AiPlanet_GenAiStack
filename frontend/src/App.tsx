import ModalInfo from "./pages/ModelInfo"
import Dashboard from "./pages/Dashboard"
import { ChatPage} from "./pages/ChatPage"
import MyComponent from "./pages/Homepage"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyComponent/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Model" element={<ModalInfo/>} />
        <Route path="/ChatPage" element={<ChatPage/>}/>
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
