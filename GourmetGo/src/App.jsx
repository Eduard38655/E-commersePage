  
import { BrowserRouter, Routes } from "react-router-dom";
import DataBaseProvider from "../src/Components/Context/DataBase.jsx";
//App copm.
function App() {
 
  return (
    <DataBaseProvider> 

   <BrowserRouter basename="/E-commersePage">
   <Routes>

    



   </Routes>
   </BrowserRouter>
    </DataBaseProvider>
  )
}

export default App
