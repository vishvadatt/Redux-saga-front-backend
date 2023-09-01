const db = require('../index');
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const userColl = db.collection("user");
const {ObjectId} = require('mongodb');

const getAllUsers = async (req,res,next) => {
    try {
        const result = await query.find(userColl);
        result.map((el) => {
            delete el['password']
        })

        // const bool = await query.find(userColl,{free:{$exists:false}});
        const obj = resPattern.successPattern(httpStatus.OK,{result},`success`);
          return res.status(obj.code).json({
            ...obj,
          });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const fineOneUser = async (req,res,next) => {
    try {
        const id = ObjectId(req.params.id);
        const result = await query.findOne(userColl,{ _id : id});
        const obj = resPattern.successPattern(httpStatus.OK,result,`success`);
          return res.status(obj.code).json({
            ...obj,
          });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const updateUser = async (req,res,next) => {
    try {
        const id = ObjectId(req.params.id);
        const bodyData = req.body;
        const result = await query.findOneAndUpdate(userColl,
            {_id : id},
            {$set : bodyData},
            {returnOriginal : false}    
        );
        delete result.value["password"];
        const obj = resPattern.successPattern(httpStatus.OK,result.value,`success`);
          return res.status(obj.code).json({
            ...obj,
          });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const deleteUser = async (req,res,next) => {
    try {
        const id = ObjectId(req.params.id);
        const result = await query.deleteOne(userColl,{ _id : id});
        const obj = resPattern.successPattern(httpStatus.OK,{message : "Delete user successfully...!"},`success`);
          return res.status(obj.code).json({
            ...obj,
          });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

module.exports = {
    getAllUsers,
    updateUser,
    deleteUser,
    fineOneUser
}