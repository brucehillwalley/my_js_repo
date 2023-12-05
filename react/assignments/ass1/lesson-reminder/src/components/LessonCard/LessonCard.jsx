import { useState } from "react"
import { data } from "../helper/data"
import "./LessonCard.css"

const LessonCard = () => {
const [ders, setDers]=useState(6)
const [clear, setClear]=useState(" ")

const handleClear=()=>{
setDers(0)
setClear("none")
}

  return (
    <div className="lesson-state">
    <h2>{ders} lesson today</h2>
    <div className="card-container" style={{display:clear}}>
{data.map((lesson)=>(
    <div className="Card">
        <div className="image-container">
            <img src={lesson.image} alt="" />
        </div>
        <div>
            <p><span>Lesson Name : </span> {lesson.name}</p>
            <p><span>Lesson Hour : </span> {lesson.hour}</p>
        </div>
    </div>
))
}
    </div>
    <button onClick={handleClear}>Clear List</button>
    </div>
  )
}

export default LessonCard