import { addType,filterType } from "../actionType/ActionType"

export const add=(data)=>{

    return{

        type:addType,
        id:data.id,
        description:data.description,
        done:data.done
    
    }

}

export const filter =(done)=>{

    return{
        type:filterType,
        done
      
    
    
    }

}

