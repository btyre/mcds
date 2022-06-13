
console.log('im main.js');


//DOM Manipulation
//DOM events
//JS functions
//JS functions expression
//JS arrow function
//JS anonymous function
//JS Objects, e.g {}
//JS arrays
//JS variables
//w3school javascript



/*
<div class="card1">

<label class="images">
  <input type="radio" name="test" value="small" checked>
  <img src="../McDs_Quiz/img/McDs_Group.png">
</label>
<label class="images">
  <input type="radio" name="test" value="big" checked>
  <img src="../McDs_Quiz/img/McDs_No_Group.png">
</label>

<div class="question-area">
  <p class="question"> Customer needs ETA or Status of Service call (this should be escalated
    to the dispatcher or the SP Services Mgr FSS.</p>
</div>
</div>
*/
function IamEven(n) {
  return n % 2 == 0;
}



let questions = [
  {
    correct: 1,
    selected: null,
    text: 'Equipment Installations (customer needs equipment installed in a NEW store or Existing store)'
  },
  {
    correct: 1,
    selected: null,
    text: 'Needing Service (water leaking, no syrup dispensing, drinks are flat/warm, ABS not working, OJ not working etc)'
  },
  {
    correct: 1,
    selected: null,
    text: 'Customer needs ETA or Status of Service call (this should be escalated to the dispatcher or the SP Services Mgr FSS.'
  },
  {
    correct: 1,
    selected: null,
    text: 'Customer needs ETA or Status of Service call (this should be escalated to the dispatcher or the SP Services Mgr FSS.'
  },
  {
    correct: 1,
    selected: null,
    text: 'Customer needs ETA or Status of Service call (this should be escalated to the dispatcher or the SP Services Mgr FSS.'
  }
];

function computeResults() {

}


window.addEventListener('load', (event) => {
  let listQuestions = document.getElementById('list');
  console.log('doc loaded');
  questions.forEach((el, index) => {
    let styleClass = IamEven(index) ? 'card1' : 'card2'
    listQuestions.innerHTML += `<div id="${index}" class="${styleClass}">
                              <label class="images">
                                <input type="radio" name="test" value="small" checked>
                                <img src="../McDs_Quiz/img/McDs_Group.png">
                              </label>
                              <label class="images">
                                <input type="radio" name="test" value="big" checked>
                                <img src="../McDs_Quiz/img/McDs_No_Group.png">
                              </label>
                              <div class="question-area">
                                <p class="question">${el.text}</p>
                              </div>
                             </div>`;
  });

});
