
import ScrollAnimation from './components/ScrollAnimation'

function App() {

  return (
    <div>
     <ScrollAnimation>
      <div className='flex flex-col text-5xl gap-10 text-red-500 bg-slate-400'>
        {Array(10).fill("umay").map((data) => <div>{data}</div>) }
        </div> 
    
     </ScrollAnimation>
     <ScrollAnimation>
      <div className='flex flex-col text-5xl gap-10 text-blue-500 bg-green-400'>
        {Array(10).fill("GAGO").map((data) => <div>{data}</div>) }
        </div> 
    
     </ScrollAnimation>
    </div>
  )
}

export default App
