import { useState } from "react"; 

function ReviewForm({ food, setReview, setShowReview, showReview }){
    const [formView, setFormView] = useState('')

    function onAddReview(e){
        setFormView(e.target.value)
    }

    function onAddReviewSubmit(e){
        e.preventDefault()
        setReview(formView, food, food.review.length, food.id)
        setFormView('')
        setShowReview(!showReview)
    }

    return(
        <form onSubmit = {onAddReviewSubmit}>
            <input type="text" placeholder='Review here' 
                onChange={onAddReview} value={formView}></input>
            <button className="submit-review-button" type="submit" 
                placeholder="Add New Review">Submit Review</button>
        </form> 
    )
}

export default ReviewForm;
