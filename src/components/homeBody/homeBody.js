import React from 'react'
import { Link } from "react-router-dom";
import './homeBody.css';
import {HiOutlineOfficeBuilding,HiLocationMarker} from 'react-icons/hi';

function HomeBody({joblist}) {
  return (
    <div className='body-container'>
      {joblist.map(item=><div key={item.id} className='list-items'>
        <div className='sub-heading'>
        <h2>{item.title}</h2>
        <div className='sub-details'>
        <div>
        <HiOutlineOfficeBuilding size={20} style={{marginRight:'4px', color:'gray'}}/>
        <span>{item.department.title}</span>
        </div>
        <div>
      <HiLocationMarker size={20} style={{marginRight:'4px', color:'gray'}}/>
        <span>{item.location.title}</span>
        </div>
        <span className='type-style'>{item.type}</span>
        </div>

</div>
   <div className='btn-position'>
        <button type="button" className='apply-btn'>Apply</button>
        <Link to={`/JobDetails/${item.id}`} className="link">View</Link>
        </div>
        </div>

      )}
    </div>
  )
}

export default HomeBody
