  
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataBaseProvider from "../src/Components/Context/DataBase.jsx";
import MainPage from "./Components/Pages/MainPage.jsx";
function App() {
 
  return (
    <DataBaseProvider> 

   <BrowserRouter basename="/GourmetGo">
   <Routes>

    <Route path="/" element={ <MainPage/>}/> 
  


   </Routes>
   </BrowserRouter>
    </DataBaseProvider>
  )
}

export default App
