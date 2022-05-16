
import { addType,filterType } from "../actionType/ActionType"
import {useSelector} from "react-redux"

const Reducer=(state={data:[],done:""},action)=>{


    console.log(state.data)
   
        


    switch (action.type){

        
        case addType:{
      

            

            return Object.assign({},state, {

                data:[...state.data,{id:action.id,description:action.description,done:action.done}]
            
            
            
            })

               
        

        }

        
        case filterType:{

           
          
        

            return  Object.assign({},state,{
                
                done:action.done
            })
        }

        default:{

            return state
        
        }

    }


}
export default Reducer;