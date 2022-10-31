import React from 'react'

const Hello = () => {

    function showName() {
        console.log("chae");
    }
    function showage(age) {
        console.log(age);
    }
    function showText(txt) {
        console.log(txt); // target은 input 태그를 가리키고 value는 작성한 값
    }
  return (
    <div>
        <h1>hello</h1>
        <button onClick={showName}>show name</button>
        <button onClick={() => {
            showage(15)
        }}>show age</button>
        <input 
            type="text" 
            onChange={(e) => {
            const txt = e.target.value
            showText(txt)
        }}/>
    </div>
  )
}

export default Hello