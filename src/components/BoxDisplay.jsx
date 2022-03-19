import React from 'react'
import "../box.css"

const BoxDisplay = (props) => {
    
    return (
        <div>
            {
                props.colors.map((color, i)=> {
                    return(
                        <div className="box" key={i} style={{backgroundColor: color.color}}> {color.color}  </div>
                    )
                })
            }
        </div>
    )
}

export default BoxDisplay
