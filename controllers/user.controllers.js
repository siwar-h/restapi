
const User = require("../models/user.schema");


const usersCtrl ={
     getUser :  (req, res) => {
        User.find()
        .then(users => res.status(200).json('users'))
        .catch(()=>console.log('err',err))
     },  



    addUser : (req, res) => {
        const{firstname,  lastname, age, email} =req.body
         const newUser={firstname,  lastname, age, email}
         const usertoSave=new User(newUser)
         usertoSave.save()
         .then(()=>res.status(200).json('user saved'))
         .catch(()=>console.log('err',err))
     },
     updateUser : (req, res) => {
        const{firstname,  lastname, age, email} =req.body
        
        User.updateOne(
           {_id: req.params.id},
           {
              $set:{
                 firstname,
                 lastname, 
                 age,
                 email,
                 updateAt:new Date()
              }
         }     
        )
        .then(()=>res.status(200).json('user update successfully'))
        .catch(()=>console.log('err',err))
     
     
     },
     deleteUser :  (req, res) => {
        User.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json('User deleted successfully'))
        .catch(()=>console.log('err',err))
     }

}
module.exports = usersCtrl