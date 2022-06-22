import React,{FC}from 'react'

interface TaskForm{
    handleSubmit:(e:React.FormEvent<HTMLFormElement>)=>void,
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    item:string,
}

const Form:FC<TaskForm>=(props)=> {
    const {item,handleChange,handleSubmit}=props;
  return (
    <>
        <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={handleChange}/>
        <button type="submit">Add Item</button>
      </form>
    </>
  )
}

export default Form