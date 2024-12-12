import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateBook = () => {
    const [title, setTitle] = useState('')
    const [description, setDescr] = useState('')
    const [img, setImg] = useState('')

    const {id} = useParams()
    const navigate = useNavigate()

    const fetchData = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/travel/${id}`)
        setTitle(data.travel.title)
        setDescr(data.travel.description)
        setImg(data.travel.img)
    }

    const updateHandler = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/api/travel/${id}`, {
            title,
            description,
            img
        })
        navigate('/')
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <form onSubmit={ updateHandler }>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    name='title'
                    onChange={e => setTitle(e.target.value)}
                    value={title}
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
                    value={description}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="img" className="form-label">Image</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="img" 
                    name='img'
                    onChange={e => setImg(e.target.value)}
                    value={img}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default UpdateBook