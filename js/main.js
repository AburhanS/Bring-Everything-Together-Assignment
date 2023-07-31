function greyBG(){
    document.querySelector(".mailBox").style.backgroundColor = "#ccc";
}
function whiteBG(){
    document.querySelector(".mailBox").style.backgroundColor = "#fff";
}

document.querySelector(".mailBox").addEventListener("mouseover", greyBG)
document.querySelector(".mailBox").addEventListener("mouseout", whiteBG)


const user1 = { firstName: "Lexa", lastName: "Janaka"}
const user2 = { firstName: "Bettina", lastName: "Derek"}
const user3 = { firstName: "Erica", lastName: "Lital"}
const user4 = { firstName: "Elmira", lastName: "Helle"}

for(key in user1) console.log(user1[key]);
for(key in user2) console.log(user2[key]);
for(key in user3) console.log(user3[key]);
for(key in user4) console.log(user4[key]);