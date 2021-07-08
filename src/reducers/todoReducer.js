import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from '../actions/types';

const initState=[];

const todoReducer=(state= initState, action)=>{
    const {type,payload}= action;
    switch(type){
        case actionTypes.ADD: 
            return [...state,{
                id:uuidv4(),
                description:payload.description,
                isDone:false 
            }] ;
        case actionTypes.UPDATE: 
            return state.map((todo) => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        description: payload.description,
                    };
                }
                return todo;
            });
        case actionTypes.DELETE: 
        return state.filter((item) => item.id !== payload.id);
        case actionTypes.DONE:
            return state.map((todo) => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        isDone: true
                    };
                }
                return todo;
            });
        default: return state ;
    }
}

export default todoReducer