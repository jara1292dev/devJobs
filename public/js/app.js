document.addEventListener('DOMContentLoaded', ()=> {
    const skills = document.querySelector('.lista-conocimientos');
    if(skills){
        skills.addEventListener('click', agregarSkills);

        //una vez que estamos en ditar llamar función
        skillsSeleccionados();
    }
})
const skills = new Set();
const agregarSkills = e => {
    if(e.target.tagName === 'LI'){
        if(e.target.classList.contains('activo')){
            //Quitarlo del set y quitar la clase
            e.target.classList.remove('activo');
            skills.delete(e.target.textContent);
        }else{
            //Agregarlo al set y agregar la clase
            e.target.classList.add('activo');
            skills.add(e.target.textContent);
        }
        
    }
    //console.log(skills);
    const skillsArray = [...skills];
    document.querySelector('#skills').value = skillsArray;
}

const skillsSeleccionados = () => {
    const seleccionadas = Array.from(document.querySelectorAll('.lista-conocimientos .activo'));

    seleccionadas.forEach(seleccionada => {
        skills.add(seleccionada.textContent);
    })

    //inyectarlo en el hidden
    const skillsArray = [...skills];
    document.querySelector('#skills').value = skillsArray;
}