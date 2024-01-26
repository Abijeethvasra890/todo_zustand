import { useState } from 'react'
import './App.css'
import AddItem from './Components/AddItem'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  const [items, setItems] = useState([])
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");

  return (
    <div className='App'>
      <Header />
      <Content items={items} setItems = {setItems}/>
      <AddItem  
        itemName = {itemName} 
        setItemName={setItemName} 
        itemDesc = {itemDesc}
        setItemDesc={setItemDesc}
        items = {items}
        setItems = {setItems}
        />
      <Footer />
    </div>
  )
}

export default App
