import "./Header.css"
import resim from "./logoclarus.png"

const Header = () => {
  return (
    <div className="logo-div">
      <img src={resim} alt="" />
      <h1 style={{color:"white", fontFamily:"Rubik Vinyl, cursive", textAlign:"center", fontWeight:"700", wordSpacing:"20px"}}>Lesson Reminder</h1>
     
      
    </div>
  );
};

export default Header;
