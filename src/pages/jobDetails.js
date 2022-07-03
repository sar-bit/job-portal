import React, { useEffect, useState } from 'react'
import "../common/styles/commonStyle.css";
import { useLocation} from "react-router-dom";
import {HiOutlineOfficeBuilding,HiLocationMarker} from 'react-icons/hi';
import SocialMedia from '../components/social/socialMedia';


const APIURL = "https://teknorix.jobsoid.com/";
function JobDetails() {
const [jobDetails, setJobDetails]= useState('');
const location = useLocation();
const id = location.pathname.split("/")[2];
console.log(location,'location')
console.log(id,'id')
const fetchJobDetails = async () => {
  await fetch(`${APIURL}/api/v1/jobs/${id}`)
    .then((res) => res.json())
    .then((res) => setJobDetails(res));
};

useEffect(()=>{fetchJobDetails()},[])

console.log(jobDetails,'jobDetails')
  return (
    <div className="container">
      <div className='container-box'>
      <div className='sub-heading'>
      <p>{jobDetails.industry} At {jobDetails.company}</p>
      <h2>{jobDetails.title}</h2>
      <div className='sub-details'>
        <div>
      <HiOutlineOfficeBuilding size={20} style={{marginRight:'4px', color:'gray'}}/>
      <span>{jobDetails && jobDetails.department && jobDetails.department.title}</span>
      </div>
      <div>
      <HiLocationMarker size={20} style={{marginRight:'4px', color:'gray'}}/>
      <span>{jobDetails && jobDetails.location && jobDetails.location.title}</span>
      </div>
      <span className='type-style'>{jobDetails.type}</span>
      </div>
      </div>
      <button type="button" className='apply-button'>Apply</button>
      <hr/>
      <div className='details-container'>
        <div className='job-details'>
      <div
      dangerouslySetInnerHTML={{__html: jobDetails && jobDetails.description}}
      >
      </div>
      </div>
      <div className='sub-container'>
        <div  className='others-container'>
        <h4>OTHER JOB OPENINGS</h4>
        <div >
        <p className='other-title'>Quality Assurance Analyst</p>
        <div className='other-sub-details'>
        <div>
        <HiOutlineOfficeBuilding size={20} style={{marginRight:'4px', color:'gray'}}/>
        <span>Quality Assurance</span>
        </div>
        <div>
      <HiLocationMarker size={20} style={{marginRight:'4px', color:'gray'}}/>
        <span>Verna Goa</span>
        </div>
        </div></div>
        <div >
        <p className='other-title'>Quality Assurance Analyst</p>
        <div className='other-sub-details'>
        <div>
        <HiOutlineOfficeBuilding size={20} style={{marginRight:'4px', color:'gray'}}/>
        <span>Quality Assurance</span>
        </div>
        <div>
      <HiLocationMarker size={20} style={{marginRight:'4px', color:'gray'}}/>
        <span>Verna Goa</span>
        </div>
        </div></div>
      </div>

      <div>
        <h4>SHARE JOB OPENINGS</h4>
       <SocialMedia/>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default JobDetails
