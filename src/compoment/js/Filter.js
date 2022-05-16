
import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { filter } from '../action/Action'
const Filter = () => {

    console.log("-")
  
   
    const dispatch = useDispatch()

    const getData=useSelector(state=>state.data)
    const getDone=useSelector(state=>state.done)
   

    const change= (e) => {

      

        if(e.target.name=="done"){

            dispatch(filter(e.target.value))
        
        }

    
       
    }

  

   

  return (


    <div>

        Filter
          
            done<input type="text" onChange={change} name="done"/>
            {getData.filter((el)=>el.done.toLowerCase()==getDone.toLowerCase()).map(el=><li> description: {el.description} done: {el.done}</li>)}
    </div>
    )
}

export default Filter