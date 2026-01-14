import { useState } from "react";

export default function Form ({addNewComment}) {

    let [formData,setformData] = useState({
        username: "",
        remarks : "",
        rating : 5
    });

    let handleInputChange = (event) => {
        setformData((currData) =>{
            return{...currData, [event.target.name] : event.target.value};
        });
    };

    let handelSubmit = (event) =>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setformData({
            username: "",
            remarks : "",
             rating : 5
        });
    };


    return (
        <div>
            <h4>Give a comment!</h4>
            <form action="" onSubmit={handelSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} name="username" id="username"/>
                <br /> <br />
                <label htmlFor="remarks">Remarks</label>
                <textarea name="" id="" value={formData.remarks} placeholder="add few remarks" onChange={handleInputChange} name="remarks" id="remarks" >Remarks</textarea>
                <br /> <br />
                <label htmlFor="number">Number</label>
                <input type="number" placeholder="rating" value={formData.rating} min={1} max={5} onChange={handleInputChange} name="rating" id="number"/>
                <br /> <br />
                <button>Submit!</button>
            </form>
        </div>
    );

}