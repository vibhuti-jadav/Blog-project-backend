import httpError from "../middleware/errorHandling"
import blog from "../model/blogModel"


const addBlog = async(req,res,next)=>{

    try {
        
        const {headline , description , author , published , createdAt , updatedAt} = req.body

        const newData = {
            headline,
            description,
            author,
            published,
            createdAt,
            updatedAt
        }

        const savedata = blog(newData)

        await savedata.save()

        if(!savedata){
            return next(new httpError("blog can't addedd",400))
        }

        res.status(201).json({message:"blog detailed saved successfully",savedata})

    } catch (error) {
        next(new httpError(error.message))
    }
}


export default {addBlog}