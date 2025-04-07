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
  writeQuestionArray(jidlovyTyp, indexOfQuestions);
});

document.querySelector('.js-hon-na-srnecky-2-button').addEventListener('click', ()=>{
	jidlovyTyp = 'hon na srnecky 2';
	console.log(jidlovyTyp);
  writeQuestionArray(jidlovyTyp, indexOfQuestions);
});

document.querySelector('.js-jidelni-expres-button').addEventListener('click', ()=>{
	jidlovyTyp = 'jidelni expres';
	console.log(jidlovyTyp);
  writeQuestionArray(jidlovyTyp, indexOfQuestions);
});

document.querySelector('.js-stejkova-reakce-button').addEventListener('click', ()=>{
	jidlovyTyp = 'stejkova reakce';
	console.log(jidlovyTyp);
  writeQuestionArray(jidlovyTyp, indexOfQuestions);
});

document.querySelector('.js-tyx-button').addEventListener('click', ()=>{
	jidlovyTyp = 'tyx';
	console.log(jidlovyTyp);
  writeQuestionArray(jidlovyTyp, indexOfQuestions);
});

document.querySelector('.js-recept-button').addEventListener('click', ()=>{
	jidlovyTyp = 'recept';
	console.log(jidlovyTyp);
  writeQuestionArray(jidlovyTyp, indexOfQuestions);
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
        Na co reaguje youtuber stejk?
      </p>
      <img class="question-img" src="images/stejkova reakce/na co reagoval youtuber stejk.jpg">
      <div class="answer">
        <div class="doplnovacka">
          Youtuber Stejk reaguje na 
          <select class="selection">
            <option value="false">...</option>
            <option value="false">Fiziho</option>
            <option value="false">Bigeho</option>
            <option value="true">Kejdu</option>
          </select>
          .
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>`, `      <p class="question">
        Co mu slezlo z videa?
      </p>
      <img class="question-img" src="images/stejkova reakce/co mu slezlo z videa.jpg">
      <div class="answer">
        <div class="doplnovacka">
          Opadali mu 
          <select class="selection">
            <option value="false">...</option>
            <option value="false">Vousy</option>
            <option value="true">Vlasy</option>
            <option value="false">Chlupy</option>
          </select>
          .
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>`, `      <p class="question">
        Co dělala příšera kejda se svými kamarády?
      </p>
      <img class="question-img" src="images/stejkova reakce/co mu slezlo z videa.jpg">
      <div class="answer">
        <div class="doplnovacka">
          Kejda byla se svými kamarády 
          <select class="selection">
            <option value="false">...</option>
            <option value="false">na schůzce</option>
            <option value="true">v hospodě</option>
            <option value="false">v muzeu</option>
          </select>
          .
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>`]
    console.log()
    writeQuestions(questionArray, indexOfQuestions);
  }else if(jidlovyTyp === 'tyx'){
    questionArray = [/*html*/`
      <p class="question">
        Koho na to poslali?
      </p>
      <img class="question-img" src="images/tyx/koho na to poslali.jpg">
      <div class="answer">
        <div class="doplnovacka">
          Poslali na to
          <select class="selection">
            <option value="false">...</option>
            <option value="false">Azora</option>
            <option value="true">Tyxe</option>
            <option value="false">Kuchaře</option>
            <option value="false">Vymítače</option>
          </select>
          .
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>
    </div>`, `
          <p class="question">
        Kdo byl páníček?
      </p>
      <img class="question-img" src="images/tyx/kdo byl páníček.webp">
      <div class="answer">
        <div class="doplnovacka">
          Páníček byl
          <select class="selection">
            <option value="false">...</option>
            <option value="true">Kubi</option>
            <option value="false">Tomi</option>
            <option value="false">Víti</option>
            <option value="false">Růženka</option>
            <option value="false">Vymítač</option>
          </select>
          .
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>
    </div>`, `
          <p class="question">
        Na jakou příšeru byl Tyx poslán?
      </p>
      <img class="question-img" src="images/tyx/na jakou příšeru byl tyx poslán.jpg">
      <div class="answer">
        <div class="doplnovacka">
          Tyx byl poslán na
          <select class="selection">
            <option value="false">...</option>
            <option value="false">Lochneskou příšeru</option>
            <option value="false">Čerta</option>
            <option value="false">King konga</option>
            <option value="true">Kejdu</option>
          </select>
          .
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>
    </div>`, `
    <p class="question">
        Kdo byl autorem?
      </p>
      <img class="question-img" src="images/tyx/kdo byl autorem.jpg">
      <div class="answer">
        <div class="doplnovacka">
          Autorem byl
          <select class="selection">
            <option value="false">...</option>
            <option value="true">Kubi</option>
            <option value="false">Tomi</option>
            <option value="false">Víti</option>
            <option value="false">Vymítač</option>
          </select>
          .
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>
    </div>`, `      <p class="question">
        Kde se děj odehrává?
      </p>
      <img class="question-img" src="images/tyx/kde se děj odehrává.jpg">
      <div class="answer">
        <div class="doplnovacka">
          Toto božské dílo se odehrává v 
          <select class="selection">
            <option value="false">...</option>
            <option value="true">Jídelně</option>
            <option value="false">Věznici</option>
            <option value="false">Úřadě</option>
            <option value="false">Škole</option>
          </select>
          .
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>
    </div>`]
    console.log()
    writeQuestions(questionArray, indexOfQuestions);
  }else if(jidlovyTyp === 'recept'){
    questionArray = [/*html*/`
      <p class="question">
        Co se vařilo ve filmečku recept?
      </p>
      <img class="question-img" src="images/recept/co se vařilo v receptu.png">
      <div class="answer">
        <div class="doplnovacka">
          <select class="selection">
            <option value="false">...</option>
            <option value="true">slaný dort</option>
            <option value="false">maso</option>
            <option value="false">sladký dort</option>
            <option value="false">pihdonýr</option>
          </select>
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>
    </div>`, `<p class="question">
    Jak se získává omáčka?
  </p>
  <img class="question-img" src="images/recept/jak se získává omáčka.jpg">
  <div class="answer">
    <div class="doplnovacka">
      <select class="selection">
        Omáčka se získáva z
        <option value="false">...</option>
        <option value="false">z bulv</option>
        <option value="false">z masa</option>
        <option value="true">vymačkáním hnusu</option>
        .
      </select>
    </div>
  </div>
  <div class="vyhodnoceni-container">
    <button class="js-button-correct">Vyhodnotit</button>
    <button class="js-button-incorrect">Nevím</button>
  </div>
</div>`,`<p class="question">
        Pro koho byl dort?
      </p>
      <img class="question-img" src="images/recept/pro koho byl dort.jfif">
      <div class="answer">
        <div class="doplnovacka">
          Dort je pro
          <select class="selection">
            <option value="false">...</option>
            <option value="true">pro Kubiho</option>
            <option value="false">pro faráře</option>
            <option value="false">pro Toma</option>
            <option value="false">pro Vítka</option>
          </select>
          .
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>
    </div>`, `      <p class="question">
        Kdo byl autorem tohoto veledíla?
      </p>
      <img class="question-img" src="images/recept/kdo byl autorem veledila.jpg">
      <div class="answer">
        <div class="doplnovacka">
          Autorem filmečku je
          <select class="selection">
            <option value="false">...</option>
            <option value="false">Bůh</option>
            <option value="false">Víti</option>
            <option value="false">Kubi</option>
            <option value="true">Tomi</option>
          </select>
          .
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>
    </div>`, `<p class="question">
        Jaká potvora tam byla vařena?
      </p>
      <img class="question-img" src="images/recept/jaká potvora tam byla vařena.jpg">
      <div class="answer">
        <div class="doplnovacka">
          Byl/a tam vařen/a/o
          <select class="selection">
            <option value="false">...</option>
            <option value="false">Apalačské stvoření</option>
            <option value="false">Kejda hnoje</option>
            <option value="false">Lochneská příšera</option>
            <option value="true">King Kong</option>
          </select>
          .
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>
    </div>`, `<p class="question">
        Jak dlouho se dort pekl?
      </p>
      <img class="question-img" src="images/recept/jak dlouho se dort pekl.jpg">
      <div class="answer">
        <div class="doplnovacka">
          Dort se pekl
          <select class="selection">
            <option value="false">...</option>
            <option value="false">1 den</option>
            <option value="true">1-1.5 hodiny</option>
            <option value="false">3-4 hodiny</option>
          </select>
          .
        </div>
      </div>
      <div class="vyhodnoceni-container">
        <button class="js-button-correct">Vyhodnotit</button>
        <button class="js-button-incorrect">Nevím</button>
      </div>
    </div>`]
    console.log()
    writeQuestions(questionArray, indexOfQuestions);
  }
};

function writeQuestions(){
  document.querySelector('.quiz-box').innerHTML = questionArray[indexOfQuestions];
};