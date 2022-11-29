
import "./style.css";
import Up from '../../assets/VectorUp.png'
import Down from '../../assets/VectorDown.png'
import { useState } from 'react'

export default function DropDown(collapse) {

  const [isClose, setIsClose] = useState(true)
  return isClose ? (
    <>
      <button className="collapseTitle " onClick={() => setIsClose(false)}>{collapse.title}<img src={Up} alt="fleche vers le bas"></img></button>
    </>
  ) : (
    < >
      <button className="collapseTitle" onClick={() => setIsClose(true)}>{collapse.title}<img src={Down} alt="fleche vers le haut"></img></button>
      <div className="collapseP">{collapse.description}</div>
    </>
  )
}