const express=require('express');
const router=express.Router();
const Joi= require('joi');

const movies=[
    {id:1 ,genre:"action"},
    {id:2 ,genre:"comedy"},
    {id:3 ,genre:"horror"}
];

router.get('/',(req,res)=>{
    res.send(movies);
});

router.post("/",(req,res)=>{

    const {error}=validateGenre(req.body);

    if(error)
        return res.status(400).send(error.details[0].message);

    const movie={
        id: movies.length+1,
        genre: req.body.genre
    };

    movies.push(movie);
    res.send(movie);

});

router.put("/:id",(req,res)=>{

    const movie=movies.find(m=>m.id === parseInt(req.params.id));

    if(!movie)
        return res.status(404).send("movie was not found.");

    const {error}=validateGenre(req.body);

    if(error)
        return res.status(400).send(error.details[0].message);

    movie.genre=req.body.genre;   

    res.send(movie);
});

router.delete("/:id",(req,res)=>{

    const movie=movies.find(m=>m.id === parseInt(req.params.id));

    if(!movie)
        return res.status(404).send("movie was not found.");

    const index=movies.indexOf(movie.id);

    movies.splice(index,1);
    res.send(movie);


});

function validateGenre(movie)
{
    const schema=Joi.object({
        genre:Joi.string().min(3).required()
    });

    return schema.validate(movie);

}

module.exports = router;