let historyBtn = document.getElementById("historyBtn") ;
let donationBtn = document.getElementById("donationBtn") ;
let totalAccountBalance = document.getElementById('totalAccountBalance') ;
let floodNoakhaliTotal = document.getElementById('floodNoakhaliTotal') ;
let floodFeniTotal = document.getElementById('floodFeniTotal') ;
let quotaTotal = document.getElementById('quotaTotal') ;

// history button 
historyBtn.addEventListener("click",function(){
    displayDiv(historySection) ;
    historyBtn.classList.add('bg-[#B4F461]','hover:bg-[#b4f461c4]')
    historyBtn.classList.remove('hover:bg-[#f4f4f4c4]','text-gray-500','ring-2','bg-white')
    donationBtn.classList.remove('bg-[#B4F461]','hover:bg-[#b4f461c4]')
    donationBtn.classList.add('text-gray-500','ring-2','bg-white')
})

// donate button 
donationBtn.addEventListener("click",function(){
    displayDiv(cardSection) ;
    donationBtn.classList.add('bg-[#B4F461]','hover:bg-[#b4f461c4]')
    donationBtn.classList.remove('text-gray-500','ring-2','bg-white')
    historyBtn.classList.remove('bg-[#B4F461]','hover:bg-[#b4f461c4]')
    historyBtn.classList.add('hover:bg-[#f4f4f4c4]','text-gray-500','ring-2','bg-white')
})


// flood noakhali part 
document.getElementById("floodNoakhaliBtn").addEventListener('click',function(){
let Amount = getValue('floodNoakhaliInput') ;
let prevAccountBalance = getInnerText(totalAccountBalance)
if(isNaN(Amount) || Amount<0){
    alert("Please give a valid input")
    return ;
}
if(Amount>prevAccountBalance){
    alert('Donation amount is much than your account balance') ;
    return ;
}
let floodBalance = getInnerText(floodNoakhaliTotal) ;
floodNoakhaliTotal.innerText = floodBalance + Amount ;
totalAccountBalance.innerText = prevAccountBalance - Amount ;
addInHistory(Amount,'noakhaliHeading') ;
document.getElementById('my_modal_1').showModal()
})


// flood feni part 
document.getElementById("floodFeniBtn").addEventListener('click',function(){
let Amount = getValue('floodFeniInput') ;
let prevAccountBalance = getInnerText(totalAccountBalance)
if(isNaN(Amount) || Amount<0){
    alert("Please give a valid input")
    return ;
}
if(Amount>prevAccountBalance){
    alert('Donation amount is much than your account balance') ;
    return ;
}
let floodBalance = getInnerText(floodFeniTotal) ;
floodFeniTotal.innerText = floodBalance + Amount ;
totalAccountBalance.innerText = prevAccountBalance - Amount ;
addInHistory(Amount,'feniHeading') ;
document.getElementById('my_modal_1').showModal()
})


// quota part 
document.getElementById("quotaBtn").addEventListener('click',function(){
let Amount = getValue('quotaInput') ;
let prevAccountBalance = getInnerText(totalAccountBalance)
if(isNaN(Amount) || Amount<0){
    alert("Please give a valid input")
    return ;
}
if(Amount>prevAccountBalance){
    alert('Donation amount is much than your account balance') ;
    return ;
}
let quotaBalance = getInnerText(quotaTotal) ;
quotaTotal.innerText = quotaBalance + Amount ;
totalAccountBalance.innerText = prevAccountBalance - Amount ;
addInHistory(Amount,'quotaHeading') ;
document.getElementById('my_modal_1').showModal()
})








