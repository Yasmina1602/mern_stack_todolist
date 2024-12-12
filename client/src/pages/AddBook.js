import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddBook = () => {
   const [ title, setTitle ] = useState('') 
   const [ description, setDescr ] = useState('') 
   const [ img, setImg ] = useState('') 
   
   const navigate = useNavigate()

   const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5000/api/travel/add", {
        title,
        description,
        img
    })
    navigate('/')
   }

  return (
    <div className='container bg-dark text-primary fw-medium' style={{ height: '0px' }}>
    <form onSubmit={ handleSubmit }>
        <div className="mb-2 pt-4">
            <label htmlFor="title" className="form-label">Title</label>
            <input 
                type="text" 
                className="form-control" 
                id="title" 
                name='title'
                onChange={e => setTitle(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="descr" className="form-label">Description</label>
            <input 
                type="text" 
                className="form-control" 
                id="descr" 
                name='descr'
                onChange={e => setDescr(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="img" className="form-label">Image</label>
            <input 
                type="text" 
                className="form-control" 
                id="img" 
                name="img"
                onChange={e => setImg(e.target.value)}
            />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
    </form>
    </div>
  )
}

export default AddBook