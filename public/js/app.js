document.addEventListener('DOMContentLoaded', ()=> {
    const skills = document.querySelector('.lista-conocimientos');
    if(skills){
        skills.addEventListener('click', agregarSkills);
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