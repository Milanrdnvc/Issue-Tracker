const tabBtns = Array.from(document.querySelectorAll('.btn--tab'));
const addBtn = document.querySelector('.btn--add');
const addIssueTab = document.querySelector('.add-issue');
const currentIssuesTab = document.querySelector('.current-issues');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (tabBtns.indexOf(e.target) === 0) {
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
  });
});
