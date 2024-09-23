// toggle button 
function displayDiv (sectionId) {
    cardSection.style.display = 'none'
    historySection.style.display = 'none'

    sectionId.style.display = 'block'
}


// for input value 
function getValue (id){
    let idValue = document.getElementById(id).value ;
    let idValueFloat = parseFloat(idValue) ;
    document.getElementById(id).value = ''
    return idValueFloat ;
}

// for inner text 
function getInnerText(id){
    let text = id.innerText ;
    let textFloat = parseFloat(text) ;
    return textFloat ;
}


// for history append 
function addInHistory (amount,heading) {
    let header = document.getElementById(heading).innerText
let historySection = document.getElementById('historySection') ;
let newDiv = document.createElement('div') ;
newDiv.innerHTML = `<div class="border rounded-2xl p-8 flex gap-5 flex-col mt-10">
    <h1 class="font-bold text-2xl">${amount} Taka is Donated for ${header}</h1>
    <p  class="text-lg font-light text-gray-500"  >Date : ${Date()}</p>
</div>`
historySection.appendChild(newDiv) ;
}















