import * as actionType from './types';

export const taskAdded=(description)=>{
    return {
        type:actionType.ADD,
        payload: {
            description,
        }
    }
}
export const taskUpdated=(id,description)=>{
    return {
        type:actionType.UPDATE,
        payload:{
          id,
          description
        }
    }
}

export const taskDeleted=(id)=>{
    return {
        type:actionType.DELETE,
        payload:{
            id
        }
    }
}
export const taskDone=(id)=>{
    return {
        type:actionType.DONE,
        payload:{
            id: id
        }
    }
}
