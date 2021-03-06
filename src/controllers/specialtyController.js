import specialtyService from '../services/specialtyService';

let createNewSpecialty = async (req, res) => {
    try {
        let infor = await specialtyService.createNewSpecialty(req.body);
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server !'
        })
    }
}

let getAllSpecialty = async (req, res) => {
    try {
        let infor = await specialtyService.getAllSpecialty();
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server !'
        })
    }
}

let getDetailSpecialtyById = async (req, res) => {
    try {
        let infor = await specialtyService.getDetailSpecialtyById(req.query.id, req.query.location);
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server !'
        })
    }
}

let handleEditSpecialty = async (req, res) => {
    let message = await specialtyService.updateSpecialtyData(req.body);
    return res.status(200).json(message)
}
let handleDeleteSpecialty = async (req, res) => {
    if(!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters !!!'
        })
    }
    let message = await specialtyService.deleteSpecialty(req.body.id);
    return res.status(200).json(message); 
}



module.exports = {
    createNewSpecialty: createNewSpecialty,
    getAllSpecialty: getAllSpecialty,
    getDetailSpecialtyById: getDetailSpecialtyById,
    handleDeleteSpecialty: handleDeleteSpecialty,
    handleEditSpecialty: handleEditSpecialty,
}