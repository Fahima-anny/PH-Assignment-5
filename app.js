// console.log(Date())
let historyBtn = document.getElementById("historyBtn") ;
let donationBtn = document.getElementById("donationBtn") ;

historyBtn.addEventListener("click",function(){
    displayDiv('historySection') ;

    historyBtn.classList.add('bg-[#B4F461]','hover:bg-[#b4f461c4]')
    historyBtn.classList.remove('hover:bg-[#f4f4f4c4]','text-gray-500','ring-2')
    donationBtn.classList.remove('bg-[#B4F461]','hover:bg-[#b4f461c4]')
    donationBtn.classList.add('text-gray-500','ring-2')

})

donationBtn.addEventListener("click",function(){
    displayDiv('cardSection') ;

    donationBtn.classList.add('bg-[#B4F461]','hover:bg-[#b4f461c4]')
    donationBtn.classList.remove('text-gray-500','ring-2')
    historyBtn.classList.remove('bg-[#B4F461]','hover:bg-[#b4f461c4]')
    historyBtn.classList.add('hover:bg-[#f4f4f4c4]','text-gray-500','ring-2')

})
