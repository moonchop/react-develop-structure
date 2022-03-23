import React, { useState } from 'react'
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Order() {
    const [qty,setQty] = useState("0.03");
    const [price,setPrice] = useState("50000");

  return (
    <div>
        <Input label="수량" value={qty} onChange={(e) => setQty(e.target.value)} />
        <Input label="금액" value={price} onChange={(e) => setPrice(e.target.value)} />
        <Button onClick={() => alert(`${qty} ${price} 매수`)}>매수</Button>
        <Button onClick={() => alert(`${qty} ${price} 매도`)}>매도</Button>
    </div>
  )
}
