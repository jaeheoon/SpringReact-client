import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../css/Board.module.css';

const List = () => {
    const [boards, setBoards] = useState([]); 

    useEffect(() => {
        axios.get('http://211.188.54.228/SpringReactProject/board/list') 
            .then(response => setBoards(response.data)) 
    }, []);

    return (
        <div className={styles.list}>
            <h2>게시판 리스트</h2>
            <ul>
                {
                    boards.map(board => (
                        <li key={board.seq}>
                            <h3>{board.subject}</h3>
                            <p className={styles.writer}>작성자: {board.name} ({board.id})</p>
                            <p>{board.content}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default List;
