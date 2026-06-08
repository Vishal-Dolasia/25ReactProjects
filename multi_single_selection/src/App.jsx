import Block from './components/Block'
import { useState } from 'react';
function App() {
  const datas = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];
  const [openIds,setOpenIds] = useState([]);
  const [isMultiEnabled,setIsMultiEnabled] = useState(false);


  function handleClick(id){
    const alreadyOpen = openIds.includes(id);

    if(isMultiEnabled){
      if(alreadyOpen){
        setOpenIds(
          openIds.filter((item)=>{
            return item !== id
          })
        );
      }
      else{
        setOpenIds([...openIds,id]);
      }
    }
    else{
      if(alreadyOpen){
        setOpenIds([]);
      }
      else{
        setOpenIds([id]);
      }
    }
  }
  return (
    <div className='flex flex-col items-center gap-4 mt-10'>
      <button
        className='bg-black text-white px-6 py-3 rounded cursor-pointer'
        onClick={() => setIsMultiEnabled(!isMultiEnabled)}
      >
        {isMultiEnabled ? "Disable Multi Select" : "Enable Multi Select"}
      </button>
      {
        datas.map((data) => {
          return (
            <Block
              key = {data.id}
              id={data.id}
              question={data.question}
              answer={data.answer}

              isOpen={openIds.includes(data.id)}
              handleClick={handleClick}
            />
          )
        })
      }
    </div>
  )
}

export default App
