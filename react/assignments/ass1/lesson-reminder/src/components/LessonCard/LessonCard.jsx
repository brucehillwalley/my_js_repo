import { data } from "../helper/data"
import "./LessonCard.css"

const LessonCard = () => {
  return (
    <div className="card-container">
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
  )
}

export default LessonCard