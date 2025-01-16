//footer
const footer = document.createElement("footer");
const body = document.querySelector("body");
body.appendChild(footer);

//date
const today = new Date();
const thisYear = today.getFullYear();

//copyright
const copyright = document.createElement("p");
copyright.innerHTML = `© Heather Smith ${thisYear}`;

footer.appendChild(copyright);

//skills
const skills = ["Organization", "Conflict resolution", "Boxing", "Lounging"];
const skillsSection = document.getElementById ("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i=0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);

}
const lists = document.querySelectorAll("ul");
console.log(lists);

const listsArray = Array.from(lists);
console.log(listsArray);