
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import {add,filter} from '../action/Action'
import { DarkMode } from '@chakra-ui/react'
const Addtask = () => {

    const [id,setId]=useState("")
    const [description,setDescription]=useState("")
    const [done,setDone]=useState("")
 
    const dispatch = useDispatch()

    const change= (e) => {

        if(e.target.name=="id"){

            setId(e.target.value)

        }else{

            if(e.target.name=="description"){
            
                setDescription(e.target.value)


            }else{

                if(e.target.name=="done"){

                    setDone(e.target.value)
                
                }
            
            }
        
        }

    }

    const submit =()=>{
     
    
        dispatch(add({id:id,description:description,done:done}))
    
    }

    const filter=()=>{

        dispatch(filter(id))
    }

  return (


    <div>
        Add
            id <input type="text" onChange={change}name="id" />
            description <input type="text" onChange={change } name="description" />
            done<input type="text" onChange={change} name="done"/>
            <input type="button" value="ok" onClick={()=>submit()}/>
    </div>
  )
}

export default Addtask