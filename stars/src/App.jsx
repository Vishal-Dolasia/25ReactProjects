import { useState } from 'react';
import './index.css'
import { FaStar,FaRegStar } from "react-icons/fa";
function App() {
  const [hover,sethover] = useState();
  const [selected,setselected] = useState(0);

  return (
    <> 
      <div className='flex'>
        {
          [1,2,3,4,5,6,7,8,9,10].map((star) => {
             return <FaRegStar size={50} key= {star} color = {star <= (hover||selected) ? "gold":"gray"}
             onMouseEnter={()=>{
              sethover(star);
             }}
             onMouseLeave={()=>{
              sethover();
             }}
             onClick={()=>{
              if(selected === star){
                setselected(0);
              }
              else setselected(star)}}/>
          })
        }
      </div>
    </>
  )
}

export default App
