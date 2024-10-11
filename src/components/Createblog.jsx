import React, { useState } from 'react'
import Navbar from './Navbar'
import Editor from './Editor'

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is a tutorial of Editor js",
        level: 1
      }
    }
  ]
}




const Createblog = () => {
  const [data, setData] = useState(INITIAL_DATA)
  return (
    <div>
        <Navbar/>
      <h1>create your blogs and post them</h1>
      <Editor data={data} onChange={setData} editorBlock="editorjs-container" />
      <button onClick={() => console.log(data)}>Save Data</button>
      
    </div>
  )
}

export default Createblog


