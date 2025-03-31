let jidlovyTyp = 'debata';
let questionArray;
let indexOfQuestions = 0;
writeQuestionArray(jidlovyTyp, indexOfQuestions);
console.log(document.querySelector('.selection').value)

document.querySelector('option[value=true]').style.backgroundColor = 'red';

document.querySelector('.js-next-button').addEventListener('click', ()=>{
  indexOfQuestions++
  writeQuestions(questionArray, indexOfQuestions)
})

document.querySelector('.js-debata-button').addEventListener('click', ()=>{
	jidlovyTyp = 'debata';
	console.log(jidlovyTyp);
  writeQuestionArray(jidlovyTyp, indexOfQuestions);
});

document.querySelector('.js-inkvizice-button').addEventListener('click', ()=>{
	jidlovyTyp = 'inkvizice';
	console.log(jidlovyTyp);
  writeQuestionArray(jidlovyTyp, indexOfQuestions);
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

function writeQuestionArray(){
  indexOfQuestions = 0;
	if(jidlovyTyp === 'debata'){
    questionArray = [/*html*/`
      <p class="question">
        Doplň:
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
        <button class="js-vyhodnotit-button">
          Vyhodnotit
        </button>
        <button class="js-nevim-button">
          Nevím
        </button>
      </div>`, 0]
    console.log()
    writeQuestions(questionArray, indexOfQuestions);
  }else if(jidlovyTyp === 'inkvizice'){
    questionArray = [/*html*/`
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
      </div>`, 1]
    console.log()
    writeQuestions(questionArray, indexOfQuestions);
  }else if(jidlovyTyp ==='zpivanky'){
    questionArray = [/*html*/`
      <p class="question">
        Doplň:
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
    console.log()
    writeQuestions(questionArray, indexOfQuestions);
  }else if(jidlovyTyp === 'hon na srnecky 2'){
    questionArray = [/*html*/`
      <p class="question">
        Doplň:
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
    console.log()
    writeQuestions(questionArray, indexOfQuestions);
  }else if(jidlovyTyp === 'jidelni expres'){
    questionArray = [/*html*/`
      <p class="question">
        Doplň:
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
    console.log()
    writeQuestions(questionArray, indexOfQuestions);
  }else if(jidlovyTyp === 'stejkova reakce'){
    questionArray = [/*html*/`
      <p class="question">
        Doplň:
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
    console.log()
    writeQuestions(questionArray, indexOfQuestions);
  }else if(jidlovyTyp === 'tyx'){
    questionArray = [/*html*/`
      <p class="question">
        Doplň:
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
    console.log()
    writeQuestions(questionArray, indexOfQuestions);
  }else if(jidlovyTyp === 'recept'){
    questionArray = [/*html*/`
      <p class="question">
        Doplň:
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
    console.log()
    writeQuestions(questionArray, indexOfQuestions);
  }
};

function writeQuestions(){
  document.querySelector('.quiz-box').innerHTML = questionArray[indexOfQuestions];
};