
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
    correct: 2,
    selected: null,
    text: 'Troubleshooting problems such as... Equipment not working or dispensing, water line broke and is flooding store. Coke or any other flavor is not dispensing, or no water is dispensing.'
  },
  {
    correct: 1,
    selected: null,
    text: 'Customer received part(s) and needs tech to return to install it or finish job.'
  },
  {
    correct: 1,
    selected: null,
    text: 'Customer wants to know how many credits they have left. (MCDS earns labor credits for how much bulk syrup they sell, per year)'
  },
  {
    correct: 1,
    selected: null,
    text: 'Flavor Changes/Conversions requests '
  },
  {
    correct: 2,
    selected: null,
    text: 'Customer needs a water button or water option added to their fountain dispensers. '
  },
  {
    correct: 2,
    selected: null,
    text: 'Customer request service on a specific day. '
  },
  {
    correct: 1,
    selected: null,
    text: 'Customer needs to replace their equipment, not parts. '
  },
  {
    correct: 1,
    selected: null,
    text: 'Customer needs to replace their equipment, not parts. '
  },
  {
    correct: 1,
    selected: null,
    text: 'Customer wants to know if they are on auto-ship for filters.    '
  },
  {
    correct: 1,
    selected: null,
    text: 'Customer wants to know if they are on auto-ship for filters.    '
  },
  
];

function computeResults() {
  let scoreCorrect = 0;
  console.log(questions);
  questions.forEach(el=>{
    if(el.correct == el.selected){
      scoreCorrect++;
    }
  });
  console.log(scoreCorrect);
  let total = (scoreCorrect/questions.length)*100;
  document.getElementById('score').innerHTML = `${total}%`;
}

function clickCorrect(event){
  console.log('clickCorrect', event);
  event.target.classList.add('grgrg');
}

function clickWrong(event){
  console.log('clickWrong');
}


window.addEventListener('load', (event) => {
  let listQuestions = document.getElementById('list');
  console.log('doc loaded');
  questions.forEach((el, index) => {
    let styleClass = IamEven(index) ? 'card1' : 'card2'
    listQuestions.innerHTML += ` <div class="card1">
                                    <div class="image_group">
                                      <div  class="image_item" >
                                        <img class="correct" id="c_${index}" src="../McDs_Quiz/img/McDs_Group.png">
                                      </div>
                                      <div  class="image_item" >
                                        <img class="wrong" id="w_${index}" src="../McDs_Quiz/img/McDs_No_Group.png">
                                      </div>
                                    </div>
                                    <div class="question-area">
                                      <p class="question"> ${el.text}</p>
                                    </div>
                                  </div>`;
  });

let listCorrect  = document.getElementsByClassName('correct');
let listWrong = document.getElementsByClassName('wrong');

for(let i = 0; i< listCorrect.length; i++){
  console.log(listCorrect[i]);
  listCorrect[i].addEventListener('click',(event)=>{
    let index = event.target.id.substring(2);
//console.log(index);
    event.target.classList.add('selected_img');
    listWrong[index].classList.remove('selected_img');
//console.log(event.target);

    questions[index].selected = 1;
  });
}


for(let i = 0; i< listWrong.length; i++){
  console.log(listWrong[i]);
  listWrong[i].addEventListener('click',(event)=>{
    let index = event.target.id.substring(2);
    //.log(index);
    event.target.classList.add('selected_img');
    listCorrect[index].classList.remove('selected_img');
    //console.log(event.target);

    questions[index].selected = 2;
  });


}




});







