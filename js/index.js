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
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}
const lists = document.querySelectorAll("ul");
console.log(lists);

const listsArray = Array.from(lists);
console.log(listsArray);

//leave message function and callback
const messageForm = document.querySelector("form[name='leave_message']");
console.log({ messageForm });
messageForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<div>
            <a href="mailto:${usersEmail}">${usersName}</a><span>:${usersMessage}</span>;
       </div>`;
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  console.log("User Name", usersName);
  console.log("Email", usersEmail);
  console.log("Message", usersMessage);
  event.target.reset();
}
const projectSection = document.getElementById("projects");
console.log(projectSection);

const projectList = projectSection.querySelector("ul");
console.log(projectList);


fetch("https://api.github.com/users/Heather813903/repos").then((response) => {
  return response.json();
})
.then((repositories) => {
console.log(repositories);
for (let i = 0; i < repositories.length; i++) {
  const project = repositories[i].name;
  const li = document.createElement("li");
  li.innerText = project;
  projectList.appendChild(li)

}
})
.catch((error) => {
console.log(error);
});



