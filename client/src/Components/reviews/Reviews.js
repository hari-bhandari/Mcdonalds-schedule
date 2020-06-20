import React, {Fragment, useContext,useEffect} from 'react';
import ReviewContext from '../../context/reviews/reviewContext'
import Review from "./Review";
import Spinner from "../spinner/Spinner";
const Reviews = ({id}) => {
    const reviewContext=useContext(ReviewContext);
    const {reviews,getReviews,loading}=reviewContext;
    useEffect(()=>{
        getReviews(id)
    },[])
    if (reviews!==null&&reviews.length===0&&!loading) {
        return <h4 className={"mt-5"}>No Bootcamp found</h4>
    }
    return (
        <Fragment>

            {reviews!==null&&!loading?(
                reviews.map((review)=>(
                        <Review review={review} key={review._id}/>
                    )
                )
            ):(<Spinner/>)
            }
        </Fragment>
    );
};

export default Reviews;