import 'react'
import './App.css'
import Header from './Header';
import { courses } from './Data';
import Course from './course';
function App() {

  return (
      <div className='course-main'>
       <Header/>
       {
courses?.map((course) =>(
<Course key={course.id} course={course} />

))

       }
      </div>
  
   
   
  )
}

export default App
