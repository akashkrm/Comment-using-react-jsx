import { useState } from "react";
import "./CommentForm.css"
import Form from "./Formii";
export default function Comment () {
    let [comments, setComments] = useState([
        {
            username : "@akash",
            remarks: "great job",
            rating: 4,
        }
    ]);

    let addNewComment = (comment) =>{
        setComments((currComments) => [...currComments, comment])
    };

    return(
        <>
        
        <div>
            <h4>All Comments!</h4>
            {comments.map((comment, idx) =>(
                <div className="Comment" key={idx}>
                <span>{comments.remarks}</span>
                &nbsp;
                <span>(rating ={comments.rating})</span>
                <p>(comments ={comments.username})</p>
            </div>

            ))}
            
        </div>
        <hr />
        <Form addNewComment={addNewComment}/>
        </>
        
    )
}