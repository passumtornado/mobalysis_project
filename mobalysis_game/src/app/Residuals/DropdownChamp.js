import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Select from 'react-select'
import {Link,NavLink} from 'react-router-dom'
import './Dropdown.css'

const champions = [
    {label:"Astro",value:1},
    {label:"Ahri",value:2},
    {label:"Kayle",value:3},
    {label:"Fizz",value:4},
    {label:"GavesFizz",value:5},
    {label:"Kaylegaves",value:6},
    {label:"Fizzess",value:7},
    {label:"Gavesagagh",value:8},
]
const DropdownChamp = () => {
    const [champion,setChampion] = useState([]);

    const handleSelect = (event) =>{
        setChampion(event.target.value);
    }
    useEffect(()=>{
        setChampion(champions)
    },[])
    return (
        <div>
          {/*<Select options={champions} />  */}
          <div className="dropdownSelect">
          <select value={champion} onChange={handleSelect}>
           {
               champions.map((d,index) =>(
                 <option value={d.value} className="options">{d.label}</option>
               ))
           }
        </select>
          </div>
        </div>
    )
}

export default DropdownChamp
