let people = [];

fetch("https://randomuser.me/api/?results=5")
  .then((response) => response.json())
  .then((data) => {
    people.push(data.results);
  });

console.log(people);

const myElement = document.getElementById("people");

for (let i = 1; i < myElement.children.length; i++) {
  myElement.children[i].children[0].innerHTML = people[i - 1].name.first;
}
