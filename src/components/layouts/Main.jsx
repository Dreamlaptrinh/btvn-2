import React from "react";

function Main ({uList}){
    return(
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
    )
}
export default Main