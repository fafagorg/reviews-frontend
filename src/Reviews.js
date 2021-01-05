import React from 'react';
import Review from './Review.js';
import Alert from './Alert.js';
import NewReview from './NewReview.js';
import EditReview from './EditReview.js';

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorInfo: null,
            reviews: this.props.reviews,
            isEditing: {}
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCloseError = this.handleCloseError.bind(this);
        this.addReview = this.addReview.bind(this);
    }

    handleEdit(review) {
        this.setState(prevState => ({
            isEditing: { ...prevState.isEditing, [review.id]: review }
        }));
    }

    handleDelete(review) {
        this.setState(prevState => ({
            reviews: prevState.reviews.filter(r => r.id !== review.id)
        }));
    }

    handleCancel(id, review) {
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[id];

            return {
                isEditing: isEditing
            }
        });
    }

    handleChange(id, review) {
        this.setState(prevState => ({
            isEditing: { ...prevState.isEditing, [id]: review }
        }));
    }

    handleSave(id, review) {
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[id];

            if (id === review.id) {
                const reviews = prevState.reviews;
                const pos = reviews.findIndex(c => c.id === id);

                return {
                    reviews: [...reviews.slice(0, pos), Object.assign({}, review), ...reviews.slice(pos + 1)],
                    isEditing: isEditing
                }
            }

            return {
                errorInfo: "Cannot edit id"
            }
        });
    }

    handleCloseError() {
        this.setState({
            errorInfo: null
        });
    }

    addReview(review) {
        this.setState(prevState => {
            const reviews = prevState.reviews;

            if (review.id === '') {
                return ({
                    errorInfo: "Id cannot be empty"
                });
            }

            if (reviews.find(r => r.id === review.id)) {
                return ({
                    errorInfo: "Id already exists"
                });
            }

            if (review.title === '') {
                return ({
                    errorInfo: "Title cannot be empty"
                });
            }



            return ({
                reviews: [...prevState.reviews, review]
            })
        });
    }

    render() {
        return (
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleCloseError} />

                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Score</th>
                            <th>Description</th>
                            <th>Created at</th>
                            <th>Reviewer</th>
                            <th>Reviewed product</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <NewReview onAddReview={this.addReview} />
                    {this.state.reviews.map((review) =>
                        !this.state.isEditing[review.id] ?
                            <Review key={review.id} review={review} onEdit={this.handleEdit}
                                onDelete={this.handleDelete} />
                            :
                            <EditReview key={review.id} review={this.state.isEditing[review.id]}
                                onCancel={this.handleCancel.bind(this, review.id)}
                                onChange={this.handleChange.bind(this, review.id)}
                                onSave={this.handleSave.bind(this, review.id)} />
                    )}
                </table>

            </div>
        );
    }
}

export default Reviews;