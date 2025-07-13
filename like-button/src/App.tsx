import { useState } from 'react'
import "./App.css";
 
function App() {
  return (
    <>
      <LikeButton />
    </>
  );
}
 
function LikeButton() {
  const [count, setCount] = useState(999);
  const handleeClick = () => {
    setCount(count+1);
  };
  return (
  <span className="likeButton" onClick={handleeClick}>
    ♥ {count}
    </span>
    );
}
 
export default App;
