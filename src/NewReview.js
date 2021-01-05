import React from 'react';

class NewReview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            score: '',
            description: '',
            dateCreated: '',
            reviewerClientId: '',
            reviewedProductId: ''
        }

        this.changeReview = this.changeReview.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
    }

    changeReview(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    clickAdd() {
        this.props.onAddReview(this.state);
        this.setState({
            id: '',
            title: '',
            score: '',
            description: '',
            dateCreated: '',
            reviewerClientId: '',
            reviewedProductId: ''
        });
    }

    render() {
        return (
            <tr>
                <td><input className="form-control" name="id" value={this.state.id} onChange={this.changeReview}></input></td>
                <td><input className="form-control" name="title" value={this.state.title} onChange={this.changeReview}></input></td>
                <td><input className="form-control" name="score" value={this.state.score} onChange={this.changeReview}></input></td>
                <td><input className="form-control" name="description" value={this.state.description} onChange={this.changeReview}></input></td>
                <td><input className="form-control" name="dateCreated" value={this.state.dateCreated} onChange={this.changeReview}></input></td>
                <td><input className="form-control" name="reviewerClientId" value={this.state.reviewerClientId} onChange={this.changeReview}></input></td>
                <td><input className="form-control" name="reviewedProductId" value={this.state.reviewedProductId} onChange={this.changeReview}></input></td>
                <td><button className="btn btn-primary" onClick={this.clickAdd}>Add Review</button></td>
            </tr>
        );
    }
}

export default NewReview;