
const { Router } = require('express')
const router = Router()
const Travel = require('../models/travel_mod')

router.get('/', async (req, res) => {
    try {
        const travels = await Travel.find()

        return res.status(200).json({
            message: 'success',
            travels: travels.reverse()
        })
    } catch (error) {
        res.send(`Travel getAll Routerda xatolik ${error}`)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const travel = await Travel.findById(req.params.id)
        
        if(!travel){
            return res.status(404).json({
                message: 'not found',
                travel
            })
        }

        return res.status(200).json({
            message: 'success',
            travel
        })
    } catch (error) {
        res.send(`Travel getByID Routerda xatolik ${error}`)   
    }
})

router.post('/add', async (req, res) => {
    try {
        const { title, img, description } = req.body
        const newTravel = await Travel.create({
            title,
            img, 
            description
        })

        return res.status(201).json({
            message: 'success',
            newTravel
        })
    } catch (error) {
        res.send(`Travel post Routerda xatolik ${error}`)   
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { title, img, description } = req.body

        const updateTravel = await Travel.findByIdAndUpdate(req.params.id, {
            title,
            img,
            description
        })

        return res.status(200).json({
            message: "success",
            updateTravel
        })
    } catch (error) {
        res.send(`Travel put Routerda xatolik ${error}`)   
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteTravel = await Travel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message: 'deleted',
            deleteTravel
        })
    } catch (error) {
        res.send(`Travel delete Routerda xatolik ${error}`)   
    }
})

module.exports = router