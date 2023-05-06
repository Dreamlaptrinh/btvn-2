import { useState } from "react";
import Users from '../InforUser.json'
import Menu from '../Menu.json'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchUser(props){
    const [data, setData] = useState(Users);
    const [uList, setUlist] = useState(data)
    const[name,setName] = useState('');

    const filter = (name) => {
        let fData = data.filter(p => p.name.indexOf(name) >= 0);
        setUlist(fData);
    }
    const filterHandle = (title) => {
        let fData = data.filter(p => p.title.indexOf(title) >= 0);
        setUlist(fData);
    }

    return(
        <div>
            <div className="headerMain">
                <div className="headerMenu">
                    <h2 style={{display:'flex'}}>Users</h2>
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
                        <button onClick={()=>{filterHandle(m.title)}}>{m.title}</button>
                    ))}
                </div>
            </div>
            <div className="listUsers">
                {uList.map(u => (
                    <div className="user">
                        <div className="imgBorder" >
                            <img src={u.url} alt="" />
                        </div>
                        <div className="inforUser">
                            <div className="mainInfor">
                                <span>{u.name}</span>
                                <span>{u.country}</span>
                            </div>
                            <div className="hobbyUser">                                                    
                                {u.hobby.map((hobby) =>{
                                    return <div className="hobby">{hobby}</div>;
                                })
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

