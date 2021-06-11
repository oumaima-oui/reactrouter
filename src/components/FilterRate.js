import React, {useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import '../App.css'

const FilterRate = ({setRateFilter}) => {
    
    const [value, setValue] = useState('')

    const onStarClick=(nextValue, prevValue, name)=> {
        setValue(nextValue)
        setRateFilter(nextValue)  
    }
    return (

        
        <div className='filterRate'>
            <StarRatingComponent className='stars'
                name="rate1"
                starCount={5}
                value={value}
                onStarClick={onStarClick}
            />
        </div>
    )
}

export default FilterRate
