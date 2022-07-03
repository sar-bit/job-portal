import React, {useContext} from 'react'
import '../../common/styles/commonStyle.css';
import {Context} from '../../context/Context';
function Dropdown({options, onChange,lable}) {

  const {dispatch,selectedList} = useContext(Context);
    const handleSelect=(e)=>{
        onChange(e.target.value)
        dispatch({ type: "SELECTED_LIST", payload: [...selectedList,e.target.value] });
    }
  return (
   <select className='dropdown-container' onChange={(e)=>handleSelect(e)}>
      <option>{lable}</option>
     {options.map(item=><option value={item.title}>{item.title}</option>)} 
     
    </select>
   
  )
}

export default Dropdown
