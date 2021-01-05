import React from 'react';

function Review(props) {
    return (
        <tr>
            <td>{props.review.id}</td>
            <td>{props.review.title}</td>
            <td>{props.review.score}</td>
            <td>{props.review.description}</td>
            <td>{props.review.dateCreated}</td>
            <td>{props.review.reviewerClientId}</td>
            <td>{props.review.reviewedProductId}</td>
            <td><button className="btn btn-primary" onClick={() => props.onEdit(props.review)}>Edit</button></td>
            <td><button className="btn btn-primary" onClick={() => props.onDelete(props.review)}>Delete</button></td>
        </tr>
    );
}

export default Review;