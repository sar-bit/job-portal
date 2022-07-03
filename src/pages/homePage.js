import React, { useState, useEffect } from "react";
import Header from "../components/header/header";
import "../common/styles/commonStyle.css";
import HomeBody from "../components/homeBody/homeBody";
const APIURL = "https://teknorix.jobsoid.com/";
function HomePage() {
  const [joblist, setJoblist] = useState([]);
  const [deptList, setDeptList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [functionList, setFunctionList] = useState([]);
  const fetchJob = async () => {
    await fetch(`${APIURL}/api/v1/jobs`)
      .then((res) => res.json())
      .then((res) => setJoblist(res));
  };
  const ftechDept = () => {
    fetch(`${APIURL}/api/v1/departments`)
      .then((res) => res.json())
      .then((res) => setDeptList(res));
  };
  const ftechLocation = () => {
    fetch(`${APIURL}/api/v1/locations`)
      .then((res) => res.json())
      .then((res) => setLocationList(res));
  };
  const ftechFuntion = () => {
    fetch(`${APIURL}/api/v1/functions`)
      .then((res) => res.json())
      .then((res) => setFunctionList(res));
  };
  const onSearch=(search)=>{
    fetch(`${APIURL}/api/v1/jobs/${search}`)
        .then((res) => res.json())
        .then((res) => setJoblist(res));
  }
  useEffect(() => {
    fetchJob();
    ftechDept();
    ftechLocation();
    ftechFuntion();
  }, []);
  //console.log(joblist,'joblist')
  console.log(deptList, "deptList");
  return (
    <div className="container">
      <Header
        deptList={deptList}
        locationList={locationList}
        functionList={functionList}
        onSearch={onSearch}
      />
      <HomeBody joblist={joblist} />
    </div>
  );
}

export default HomePage;
