import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

const Add = ({setMovies, movies}) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[title,setTitle] = useState('')
    const[desc,setDesc] = useState('')
    const[poster,setPoster] = useState('')
    const[rating,setRating] = useState('')
    
    const add = (e) => {
        e.preventDefault()
        let newMovie = {
            title: title,
            description: desc,
            posterURL: poster,
            rating: rating
        }
        setMovies([...movies, newMovie])
        setTitle('')
        setDesc('')
        setPoster('')
        setRating('')
    }


    return (
        <div>
            <Button className='btn btn-dark addBtn' onClick={handleShow}>Add A Movie</Button>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header>
                    <Modal.Title>Add A Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" value={title}/>
                        <br />
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={(e) => setDesc(e.target.value)} type="text" value={desc}/>
                        <br />
                            <Form.Label>Poster</Form.Label>       
                            <Form.Control onChange={(e) => setPoster(e.target.value)} type="text" value={poster} />
                        <br />
                            <Form.Label>Rating</Form.Label>
                            <Form.Control onChange={(e) => setRating(e.target.value)} type="text" value={rating} />
                    </Form>
                    </Modal.Body>  
                    <Modal.Footer>
                        <Button variant="btn btn-dark" onClick={add}>Add</Button>
                        <Button variant="btn btn-dark" onClick={handleClose} >Close</Button>
                    </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Add
