class ReviewsApi {
    static API_BASE_URL = "/api/v1";

    static requestHeaders() {
        return {}
    }

    static getAllReviews() {
        const headers = this.requestHeaders();
        const request = new Request(ReviewsApi.API_BASE_URL + "/reviews", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }
}

export default ReviewsApi;