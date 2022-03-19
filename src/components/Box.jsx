import React, {useState} from 'react'

const Box = (props) => {
    const [color, setColor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor({ color:color})
        setColor("")
    }

    return(
        <div>
            <h1>Colorful Boxes!</h1>
            <form onSubmit={handleSubmit}>
                <label> Color: </label>
                <input name="color" type="text"
                onChange={(e)=>setColor(e.target.value)} value={color}/>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Box