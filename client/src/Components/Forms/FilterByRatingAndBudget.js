import React, {useContext, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import BootcampContext from "../../context/bootcamps/bootcampContext";

const FilterByRatingAndBudget = () => {
    const [rating,setRating]=useState('9');
    const [budget,setBudget]=useState('any');
    const bootcampContext=useContext(BootcampContext);
    const {filterBootcamps}=bootcampContext;
    useEffect(()=>{
        console.log('')
    },[])
    const onSumbit=(e)=>{
        e.preventDefault();
        filterBootcamps(rating,budget)
    }
    return (
        <div className={'mt-20'}>
            <form >
                <div className="form-group">
                    <label> Rating</label>
                    <select className="custom-select mb-2" value={rating} onChange={(e)=>{
                        setRating(e.target.value);
                    }}  >
                        <option value="9">9+</option>
                        <option value="8">8+</option>
                        <option value="7">7+</option>
                        <option value="6">6+</option>
                        <option value="5">5+</option>
                        <option value="4">4+</option>
                        <option value="3">3+</option>
                        <option value="2">2+</option>
                    </select>
                </div>

                <div className="form-group">
                    <label> Budget</label>
                    <select className="custom-select mb-2" value={budget} onChange={(e)=>{
                        setBudget(e.target.value)
                    }} >
                        <option value="any" >Any</option>
                        <option value="20000">$20,000</option>
                        <option value="15000">$15,000</option>
                        <option value="10000">$10,000</option>
                        <option value="8000">$8,000</option>
                        <option value="6000">$6,000</option>
                        <option value="4000">$4,000</option>
                        <option value="2000">$2,000</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Find Bootcamps"
                    className="btn btn-primary btn-block"
                />
            </form>
        </div>
    );
};

export default FilterByRatingAndBudget;