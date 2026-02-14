// const obj = [
//   {
//     name: "Ivan",
//     gender: "Male",
//     age: 20,
//   },
//   {
//     name: "Polina",
//     gender: "Female",
//     age: 30,
//   },
//   {
//     name: "Nastia",
//     gender: "Female",
//     age: 10,
//   },
//   {
//     name: "Sergii",
//     gender: "Male",
//     age: 40,
//   },
// ];

// function createTD(value) {
//   const td = document.createElement("td");
//   td.textContent = value;
//   return td;
// }

// const table = document.createElement("table");

// obj.forEach(function (item) {
//   const tr = document.createElement("tr");
//   tr.append(createTD(item.name));
//   tr.append(createTD(item.gender));
//   tr.append(createTD(item.age));
//   table.append(tr);
// });

// // obj[0].append("gender: M");

// document.body.append(table);

const table = document.createElement("table");
function createTD(item) {
  const td = document.createElement("td");
  td.classList.add("maintable");
  td.textContent = item;
  return td;
}

// function createhead() {
//   const th = document.createElement("th");
//   th.textContent = Name;
//   th.textContent = Height;
//   th.textContent = Mass;
//   th.textContent = Hair_color;
//   th.textContent = Gender;
//   return th;
// }

function createTH(item) {
  const th = document.createElement("th");
  th.classList.add("head");
  th.textContent = item;
  return th;
}

function createHead(obj) {
  const th = document.createElement("tr");
  th.append(createTH("Name"));
  th.append(createTH("Height"));
  th.append(createTH("Mass"));
  th.append(createTH("Hair_color"));
  th.append(createTH("Gender"));
  return th;
}

function createRow(obj) {
  const tr = document.createElement("tr");
  tr.append(createTD(obj.name));
  tr.append(createTD(obj.height));
  tr.append(createTD(obj.mass));
  tr.append(createTD(obj.hair_color));
  tr.append(createTD(obj.gender));
  return tr;
}

async function request() {
  const data = await fetch("https://swapi.info/api/people");
  const people = await data.json();
  table.append(createHead());
  people.forEach(function (item) {
    table.append(createRow(item));
  });
  document.body.append(table);
}
request();
