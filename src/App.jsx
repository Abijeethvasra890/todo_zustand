import { useState, useEffect } from 'react'
import './App.css'
import AddItem from './Components/AddItem'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Header from './Components/Header'
import CompletedItem from './Pages/CompletedItem'
import PendingTasks from './Pages/PendingItem'
import { useStore } from './store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  //const [items, setItems] = useState([])
  const { items, setItems } = useStore();
  //const [itemName, setItemName] = useState("");
  //const [itemDesc, setItemDesc] = useState("");
  const { itemName, setItemName } = useStore();
  const { itemDesc, setItemDesc } = useStore();

  useEffect(() => {
    // Fetch items from localStorage when the component mounts
    const storedItems = JSON.parse(localStorage.getItem('todo_list')) || [];
    setItems(storedItems);
  }, []); 

  return (
    <div className='App'>
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Content/>} />
        <Route path="/completed" element={<CompletedItem/>} />
        <Route path="/pending" element={<PendingTasks />} />
      </Routes>
      <AddItem />
      <Footer />
    </Router>
      
    </div>
  )
}

export default App
