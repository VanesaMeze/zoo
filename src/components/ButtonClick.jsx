import { useState } from "react";

const ButtonClick = () => {
  const [clickCount, setClickCount] = useState(0);
  

  const handleClick = e => {
    e.preventDefault();
    setClickCount(prevState => prevState + 1);
    console.log(clickCount);
  };

  return <div>
      <p>Click count: {clickCount}</p>
      <button onClick={handleClick}>Klikni me</button>
    </div>
    
}

export default ButtonClick;