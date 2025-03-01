function randomColorGenerate() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  return color;
}

function blogpageNavigate() {
  window.location.href = "blog.html";
}
function homepageNavigate() {
  window.location.href = "index.html";
}

function buttonDisabled(button) {
  button.disabled = true;
  button.classList.remove("bg-acent", "cursor-pointer");

  button.classList.add('disabled_color');
}

function historyListContainerFunc(title, container) {
  const date = new Date().toLocaleTimeString();
  let list = document.createElement("li");

  list.innerText = `You have completed the task ${title} at ${date}`;

  list.classList.add('history_list');

  container.appendChild(list);
}
function totalTasksCompletedList(element) {
  element.innerText = parseInt(element.innerText) + 1;
}
function totalAsassigendTaskList(element) {
  element.innerText = parseInt(element.innerText) - 1;
}
function clearHistoryFunc(container) {
  container.innerText = "";

  // container.removeChild(container.lastChild);
}

function calenderDate(element) {
  const date = new Date();
  newDate = date.toDateString();
  console.log(newDate);
  element.innerText = `${newDate}`;
}
