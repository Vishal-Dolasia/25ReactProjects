import { useEffect, useState } from 'react'
import './index.css'
import { BsArrowLeftCircleFill ,BsArrowRightCircleFill} from 'react-icons/bs';

function App({url,limit}) {
  const[images,setImages] = useState([]);
  const [loading,setLoading] = useState(false);
  const [errormessage,setErrormessage] = useState(null);
  const [currentslide,setCurrentslide] = useState(0);




  function handleprevious(){
      if(currentslide === 0){
        setCurrentslide(images.length-1);
      }
      else setCurrentslide(currentslide-1);
  } 
  function handlenext(){
      if(currentslide === images.length-1){
        setCurrentslide(0);
      }
      else setCurrentslide(currentslide+1);
  } 
  async function fetchImages(geturl){
    try {
      setLoading(true);
      const response = await fetch(`${geturl}?page=1&limit=${limit}`);
      const data = await response.json();

      if(data){
        setImages(data)
        setLoading(false);
      }
    } catch (error) {
      setErrormessage(error)
      setLoading(false);
    }
  }

  useEffect(()=>{
    if(url !==''){
      fetchImages(url);
    }
  },[url])

  console.log(images);

  if(loading){
    return <div> Loading the images....</div>
  }
  if(errormessage){
    return <div> error:- {errormessage}</div>
  }
  return (
    <div className='relative flex justify-center items-center w-150 h-112.5'>
      <BsArrowLeftCircleFill 
      onClick={handleprevious}
      className='absolute left-4 text-3xl text-white cursor-pointer z-10'/>
      {
        images?(images.map((image,index)=>{
          if(currentslide === index){
            return <img 
              className='w-full h-full object-cover rounded-lg'
              key = {image.id}
              alt={image.author}
              src={image.download_url}/>
          }})):null
      }
      <BsArrowRightCircleFill
      onClick={handlenext}
      className='absolute right-4 text-3xl text-white cursor-pointer z-10'/>

      <span className='flex absolute bottom-4'>
        {
          images? 
          images.map((_,index)=>{
            return <button key = {index} className = {` h-4 w-4 rounded-full border-none outline-none mx-1 my-1 cursor-pointer ${
              currentslide === index ? 'bg-red-600': 'bg-white'
            }`}
            onClick={()=>{
              setCurrentslide(index);
            }}>

            </button>
          })
          : null
        }
      </span>
    </div>
  )
}

export default App
