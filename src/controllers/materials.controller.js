// const materials = require( '../db/data/materials.json' );
const mongoose = require( 'mongoose' );
const material = mongoose.model( 'Material' );

const getMaterials = async ( req, res ) => {
    try {
        const materials = await material.find();
        res.json({
            success: true,
            data: materials
        });
    } catch( error ) {
        res.status( 500 ).json({
            success: false,
            message: error.message
        });
    }
};

const postMaterial = async ( req, res ) => {
    const data = req.body;

    try {
        const addedMaterial = await material.create( data );
        res.status(201).json({
            success: true,
            // data: data
            data: addedMaterial
        });
    } catch( error ) {
        // error.name is used to know what kind of error occured
        // ideally status code should be 400 for BAD request (incorrect format of data etc.)
        res.status( 500 ).json({
            success: false,
            message: error.message
        });
    }
};

const patchMaterial = async ( req, res ) => {
    const data = req.body;
    const id = req.params.id;

    try {
        const updatedMaterial = await material.findByIdAndUpdate( id, data, {
            new: true, // return the new document, and not the old one
            runValidators: true // do validations on update
        } )
        res.json({
            success: true,
            // data: data
            data: updatedMaterial
        });
    } catch( error ) {
        // error.name is used to know what kind of error occured
        // ideally status code should be 400 for BAD request (incorrect format of data etc.)
        res.status( 500 ).json({
            success: false,
            message: error.message
        });
    }
};
const deleteMaterial = async (req, res) => {
    // delete a document - material.findByIdAndDelete
    // https://mongoosejs.com/docs/api/model.html#model_Model-findOneAndDelete
   
    const id = req.params.id;

    try {
        const deletedMaterial = await material.findByIdAndDelete(id);
        if(deleteMaterial){
        res.json({
            success: true,
            data: deletedMaterial
        });
    }else {
        res.status(404).json({
            success: false,
            message: 'Material not found'
        });
    }
    }
     catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
 
};

module.exports = {
    getMaterials,
    postMaterial,
    patchMaterial,
    deleteMaterial
};