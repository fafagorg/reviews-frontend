import React from 'react';

function parseDate(date) {
    return date.replaceAll("-", "/").replace("T", " ").split(".")[0];
}

function Review(props) {
    return (
        <tr>
            <td>{props.review.title}</td>
            <td>{props.review.score}</td>
            <td>{props.review.description}</td>
            <td>{parseDate(props.review.dateCreated)}</td>
            <td>{props.review.reviewerClientId}</td>
            <td>{props.review.reviewedProductId}</td>
            <td>{props.review.externalScore}</td>
            <td><button className="btn btn-primary" onClick={() => props.onEdit(props.review)}>Edit</button></td>
            <td><button className="btn btn-primary" onClick={() => props.onDelete(props.review)}>Delete</button></td>
        </tr>
    );
}

export default Review;