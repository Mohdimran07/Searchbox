import React, { useState } from "react";
import "./Input.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

const InputBox = ({ data }) => {
  const [filterData, setFilterData] = useState([]);
  const [wordEnter, setWordEnter] = useState('');

  const filterHandler = (event) => {
    const findWord = event.target.value;
    setWordEnter(findWord) // Here the user currently trying to find word
    // We are filtering the data that contains name similar to what we are trying to search for
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(findWord.toLowerCase());
    });
    // If the input value is empty setFilterData to empty array[] or else update the function
    if (findWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };
   // CancelHandler is to set every thing empty or cancel everyThing
  const CancelHandler = () => {
      setFilterData([]);
      setWordEnter('');
  }
  return (
      //search box with icons
    <div className="search">
        
      <div className="inputs">
        
        <input
          type="text"
          placeholder="Search Here..."
          value={wordEnter}
          onChange={filterHandler}
        />
        
          <div className="searchIcon"> 
          {filterData.length === 0 ? <SearchIcon /> : <CloseIcon onClick={CancelHandler} />}
        </div>
      </div>
      
      {filterData.length !== 0 ? (
        <div className="dataInput">
          {filterData.map((value) => { // getting the data through map method
            return (
              <div key={value.id} className="filteredData">
                <div className="Inputname">{value.name}</div>
                <div className="Inputitem">{value.items}</div>
                <div className="Inputaddress">{value.address}</div>
                <div className="Inputpincode">{value.pincode}</div>
              </div>
            );
          })}
        
        </div>
       ) : (
        <div className="dataInput">
        <p> no data found</p>
        </div>
    )}
     
    </div>
    
  );
};

export default InputBox;
