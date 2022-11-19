import React, { useEffect } from 'react'
import { useState } from 'react'

const CleanUpFunction = () => {
    const [countWidth, setCountWidth] = useState(0);
    const [countHeight, setCountHeight] = useState(0);

    const actualWidth = () =>{
        setCountWidth(window.innerWidth);
    }

    const actualHeight = () =>{
        setCountHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', actualWidth)
        window.addEventListener('resize', actualHeight)

        return() => {
                
            window.removeEventListener('resize', actualWidth)
            window.removeEventListener('resize', actualHeight)
        }
    })

  return (
    <div>
        <p>The actual size of the window is:</p>
        <h1>{countWidth} X {countHeight}</h1>
    </div>
  )
}

export default CleanUpFunction