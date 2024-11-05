import React, { useState } from 'react';
import styles from '../../css/LoginForm.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const navigator = useNavigate();

    const [idDiv, setIdDiv] = useState('');
    const [pwdDiv, setPwdDiv] = useState('');
    const [loginDiv, setLoginDiv] = useState('');

    const onLoginSubmit = (e)=>{
        e.preventDefault();

        setId('');
        setPwd('');

        id === '' && setIdDiv('아이디 입력')
        pwd === '' && setPwdDiv('비밀번호 입력')

        axios.post('http://211.188.54.228/SpringReactProject/member/login', {id, pwd}, { withCredentials: true })
             .then(response => {
                response.data.result === "SUCCESS" ? navigator('/') : setLoginDiv('아이디나 비밀번호가 틀렸습니다.');
             })
             .catch(error => console.error('로그인 요청 중 오류 발생:', error));
    }
    
    return (
        <div className={styles.main}>
            <form>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input type="text" name='id' value={id} onChange={(e)=>{
                                    setId(e.target.value)
                                    setIdDiv('');
                                    setLoginDiv('');
                                }}/>
                                <div id={styles.idDiv}>{idDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input type="password" name='pwd' value={pwd} onChange={(e)=>{
                                    setPwd(e.target.value)
                                    setPwdDiv('');
                                    setLoginDiv('');
                                }}/>
                                <div id={styles.pwdDiv}>{pwdDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div id={styles.loginDiv}>{loginDiv}</div>
                                <button onClick={onLoginSubmit}>로그인</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </form>
        </div>
    );
};

export default LoginForm;
