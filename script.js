// console.log("Hello world");
// const block = document.createElement("div");
// block.textContent = "Hello from";
// document.body.append(block);

// const drop = document.querySelector(".drop");
// console.log(drop.textContent);
// drop.textContent = "Text changed";

// const head = document.createElement("h2");
// head.textContent = "h2 appear";
// drop.append(head);

// const section = document.createElement("div");
// section.classList.add("sec");

// const droop = document.createElement("div");
// section.append(droop);
// droop.textContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque  iste omnis.";
// droop.classList.add("drop");
// droop.classList.add("box");
// document.body.append(section);

// const circle = document.createElement("div");
// section.append(circle);
// circle.textContent = "<h1>dadadad</h1>";
// circle.classList.add("circle");
// circle.classList.add("box");
// document.body.append(section);

// const leaf = document.createElement("div");
// section.append(leaf);
// leaf.textContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque  iste omnis.";
// leaf.classList.add("leaf");
// leaf.classList.add("box");
// document.body.append(section);

function createBlock() {
  const container = document.querySelector(".con");
  const div = document.createElement("div");
  div.classList.add("block");
  div.style.backgroundColor = "#" + Math.ceil(Math.pow(16, 6).toString(16) * Math.random;
  container.append(div);
}
const button = document.querySelector(".button");
button.addEventListener("click", createBlock);
