import React,{FC,useState} from 'react';
import Forms from "./components/Form"
import Title from "./components/Title"
import Todo from "./components/Todo"
import './App.css';

const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data") || "");
  else return [];
};

interface TodoType{
  id:number,
  item:string,
}

const App:FC=()=> {
  const [item,setItem]=useState<string>("");
  const [list,setList]=useState<TodoType[]>(arr);

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setItem(e.target.value);
  }

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const newItem={
      id:Math.random(),
      item,
    }
    if(item)
    {
      setList([...list,newItem]);
      setItem("");
    }
  }

  const remove=(id:number)=>{
    setList(list.filter(el=>el.id!==id))
  }

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);
  return (
    <div className="App">
      <Title/>
      <Forms item={item} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Todo list={list} remove={remove}/>
    </div>
  );
}

export default App;
