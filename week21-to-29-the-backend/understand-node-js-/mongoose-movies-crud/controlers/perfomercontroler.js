import { Perfomer } from '../model/perfomer.js';

function showPerfomer (req,res) {
    Perfomer.find({})

    .then((singelperfomer) => {
        console.log(singelperfomer);   
       res.render('perfomer' , {
        perfomer : singelperfomer
       })
    })
}





function addperfomer (req,res) {
    console.log(req.body);
   
    Perfomer.create(req.body)
    .then (() => {
        res.redirect('/perfomer/add')
    })
    .catch((err) => {
        console.log(err); 
        res.redirect('/perfomer/add')


    })
}



export{
    showPerfomer, 
    addperfomer
}
