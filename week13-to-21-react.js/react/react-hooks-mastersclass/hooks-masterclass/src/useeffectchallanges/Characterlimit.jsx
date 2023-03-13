import React, { useEffect, useState } from 'react'
import './effect.css'

function Characterlimit() {
  const [char, setChar] = useState('');
  
    const charCount = 240 - char.length;
    const isDisabled = charCount < 0 || charCount === 240;

  function logChar(e) {
    setChar(e.target.value);
  }

  useEffect(() => {
    document.title =` character  limit = ${240-(char?.length)}`
  },[char])


  return (
    <div className='characterlimit'>
      <p></p>
      <textarea value={char} onChange={logChar} cols='20' rows='10'></textarea>
      <button disabled={isDisabled}>post</button>
    </div>
  );
}

export default Characterlimit;
