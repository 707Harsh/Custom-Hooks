import { useEffect, useState } from 'react';
import './App.css'
import { useDimensions } from './Hooks/Dimensions';
import { useIsOnline } from './Hooks/IsOnline'
import { useMousePointer } from './Hooks/MousePointer';
import { useDebounce } from './Hooks/Debounce';
// import {useTodos} from './Hooks/FetchTodo'

function App() {
  // const {todos, loading} = useTodos(5);
  const status = useIsOnline();
  const position = useMousePointer();
  const dimensions = useDimensions();
  const [value, setValue] = useState('hi there');
  const debouncedValue = useDebounce(value,0.5);
  useEffect(()=>{
    console.log(debouncedValue);
  },[debouncedValue])
  return (
    <>
      {/* {loading?"Loading....":todos.map(todo => <Todo todo={todo}/>)} */}
      {status?<b>ONLINE</b>:<b>OFFLINE</b>}
      <div>
        Your mouse position is {position.x} {position.y}
      </div>
      <div>
        Windows height is {dimensions.height}
        Windows width is {dimensions.width}
      </div>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    </>
  )
}
// function Todo({todo})
// {
//   return(
//     <div>
//       <p>{todo.title}</p>
//       <p>{todo.description}</p>
//     </div>
//   )
// }
export default App
