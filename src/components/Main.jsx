import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className='main'>
            <h1>토심이의 홈페이지</h1>
            <h2>방문해주셔서 감사합니다.</h2>
            <Link to='/board/list'><img src='https://item.kakaocdn.net/do/9f9751a9d1857e151d551434b93cdcd1d0bbab1214a29e381afae56101ded106' alt='이거어때' /></Link>
        </div>
    );
};

export default Main;