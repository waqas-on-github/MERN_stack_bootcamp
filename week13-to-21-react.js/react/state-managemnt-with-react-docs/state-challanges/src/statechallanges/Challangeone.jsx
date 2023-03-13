import { useState } from 'react';
import './challange.css'

export default function Picture() {
  const [isActive, setIsActive] = useState(false);


  return (
    <div
      className={`background ${isActive===false?'background--active':""}`}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={`picture  ${isActive===true?"picture--active" :""} `}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
