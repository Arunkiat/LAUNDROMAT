import React, { useEffect } from 'react';
import './Machine.css';

function Machine({ machine }) {
  useEffect(() => {
    if (machine.status === 'in use' && machine.timeLeft === 60) {
      // จำลองการส่งสัญญาณไปยังกลุ่ม Line
      alert(`เครื่อง ${machine.id} เหลือเวลาน้อยกว่า 1 นาที!`);
    }
    if (machine.status === 'in use' && machine.timeLeft === 0) {
      machine.status = 'available';
      machine.timeLeft = 0;
        }
  }, [machine.timeLeft]);

  const handleStartUsing = () => {
    if (machine.status === 'available') {
      machine.status = 'in use';
      machine.timeLeft = 70;
    }
    
  };

  return (
    <div className={`machine ${machine.status}`}>
        <h2>เครื่อง {machine.id}</h2>
        <p>สถานะ: <span className={`status ${machine.status}`}>{machine.status}</span></p>
        {machine.status === 'in use' && <p>เวลาที่เหลือ: {machine.timeLeft} วินาที</p>}
        {machine.status === 'available' && <button onClick={handleStartUsing}>ใช้งาน</button>}
    </div>
);
}

export default Machine;
