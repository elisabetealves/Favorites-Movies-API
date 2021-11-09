const mongoose = require('mongoose');
const TitleSchema = require('../models/titulo');


const createTitle = async (req, res) => {
    const title = new TituloSchema({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero: req.body.genero,
        descricao: req.body.descricao,
        estudio: req.body.estudio
    })

    //Regra do titulo que já existe
    const existTitle = await TitleSchema.findOne({ nome: req.body.nome });
    if (existTitle) {
        return res.status(409).json({ error: "Title is already exists!" });
    }

    try {
        const newTitle = await title.save();
        res.status(201).json({
            message: "Title created successfully!",
            newTitle
        })
    } catch (err) {
        res.status(400).json({ message: error.message });
    }
}


const getById = async (req, res) => {
    try {
        const { id } = req.params
        const title = await TitleSchema.find(id)

        if (title == undefined || id == ' ') {
            return res.status(404).json({message: 'Invalid id!'});
        }
        res.status(200).json(title);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const getAllTitle = async (req, res) => {
    const title = await TitleSchema.find().populate('estudio');
    res.status(200).json(title);
}


const showTitleMarvel = async (req, res) => {
    const titles = await TitleSchema.find().populate('estudio');
    const titleFiltrated = titles.filter(title => title.estudio.nome == 'marvel');

    res.status(200).json(titleFiltrated)
}


const showTitleGhibli = async (req, res) => {
    const titles = await TitleSchema.find().populate('estudio');
    const titleFiltrated = titles.filter(title => title.estudio.nome == 'ghibli');

    res.status(200).json(titleFiltrated);
}


const showTitlePixar = async (req, res) => {
    const titles = await Title.find().populate('estudio');
    const titleFiltrated = titles.filter(title => title.estudio.nome == 'pixar');

    res.status(200).json(titleFiltrated);
}

//PUT
const updateTitle = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const update = { new: true }

        const title = await TitleSchema.findByIdAndUpdate(id, body, update);
        return res.status(200).send(title)
    } catch (error) {
        return res.status(404).send({ message: 'Title cannot be found!' });
    }
}

// PATCH atualiza qualquer parte da entidade
const updateTitleSomething = async (req, res) => {

    const title = await TitleSchema.findById(req.params.id)
    const body = req.body

    if (title == null) res.status(404).json({ message: 'Title cannot be found!' })

    Object.keys(body).forEach(key => {
        title[key] = body[key]
    })

    try {
        const titleUpdated = await title.save()
        res.status(200).json({
            message: 'Title successfully updated!',
            titleUpdated
        })

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const deleteTitle = async (req, res) => {
    const title = await TitleSchema.findById(req.params.id);

    if (title == "" || title == null) {
        return res.status(404).json({ message: 'Title cannot be found!' });
    }

    try {
        await title.remove()
        res.status(200).json({ message: 'Title deleted successfully!' });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const like = async (req, res) => {
    try {
        const { id } = req.params
        title = await TitleSchema.findById(id)

        title.likes += 1

        await TitleSchema.updateOne(title)
        return res.status(200).send(title)
    } catch (error) {
        return res.status(404).send({ message: 'Title cannot be found' })
    }
}


const dislike = async (req, res) => {
    try {
        const { id } = req.params
        title = await TitleSchema.findById(id)

        title.likes -= 1

        await TitleSchema.updateOne(title)
        return res.status(200).send(title)
    } catch (error) {
        return res.status(404).send({ message: 'Title cannot be found' })
    }
}

module.exports = {
    createTitle,
    getAllTitle,
    getById,
    showTitleMarvel,
    showTitleGhibli,
    showTitlePixar,
    updateTitle,
    updateTitleSomething,
    deleteTitle,
    like,
    dislike
}