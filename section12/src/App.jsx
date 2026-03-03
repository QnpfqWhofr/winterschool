import './App.css'
import { useReducer } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Diary from './pages/Diary.jsx';
import New from './pages/New.jsx';
import NotFound from './pages/NotFound.jsx';
import Edit from './pages/Edit.jsx';
import Button from './components/Button.jsx';
import Header from './components/Header.jsx';

import { getEmotionImage } from './util/get-emotion-image.js';

function reducer(state, action) {
  return state;
};

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
