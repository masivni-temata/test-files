let jidlovyTyp = 'debata';
writeQuestionArray();

document.querySelector('.js-debata-button').addEventListener('click', ()=>{
	jidlovyTyp = 'debata';
	console.log(jidlovyTyp);
});

document.querySelector('.js-inkvizice-button').addEventListener('click', ()=>{
	jidlovyTyp = 'inkvizice';
	console.log(jidlovyTyp);
});

document.querySelector('.js-zpivanky-button').addEventListener('click', ()=>{
	jidlovyTyp = 'zpivanky';
	console.log(jidlovyTyp);
});

document.querySelector('.js-hon-na-srnecky-2-button').addEventListener('click', ()=>{
	jidlovyTyp = 'hon na srnecky 2';
	console.log(jidlovyTyp);
});

document.querySelector('.js-jidelni-expres-button').addEventListener('click', ()=>{
	jidlovyTyp = 'jidelni expres';
	console.log(jidlovyTyp);
});

document.querySelector('.js-stejkova-reakce-button').addEventListener('click', ()=>{
	jidlovyTyp = 'stejkova reakce';
	console.log(jidlovyTyp);
});

document.querySelector('.js-tyx-button').addEventListener('click', ()=>{
	jidlovyTyp = 'tyx';
	console.log(jidlovyTyp);
});

document.querySelector('.js-recept-button').addEventListener('click', ()=>{
	jidlovyTyp = 'recept';
	console.log(jidlovyTyp);
});

let questionArray;

function writeQuestionArray(jidlovyTyp){
	if(jidlovyTyp === 'debata'){
    [`<div class="quiz-box">
      <p class="question">
        Dolň:
      </p>
      <img class="question-img" src="images/debata1.jpg">
      <div class="answer">
      <!--
        <button class="answer-button">
          dobrá
        </button>
      -->
        <div class="doplnovacka">
          A vy pane srnečku jste
          <select class="selection">
            <option value="false">...</option>
            <option value="false">Brnem</option>
            <option value="true">Prahou</option>
          </select>
          démon.
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button>
          Vyhodnotit
        </button>
        <button>
          Nevím
        </button>
      </div>`]
  }
};