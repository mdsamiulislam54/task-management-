//body random color set
document.getElementById("theme_btn").addEventListener("click", function () {
  document.body.style.backgroundColor = randomColorGenerate();
});

document
  .getElementById("blog_page")
  .addEventListener("click", blogpageNavigate);

// all ref
const totalTasksCompleted = document.getElementById("total_task_completed");
const totalAssigend_task = document.getElementById("assigend_task");
const completedBtn = document.querySelectorAll("#completed_btn");
const historyListContainer = document.getElementById("history_list_container");
const clearHistoryBtn = document.getElementById("clear_history");
const boxesContainer = document.getElementById("box_container");
const dateCalender = document.getElementById("date_calender");

console.log(completedBtn);

completedBtn.forEach((element) => {
  element.addEventListener("click", function (e) {
    buttonDisabled(element);
    const box = element.parentNode;
    const boxContainer = box.parentNode;

    let title = boxContainer.querySelector(".title").innerHTML;
    historyListContainerFunc(title, historyListContainer);
    totalAsassigendTaskList(totalAssigend_task);
    totalTasksCompletedList(totalTasksCompleted);

    if (parseInt(totalAssigend_task.innerText) === 0) {
        alert("All tasks completed!👍👍👍");
      }else{
          alert("Board updated successfully 👍");
      }
  
    
  });
});

//clear history
clearHistoryBtn.addEventListener("click", function () {
  alert("Clear History");
  clearHistoryFunc(historyListContainer);
});
calenderDate(dateCalender);
// event listeners
console.log(clearHistoryBtn);
