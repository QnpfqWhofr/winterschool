import './App.css'
import { useState,useRef } from 'react';
import Header from './components/Header.jsx';
import List from './components/List.jsx';
import Editor from './components/Editor.jsx';
import { useReducer } from 'react';

const  mockData = [
  {
    id:0,
    isDone:false,
    content: "리액트 공부하기",
    stdate:new Date().getTime(),
    endate:new Date('2026-01-16').getTime(),
  },
  {
    id:1,
    isDone:false,
    content: "마크하기",
    stdate:new Date().getTime(),
    endate:null,
  },
  {
    id:2,
    isDone:false,
    content: "집가기",
    stdate:new Date().getTime(),
    endate:new Date('2026-01-16').getTime(),
  },
]

function reducer(state,action) {
  switch(action.type) {
    case 'CREATE' : return [action.data, ...state];
    case 'UPDATE' : 
      return state.map((item) =>
        item.id === action.targetId
        ? {...item, isDone: !item.isDone}
        : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  
  const [todos, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);

  const onCreate = (content,endate) => {
    dispatch({
      type:"CREATE",
      data : {
        id: idRef.current++,
        isDone:false,
        content: content,
        stdate: new Date().getTime(),
        endate: endate,
      }
    })
  };

  const onUpdate = (targetId) => {
    dispatch({
      type:"UPDATE",
      targetId : targetId,
    })
  };

  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId : targetId,
    })
  }

  return (
    <div className='App'>
    <Header/>
    <Editor onCreate={onCreate}/>
    <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App;
