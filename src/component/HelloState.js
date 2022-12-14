import React, { useState } from "react";
import UserName from "./UserName";

const Hello = ({age}) => {
    // let name = "Mike";
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인 입니다" : "미성년자 입니다"

    return (
        <div>
            <h2>
                {name}({age}) : {msg}
            </h2>
            <UserName name={name}/>
            <button onClick={()=> {
                setName(name === "Mike" ? "Jane" : "Mike")
            }}>change</button>
        </div>
    );
};

export default Hello;
