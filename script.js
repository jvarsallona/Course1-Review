let animals = document.querySelectorAll(".animal")

let dogVotesCell = document.querySelector("#doggo-votes");

dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = "Vote for Doggo"

dogVoteBtn.addEventListener('click', function(e) {
    let dogVotesCount = parseInt(dogVotesCell.textContent);
    dogVotesCount = dogVotesCount + 1;
    dogVotesCell.textContent = dogVotesCount;
});

animals[0].append(dogVoteBtn)

let catVotesCell = document.querySelector("#catto-votes")

catVoteBtn = document.createElement("button")
catVoteBtn.textContent = "Vote for Catto"

catVoteBtn.addEventListener('click', function(e) {
    let catVotesCount = parseInt(catVotesCell.textContent);
    catVotesCount = catVotesCount + 1;
    catVotesCell.textContent = catVotesCount;
});

animals[1].append(catVoteBtn)

let FishGoldVotesCell = document.querySelector("#fish-votes")

FishGoldVoteBtn = document.createElement("button")
FishGoldVoteBtn.textContent = "Vote for Fish Gold"

FishGoldVoteBtn.addEventListener('click', function(e) {
    let FishGoldVotesCount = parseInt(FishGoldVotesCell.textContent);
    FishGoldVotesCount = FishGoldVotesCount + 1;
    FishGoldVotesCell.textContent = FishGoldVotesCount;
});

animals[2].append(FishGoldVoteBtn)


