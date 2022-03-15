let people = [];

fetch("https://randomuser.me/api/?results=5")
  .then((response) => response.json())
  .then((data) => {
    people.push(...data.results);
    const myElement = document.getElementById("people");

    for (let i = 1; i < myElement.children.length; i++) {
      myElement.children[i].children[0].innerHTML =
        people[i - 1].name.first + " " + people[i - 1].name.last;
      myElement.children[i].children[1].src = people[i - 1].picture.large;
    }
  });
