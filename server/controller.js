
const Cakes = require("./models.js")

module.exports ={
    allCakes: (req,res)=>Cakes.find({})
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),

    getCake: (req,res)=>Cakes.findById(req.params.id)
                                .then(data=>console.log(data)||res.json(data))
                                .catch(errs=>console.log(errs)||res.json(errs)),
                                                            
    makeCake: (req,res)=>Cakes.create(req.body)
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),

    makeComment: (req,res)=>Cakes.findById(req.params.id)
                                .then(data=>{
                                    console.log(data,"before")
                                    data.rating.push({
                                        comment: req.body.comment,
                                        rating: req.body.rating
                                    })
                                    console.log(data,"after")

                                    return data.save()
                                })
                                .then(updatedMAG=>res.json(updatedMSG))
                                .catch(errs=>res.json(errs)),

  
    
}