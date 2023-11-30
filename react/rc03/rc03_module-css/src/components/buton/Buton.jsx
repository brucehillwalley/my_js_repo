import ButonStyle from "./Buton.module.css"

const Buton = ({ name }) => {
  return (
    <div className={ButonStyle.title}>
      <button className={ButonStyle["btn-blue"]}>{name}</button>
    </div>
  )
}

export default Buton
