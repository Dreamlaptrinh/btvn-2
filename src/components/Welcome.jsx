import { useState } from "react";
import Users from '../InforUser.json'
import '../App.css'
import Header from "./layouts/Header";
import Main from "./layouts/Main";



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
            <Header filterHandle={filterHandle} filter={filter} setName={setName} name={name} uList={uList}/>
            <Main uList={uList}/>
        </div>
    )
}

