const tabBtns = Array.from(document.querySelectorAll('.btn--tab'));
const addBtn = document.querySelector('.btn--add');
const addIssueTab = document.querySelector('.add-issue');
const currentIssuesTab = document.querySelector('.current-issues');
const descInput = document.querySelector('.add-issue__input');
const assignToInput = document.querySelectorAll('.add-issue__input')[1];
const priorityInput = document.querySelectorAll('.add-issue__input')[2];

function switchTabs(e) {
  if (tabBtns.indexOf(e.target) === 0 || e === 'switchAfterCreation') {
    addIssueTab.classList.remove('active');
    currentIssuesTab.classList.add('active');
    tabBtns[0].classList.add('active');
    tabBtns[1].classList.remove('active');
  } else {
    currentIssuesTab.classList.remove('active');
    addIssueTab.classList.add('active');
    tabBtns[0].classList.remove('active');
    tabBtns[1].classList.add('active');
  }
}

function addIssue() {
  const forbiddenStrings = ['Assign Issue To...', 'Select priority...'];
  if (
    descInput.value !== '' &&
    assignToInput.value !== '' &&
    assignToInput.value !== forbiddenStrings[0] &&
    priorityInput !== '' &&
    priorityInput !== forbiddenStrings[1]
  ) {
    makeIssue(assignToInput.value, priorityInput.value, descInput.value);
    assignToInput.value = 'Assign Issue To...';
    priorityInput.value = 'Select priority...';
    descInput.value = '';
  }
}

function makeIssue(username, priority, desc) {
  const issueMarkup = `
    <div class="current-issues__info">
      <b>Assigned</b>: ${username}
      <span class="current-issues__close">Close Issue</span>
    </div>
    <div class="current-issues__info"><b>Priority</b>: ${priority}</div>
    <div class="current-issues__info">
      <b>Description:</b><br /><span class="current-issues__description">${desc}</span>
    </div>`;
  const currentIssue = document.createElement('div');
  currentIssue.classList.add('current-issues__issue');
  currentIssue.innerHTML = issueMarkup;
  currentIssue
    .querySelector('.current-issues__close')
    .addEventListener('click', closeIssue);
  currentIssuesTab.appendChild(currentIssue);
  switchTabs('switchAfterCreation');
}

function closeIssue(e) {
  e.target.parentElement.parentElement.remove();
}

tabBtns.forEach((btn) => {
  btn.addEventListener('click', switchTabs);
});

addBtn.addEventListener('click', addIssue);
