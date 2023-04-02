import userModel from "../models/user.js";

class homeController{
    
    static addData = async (req, res) => {
        try {
            const doc = new userModel({
                name: req.body.name,
                age: req.body.age,
                fees: req.body.fees 
            })

            const result = await doc.save();
            console.log(result);
            res.redirect('/');
        } catch (error) {
           console.log(error) 
        }
    }

    static home = async (req, res) =>{
        try {
            const data = await userModel.find();
            res.render('index', {result: data});
        } catch (error) {
            console.log(error)
        }
    }

    static editDoc = async (req, res) => {
        const result = req.params.id;
        const user = await userModel.findById(result)
        // console.log(result)
        // console.log(user)
        res.render('edit', {result:user})
    }

    static updateDoc = async(req, res) =>{
        const result = req.body;
        const user = req.params.id;
        const data = await userModel.findByIdAndUpdate(user, result);
        res.redirect('/');
    }

    static deleteDoc = async (req, res) =>{
       const user =  req.params.id
       await userModel.findByIdAndDelete(user);
       res.redirect('/');
    }
}

export default homeController