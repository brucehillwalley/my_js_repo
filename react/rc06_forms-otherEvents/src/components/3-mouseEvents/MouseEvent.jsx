import { useState } from "react"

const MouseEvent = () => {
  const [visible, setVisible] = useState(false)

  const [coordX, setCoordX] = useState()
  const [coordY, setCoordY] = useState()

  const handleMouseMove = (e) => {
    //? Mutlak koordinatlar
    // console.log("X:", e.pageX)
    // console.log("Y:", e.pageY)

    //? Göreceli koordinatlar
    // console.log("RX:", e.nativeEvent.offsetX)
    // console.log("RY:", e.nativeEvent.offsetY)

    // setCoordX(e.pageX)
    // setCoordY(e.pageY)
    setCoordX(e.nativeEvent.offsetX)
    setCoordY(e.nativeEvent.offsetY)
  }
  return (
    <div
      className="container text-center d-flex flex-column align-items-center mt-4"
      onMouseMove={handleMouseMove}
    >
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseLeave={() => setVisible(false)}
        onMouseEnter={() => setVisible(true)}
      >
        todo item 1
      </div>

      {/* Conditional Rendering */}
      {visible && <span>Aciklama</span>}

      <div id="todo-2" className="bg-success text-light w-50 p-4 mt-4">
        todo item 2
      </div>

      <div id="todo-3" className="bg-success text-light w-50 p-4 my-4">
        todo item 3
      </div>
      <p>
        X: {coordX} and Y:{coordY}
      </p>
    </div>
  )
}

export default MouseEvent
