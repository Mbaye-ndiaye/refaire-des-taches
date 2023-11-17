
const ajouter = document.getElementById('ajoute');
const modifie = document.getElementById('modifie');
const tbody = document.getElementById('tbody');
 let modifier;
function ajoutForm() {
    ajouter.addEventListener('click', function(e) {
        e.preventDefault()
    var nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const mail = document.getElementById('mail').value;
    const phone = document.getElementById('phone').value;

        if(nom == ''){
            alert('Remplir ce champs');
            return false
        }
        if (prenom == '') {
            alert('Remplir ce champs');
            return false    
        }
        if(!mail.includes('@')){
            alert('Ce champs doit avoir @');
            return false
        }
        if (phone == '') {
            alert('Remplir ce champs');
             return false  
        }
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${nom}</td>
    <td >${prenom}</td>
    <td >${mail}</td>
    <td >${phone}</td>
    <td >
        <button class="btn btn-primary bouton me-1 my-1 supprimer text-white text-center">
            Supprimer
        </button>
        <button  
            class="btn btn-primary bouton modifier me-1 my-1 text-white text-center">
            Modifier
        </button>
    </td>`
    tbody.appendChild(tr) 

    document.querySelector('form').reset();
})
}
ajoutForm();

/**************************************************************** */
// const loader = document.querySelector('.loader');
// window.addEventListener('load', () => {
//     loader.classList.add('fondu-out')
// })


gsap.fromTo(
    ".loader",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );

  gsap.fromTo(
    ".container",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );

console.log(gsap);



























// let nombreAssocie = associe.length
// console.log(nombreAssocie);
// const countElement = document.querySelector('.num3');
// console.log(countElement);

//  let interval = 5000;
//   console.log(countElement);
//   let startValue = 0;
//    countElement.setAttribute("data-val", `${nombreAssocie}`);
//   let endValue = parseFloat(countElement.getAttribute("data-val"))
//   console.log(endValue);
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 1;
//     countElement.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
      
//     }
//   }, duration)














