function index (req, res ) {
    res.render('pokemon/index')
}

function show (req, res) {
    res.render('pokemon/show', {
        id: req.params.id
    })

}

export {
    index,
    show
}