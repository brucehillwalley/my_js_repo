import React from 'react'
import Photo from './Photo'

const Card = (props) => {
    console.log(props);
  return (
    <div><h2>Hello {props.name}</h2>

    <Photo img={props.src}/>
    <p>Mizaç: {props.character}</p>
    </div>
  )
}

export default Card