// import logo from './logo.svg';
// import './App.css';
import './index.css';
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'
import Additem from './Additem';
import Searchitem from './Searchitem';
 
function App(){
  const [items,setItems] = useState(

    [
      {id:1,
       checked:true,
       item:"practice coding"
      },
  
      {id:2,
        checked:false,
        item:"learn react"
      },
  
      {id:3,
        checked:true,
        item:"communicate"
      }
    ]);

    const [newItem,setNewItem] = useState('')

    const [search,setSearch] = useState('')

    const addItem = (item) => {
      const id = items.length ? items[items.length-1].id +1 : 1;
      const addNewItem = {id,checked:false,item}
      const listItems = [...items,addNewItem]
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))

    }
  
  
    const handleCheck = (id) =>{
      const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item)
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
    }
  
    const handleDelete = (id) =>{
      const listItems = items.filter((item) =>
      item.id !== id)
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!newItem) return;
      console.log(newItem);
      addItem(newItem)
      setNewItem('')
    }
  
  return(
   <div className='App'>
    <Header title = "My List" />
    
    <Additem 
    newItem = {newItem}
    setNewItem = {setNewItem}
    handleSubmit = {handleSubmit}
    />

    <Searchitem  o
    search={search}
    setSearch={setSearch} 
    />

    <Content 
    items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
    handleCheck = {handleCheck}
    handleDelete = {handleDelete}
    />
    
    <Footer 
    length = {items.length}/>
   </div>
  )
}

export default App;
 