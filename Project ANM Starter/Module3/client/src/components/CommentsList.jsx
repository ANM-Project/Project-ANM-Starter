import React from 'react'

const CommentsList = (props) => (
    <div>
        <h4>Comments List</h4>
        <div>
            {props.comments.map(comment => {
            return <div key={comment._id}>{comment.text}</div>
            } )}
        </div>
    </div>
 
)

export default CommentsList;