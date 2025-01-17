import React from 'react'
import './Programs.css'
import propic1 from '../../assets/propic1.jpg'
import propic2 from '../../assets/propic2.jpg'
import propic3 from '../../assets/propic3.jpg'
const Programs = () => {
  return (
    <div className='programs '>
        <div className="program">
            <img src={propic1} alt="" />
        </div>
        <div className="program">
            <img src={propic2} alt="" />
        </div>
        <div className="program">
            <img src={propic3} alt="" />
        </div>
    </div>
  )
}

export default Programs