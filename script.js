let people = [];

people.push(fetch("https://randomuser.me/api/"));

console.log(people);

async function getPeople() {
  let url = async function getUsers() {
    let url = "https://randomuser.me/api/";
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let section = document.querySelector("#people");
  console.log(section);
}

renderUsers();
