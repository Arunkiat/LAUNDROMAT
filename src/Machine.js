import React, { useEffect } from 'react';
import './Machine.css';

function Machine({ machine }) {
  useEffect(() => {
    if (machine.status === 'in use' && machine.timeLeft === 60) {
      // จำลองการส่งสัญญาณไปยังกลุ่ม Line
      alert(`เครื่อง ${machine.id} เหลือเวลาน้อยกว่า 1 นาที!`);
    }
    if (machine.status === 'in use' && machine.timeLeft === 0) {
        // เมื่อเวลาที่เหลือเป็น 0 ให้เปลี่ยนสถานะเครื่องซักผ้ากลับเป็น 'available'
      machine.status = 'available';
      machine.timeLeft = 0;
        }
  }, [machine.timeLeft]);

  const handleStartUsing = () => {
    if (machine.status === 'available') {
      // เปลี่ยนสถานะเป็น 'in use' และตั้งเวลาที่เหลือเป็น 2 นาที (120 วินาที)
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