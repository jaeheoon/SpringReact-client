import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import LoginForm from './components/member/LoginForm';
import './css/style.css';
import WriteForm from './components/board/WriteForm';
import List from './components/board/List';

const App = () => {
  return (
    <BrowserRouter>
            <>
                <div className='menunav'>
                    <ul>
                        <li><Link to='/'>메인화면</Link></li>
                        <li><Link to='/member/login'>로그인</Link></li>
                        <li><Link to='/board/write'>글쓰기</Link></li>
                        <li><Link to='/board/list'>목록</Link></li>
                    </ul>
                </div>
            </>
            {/* 화면에 보이는 영역 */}
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/member/login' element={<LoginForm/>}/>
              <Route path='/board'>
                <Route path='write' element={<WriteForm/>}/>
                <Route path='list' element={<List/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
  );
};

export default App;