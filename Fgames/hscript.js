const cardsContainer = document.querySelector(".container");

cardsContainer.addEventListener("click",(e)=>{
    const target = e.target.closest(".card");
    if(!target) return;

    cardsContainer.querySelectorAll(".card").forEach((card)=>{
        card.classList.remove("active");
    });

    target.classList.add("active");
});


const cards = document.querySelectorAll(".card");
cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        console.log(1);
    })
})

cards[0].addEventListener("click",()=>{
    console.log("1 is pressed");
})
console.log(cards)
