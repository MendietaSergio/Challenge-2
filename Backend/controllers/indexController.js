module.exports = {
    Home: (req,res) =>{
        res.render('index', {
            title: "Lista preguntas",
            
        })
    }
}