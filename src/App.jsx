import { useState, useEffect } from 'react'
import './App.css'
import AddItem from './Components/AddItem'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { useStore } from './store'

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
      <Header />
      <Content />
      <AddItem />
      <Footer />
    </div>
  )
}

export default App
