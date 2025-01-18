import React from 'react'
import './Programs.css'
import propic1 from '../../assets/propic1.jpg'
import propic2 from '../../assets/propic2.jpg'
import propic3 from '../../assets/propic3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={propic1} alt="" />
            <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
        </div>
        <div className="program">
            <img src={propic2} alt="" />
            <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Undergraduate Degree</p>
        </div>
        </div>
        <div className="program">
            <img src={propic3} alt="" />
            <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Postgraduate Degree</p>
        </div>
        </div>
    </div>
  )
}

export default Programs