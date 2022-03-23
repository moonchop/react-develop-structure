import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';

function login(id : string,pw : string) {
  if(id == 'hi' && pw  == '1234')
    return {
      status:"succ",
      token:"AMJ!N$JNADFNDAMNMNM$@N<!@N<N!@NB"
    };
  return {
    status:"fail"
  };
}



export default function Order() {
    const [id,setId] = useState("");
    const [pw,setPw] = useState("");
  const navigate = useNavigate();
  return (
    <div>
        <Input label="아이디" value={id} onChange={(e) => setId(e.target.value)} />
        <Input label="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} />
        <Button onClick={() => {
            const data = login(id,pw);
            if(data.status ==='succ') {
              alert("로그인 성공");
              console.log(data);
              navigate("/future");
               // dispatch(userAction.setToken(data.token)))
            }
            else {
              alert("로그인 실패");
            }
        }}>로그인</Button>
    </div>
  )
}
