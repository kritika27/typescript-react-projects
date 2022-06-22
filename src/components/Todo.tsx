
import React,{FC} from 'react'

interface TaskTodo{
    list:{id:number,item:string}[],
    remove:(id:number)=>void,
}
const Todo:FC<TaskTodo>=(props)=> {
    const {list,remove} =props;
  return (
    <div>
        {
            list.map(el=>{
          const {id,item}=el;
                return(
                    <div key={id}>
                        <h4>{item}</h4>
                        <button onClick={()=>remove(id)}>Del</button>
                        </div>
                )
            })
        }
    </div>
  )
}

export default Todo