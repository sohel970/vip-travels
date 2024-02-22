const seats = document.querySelectorAll("#seat");
// let count=0
// let dublicatecheak= []
 for (const seat of seats){
    
    seat.addEventListener("click",function (event){
        const ticketName=event.target.parentNode.childNodes[1].innerText
    });
 }