import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Menu from '../../Menu.json'
import { NavLink, useNavigate } from "react-router-dom";
import {Routes, Route, Link} from 'react-router-dom'



function Header({filter,setName,filterHandle, name,}){
    const navigate = useNavigate();


    return (
        <div className="headerMain">
                <div className="headerMenu">
                    <Link 
                    to='/Home' 
                    style={{display:'flex',textDecoration:"none"}}
                    >
                        <h2 style={{color:"black"}}>Users
                        </h2>
                    </Link>
                    <form><FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <input 
                    type="text" 
                    name={name}
                    placeholder= "Search users" 
                    onChange={e => {
                        filter(e.target.value);
                        setName(e.target.value);
                    }}
                    id="" 
                    />
                    </form>
                </div>
                <div className="headerSearch">
                    {Menu.map(m=>(
                        <Link to={m.title} style={{textDecoration:"none", color:"black"}} 
                        onClick={()=>{filterHandle(m.title)}
                        } 

                        >{m.title}</Link>
                    ))}
                </div>
            </div>
    )
}
export default Header;