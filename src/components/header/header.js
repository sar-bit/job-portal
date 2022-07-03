import React, { useEffect, useState,useContext } from "react";
import Dropdown from "../common/dropdown";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Context } from "../../context/Context";
import "./header.css";

function Header({ deptList, locationList, functionList, onSearch }) {
  const {dispatch,selectedList}=useContext(Context);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [selectedFunction, setSelectedFunction] = useState("");

  function filterResult(item) {
    let list = selectedList.filter((i) => i !== item);
    dispatch({ type: "SELECTED_LIST", payload: list });
  }

  return (
    <>
      <div className="header-container">
        <form className="">
          <div className="text-container" controlId="SearchforJob">
            <input
              type="text"
              placeholder="Search for Job"
              className="text-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <BsSearch onClick={() => onSearch(search)} />
          </div>
          <div className="dn-container">
            <Dropdown
              value={department}
              options={deptList}
              onChange={(res) => setDepartment(res)}
              lable="Department"
            />
            <Dropdown
              value={location}
              options={locationList}
              onChange={(res) => setLocation(res)}
              lable="Location"
            />
            <Dropdown
              value={selectedFunction}
              options={functionList}
              onChange={(res) => setSelectedFunction(res)}
              lable="Function"
            />
          </div>
        </form>
      </div>
      {selectedList.length > 0 && (
        <div className="header-container2 div-margin">
          <div className="listitems-container">
            {selectedList.map((item) => (
              <div className="listitems">
                <span>{item}</span>
                <AiOutlineCloseCircle onClick={() => filterResult(item)} />
              </div>
            ))}
          </div>
          <span onClick={() => dispatch({ type: "SELECTED_LIST", payload: []})}>Clear All</span>
        </div>
      )}
    </>
  );
}

export default Header;
