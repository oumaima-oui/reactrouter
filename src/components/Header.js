import React, {useState} from 'react'
import {Form} from 'react-bootstrap'




const Header = ({setTextSearch, setRateSearch}) => {   

    const handleChange = (e) => {
        setTextSearch(e.target.value)
    }

    return (
            <header>
                 <h1 className='title'>Movie mood</h1>
                <ul className="nav-link">
                    <li>Home</li>
                    <li>watched</li>
                    <li>watched list</li>
                </ul>
                <Form.Control onChange={handleChange} className="searchBar" type="text" placeholder="Search for movie" />
            </header>
    )

}

export default Header
