const mongoose = require('mongoose');
const Vacante = mongoose.model('Vacante');

exports.nuevaVacante = (req, res) => {
    res.render('nueva-Vacante', {
        nombrePagina: 'Nueva Vacante',
        tagline: 'Llena el fourmulario y publica tu vacante',
    })
}

//agregar las vacantes a la BD
exports.guardarVacante = async (req, res) => {
   const vacante = new Vacante(req.body);

   //crear arreglo de skills
   vacante.skills = req.body.skills.split(',');

   //almacenarlo en BD
   const nuevaVacante = await vacante.save();

   //redireccionar
   res.redirect(`/vacante/${nuevaVacante.url}`);
}


//mostrar la vacante
exports.mostrarVacante = async (req, res, next) => {
    const vacante = await Vacante.findOne({ url: req.params.url });

    //si no hay resultados
    if(!vacante) return next();

    res.render('vacante', {
        vacante,
        nombrePagina: vacante.titulo,
        barra: true
    })


}