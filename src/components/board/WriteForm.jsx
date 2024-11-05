import React, { useState } from 'react';
import axios from 'axios';

import styles from '../../css/Board.module.css';
import { useNavigate } from 'react-router-dom';

const WriteForm = () => {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const navigator = useNavigate();

    const [subjectDiv, setSubjectDiv] = useState('');
    const [contentDiv, setContentDiv] = useState('');

    const boardSubmit = (e) => {
        e.preventDefault();

        subject === '' && setSubjectDiv('제목 입력')
        content === '' && setContentDiv('내용 입력')

        axios.post('http://localhost/SpringReactProject/board/write', { subject, content }, { withCredentials: true })
             .then(response => {
                response.data.result === "SUCCESS" ? navigator('/board/list') : alert('글 작성이 실패했습니다.');
             })
             .catch(error => console.error('글 작성 요청 중 오류 발생:', error));
    };

    return (
        <div className={styles.write}>
            <form>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th><label htmlFor="subject">제목</label></th>
                            <td><input type="text"
                                        id="subject"
                                        value={subject}
                                        onChange={(e) => {
                                                setSubject(e.target.value)
                                                setSubjectDiv('');
                                            }
                                        }
                                        required/>
                                <div id={styles.subjectDiv}>{subjectDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <th><label htmlFor="content">내용</label></th>
                            <td>
                                <textarea id="content" value={content} onChange={(e) => {
                                                                                    setContent(e.target.value)
                                                                                    setContentDiv('')
                                                                                }} required />
                                <div id={styles.contentDiv}>{contentDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button onClick={boardSubmit}>글쓰기</button>
                                <button>초기화</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </form>
        </div>
    );
};

export default WriteForm;