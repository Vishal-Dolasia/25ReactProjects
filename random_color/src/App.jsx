import { useState } from 'react'
import './index.css'

function App() {
  const [hex, setHex] = useState(true);
  const [rgb, setRgb] = useState(false);
  const [color, setColor] = useState("#000000");

  const hex_elements = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

  function generateRandomcolor_HEX(hex_elements){
    let bg_color = "#";
    for(let i = 0; i < 6;i++){
      const randomIndex = Math.floor(Math.random()*hex_elements.length);
      bg_color+=hex_elements[randomIndex];
    }
    setColor(bg_color)
  }
  function generateRandomcolor_RGB(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let bg_color = `rgb(${red},${green},${blue})`;
    setColor(bg_color);
  }
  return (
    <div 
      style={{backgroundColor:color}}
      className='h-screen flex flex-col'>
        <div className='flex justify-between mx-70 mt-2'>
          <button onClick = {() => {
            setHex(true);
            setRgb(false);
            generateRandomcolor_HEX(hex_elements)
          }} className='bg-white border-2 cursor-pointer'>Create HEX Color</button>
          <button onClick = {() => {
            setHex(false);
            setRgb(true);
            generateRandomcolor_RGB()
          }} className='bg-white border-2 cursor-pointer'>Create RGB Color</button>
          <button 
            className='bg-white border-2 cursor-pointer'
            onClick={()=>{
              if(hex){
                generateRandomcolor_HEX(hex_elements)
              }
              else{
                generateRandomcolor_RGB()
              }
            }}
          >Generate Random Color</button>
        </div>
        <div className='flex justify-center items-center text-white text-5xl mt-10'>
          {
            hex?(
            <div>
              HEX Color
            </div>):(
            <div>
                RGB Color
            </div>
            )
          }
        </div>

        <div className='flex justify-center text-white text-3xl mt-5'>
          {color}
        </div>
    </div>
  )
}

export default App
