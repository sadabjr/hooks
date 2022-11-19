import React, {useRef} from 'react';
import { useState } from 'react';


const Uncontrolled = () => {
    const luckyName = useRef(null);

    const [show, setShow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault()
        const name = luckyName.current.value;
        name === "" ?alert("please fill the data") : setShow(true)
    }
  return (
    <div>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="luckyName">Enter your lucky Name</label>
                <input type="text" id='luckyName' ref={luckyName}/>
            </div>
            <br />
            <button>Submit</button>
        </form>

        <h1>{show ? `your lucky name is ${luckyName.current.value}` : " " }</h1>
    </div>
  )
}

export default Uncontrolled