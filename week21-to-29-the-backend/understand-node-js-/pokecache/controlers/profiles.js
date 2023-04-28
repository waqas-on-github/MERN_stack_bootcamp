function index (req, res ) {
    res.render('profiles/index')
}

function show (req, res) {
    res.render('profiles/show', {
        id: req.params.id
    })

}

export {
    index,
    show
}