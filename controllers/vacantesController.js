exports.nuevaVacante = (req, res) => {
    res.render('nueva-Vacante', {
        nombrePagina: 'Nueva Vacante',
        tagline: 'Llena el fourmulario y publica tu vacante',
    })
}