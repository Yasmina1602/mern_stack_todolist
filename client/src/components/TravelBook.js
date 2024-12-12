
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TravelBook = () => {
  const [travelBook, setTravelBook] = useState([]);
  const [id, setId] = useState('')

  const fetchData = async () => {
      const { data } = await axios.get('http://localhost:5000/api/travel');
      setTravelBook(data.travels);
  }

  const deleteHandler = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:5000/api/travel/${id}`)
    fetchData()
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      { travelBook.map(tb => (
        <div key={tb._id} className="card mt-3 bg-dark border border-start-0 border-primary border-1 text-info fs-5 fw-medium">
          <img src={tb.img} className="card-img-top" alt={tb.title} />
          <div className="card-body">
              <p className="card-title">{tb.title}</p>
              <p className="card-text">{tb.description}</p>
              <div className='d-flex justify-content-end'>
                <Link className='btn btn-outline-success' to={`/update/${tb._id}`}>Update</Link>
                <form onSubmit={ deleteHandler }>
                  <button 
                    type='submit' 
                    className='btn btn-outline-danger mx-2'
                    onClick={() => setId(tb._id)} >Delete</button>
                </form>
              </div>  
          </div>
        </div>
      ))}
    </div>
  )
}

export default TravelBook