/**
 * CodeIt JS 중급
 * 
 * document.getElementById('test'); 없는 id를 선택하면 undefined 가 아닌 null이 Return됌 
 * document.getElementsByClassName('test');로 가져올 경우 배열의 형태고 가져오지만.
 * splice, push 같은 메소드는 사용할 수 없기 때문에 완벽하게 배열은 아니다.(유사배열)
 * length나 순서로 접근하는 경우는 가능하다. 
 * 순서는 HTML상에서 위에서부터 아래로 레벨과는 상관없다.
 * ClassName같은 경우 없는 ClassName을 선택할 경우 빈 HTMLCollection이 출력됌 []
 * 빈document.getElementBysClassName === null : false, length = 0
 * 
 * CSS 선택자로 태그 선택하기
 * document.querySelector('#test');는
 * document.getElementById('test');와 동일하다.
 * 여러 태그를 선택한다면 document.querySelectorAll('.test');
 * HTMLCollector가 아닌 NodeList로 나오지만 같은 유사배열로 반환한다.
 * 
 * 코드가 짧기도하고 하나의 메소드로 유연하게 태그 선택이 가능하므로 querySelector를 사용하는 것을 추천
 * 
 * 웹 페이지에는 다양한 이벤트가 존재한다. 
 * 가장 자주 사용하는 이벤트는 Click이다.
 * const btn = document.querySelector('#test'); <- 이벤트 핸들링
 * btn.onclick = function(){ <- 이벤트 핸들러
 *  console.log('hello CodeIt');
 * } 
 * document, console 등 내장 객체들은 모두 window 객체에 포함되어 있다.
 * 
 * DOM : Document Object Model(문서 객체 모델)
 * 웹페이지 혹은 웹 문서라고 부른다
 * DOM을 요약하면 웹페이지에 나타나는 HTML 문서 전체를 객체로 표현한 것.
 * document가 DOM의 최 상단의 객체이며 진입점
 * console.dir(document);
 * 
 * DOM트리 
 * 계층구조이고 부모태그와 자식태그로 이루어짐 
 * 이런 구조를 DOM트리라고 하고 DOM트리에서는 각 객체를 노드라고 부른다.
 * 상위 노드는 부모노드 하위 노드는 자식노드 같은 레벨의 노드는 형제노드라고한다.
 * 노드타입
 * 1. 요소노드
 * 2. 텍스트노드
 * 대표적으로 태그를 표현하는 노드를 요소노드라고 하고 
 * 문자를 표현하는 노드를 텍스트 노드라고 한다.
 * 일반적으로 텍스트 노드는 요소 노드의 자식 노드가 된다.
 * 텍스트 노드는 자식 노드를 가질 수 없기 때문에 '잎노드' 등으로 부른다 (텍스트 노드는 자식 노드를 가질 수 없다.)
 * const myContent = document.querySelector('#content');
 * 자식 요소 노드 접근 console.log(myContent.children);
 * 부모 요소 노드 접근 console.log(myContent.parentElement);
 * 형제 요소 노드 접근 console.log(myContent.nextElementSibling);
 * 형제 요소 노드 접근 console.log(myContent.previousElementSibling);
 * 첫 번째 요소 노드 접근 console.log(myContent.firstElementChild);
 * 마지막 요소 노드 접근 console.log(myContent.lastElementChild);
 * 
 * .innerHTML은 해당 요소 노드 안에 있는 HTML을 반환하고
 * .outerHTML은 해당 요소 노드를 포함한 HTML을 반환한다.
 * .textContent은 .innerHTML과 유사하다. 요소 안에 있는 HTML을 제외한 TEXT들만 가져옴
 * 
 * .prepend : 맨 앞에 자식노드로 추가
 * .append : 뒤에 자식노드로 추가
 * .before : 맨 앞에 형제노드로 추가 
 * .after : 맨 뒤의 형제노드로 추가 
 * 각 메소드들은 인자로 복수 개를 전달하여 한꺼번에 여러개를 처리할 수 있다.
 * 
 * .remove();는 삭제 메소드
 * children[2].remmove();
 * 
 * 브라우저가 콘텐츠를 화면에 보여주기 위해서 HTML 태그를 해석할 때 DOM객체가 만들어진다.
 * HTML의 각각의 속성들은 요소 노드의 Property가 된다.
 * 대부분의 HTML 속성들은 이름 그대로 요소 노드의 Property로 생성된다.
 * 주의해야 할 점은 모든 요소 노드의 Property로 생성되진 않는다.
 * HTML의 표준속성 참고할 것.
 * 태그들의 Class는 ClassName으로 Property가 생성됌.
 * 자바스크립트에서는 각 요소의 표준 속성에만 접근할 수 있지만
 * .getAttribute를 사용하면 표준, 비표준 관계없이 접근할 수 있다.
 * tommorow.href = 'www.naver.com' == tommorow.getAttribute('href'); 일반적인 방법과 getAttribute
 * 클래스는 tommorow.className이지만 getAttribite는 tommorow.getAttribute('class'); 이다
 * 속성 추가는 .setAttribute('class', 'list'); : 없는 Property같은 경우는 추가가 되고, 있는 Property는 수정되는 형태로 동작한다.
 * 삭제는 removeAttribute('class'); 
 * HTML의 표준 속성은 모두 소문자이다. class, href인 이유 ('CLass')등으로 하여도 소문자로 치환하기 때문에 문제는 없다. 
 * 즉, 상황에 따라서는 HTML속성과 DOM Property의 이름이 다를 수 있다. ex) className과 class
 * 
 * style 프로퍼티를 통해서 CSS 속성을 다룰 때 
 * ex) text-decoration 같은 경우 카멜케이스 표기법 적용
 * node.children[0].style.text-decoration = 'line-through' x
 * node.children[0].style.textDecoration = 'line-through' o 
 * style Property를 활용하면 태그에 직접 style 속성이 추가되는 것이기 때문에 CSS 우선순위가 우선이 될 수 있다.
 * 그래서 일반적인 방법은 styleProperty를 직접 수정하거나 추가하는 것보단 class를 변경하여 사용한다.
 * tag.className = 'done' <- 이런 방식으로 클래스를 수정한다면 해당 클래스가 바뀌는데 
 * 클래스를 기존에 있던 것을 유지하면서 더하고싶다면 tag.classList를 사용한다
 * .className : 클래스를 유사배열 형태로 다루는 Property
 * 클래스 속성을 하나씩 다룰 수 있을 뿐만 아니라 add, remove, toggle등 유용하게 다룰 수 있다.
 * tag.classList.add('done'); : Class 추가 
 * tag.classList.add('done','other'); : 복수 개의 Class 
 * tag.classList.add('done','other'); : 똑같은 클래스를 중복해서 추가하더라도 하나만 추가된다.
 * tag.classList.remove('done'); : 해당 클래스를 삭제한다.
 * tag.classList.remove('done', 'other'); : 복수 개의 클래스를 삭제한다.
 * tag.classList.toggle('done'); : 있으면 제거하고 없으면 추가한다. 
 * tag.classList.toggle('done', true); : true는 add의 기능만한다.
 * tag.classList.toggle('done', false); : false는 remove의 기능만한다.
 * toggle은 클래스 하나만을 다룬다. 복수개 x
 *  
 * 
 * 이벤트 핸들러 등록하기
 * 이벤트 핸들러를 다루는 방식 2가지
 * 1. let btn = document.querySelector('#test');
 * btn.onclick = function(){ //이벤트 핸들러를 중복으로 두개를 생성할 경우 덮어쓰는 형식으로 늦게 적용한 이벤트 핸들러만 동작한다
 *  console.log('test Log');
 * }
 * 2. HTML 태그에 onclick속성을 추가 
 * HTML에서 onclick속성을 통하여 다루는 방법은 일반적으로 사용하는 방법은 아니다.
 * 이유는 .innerHTML등으로 HTML을 수정할 경우 onclick 속성이 지워질 수 있기 때문. 
 * -- 위 두가지 방법은 하나의 이벤트 핸들러만 사용할 수 있다는 단점이 있다. 
 * 
 * btn.addEventListener('click', event1); 가장 권장하는 이벤트 핸들러 등록 방법
 * 하나의 요소에 여러개의 독립적인 이벤트 핸들러를 등록할 수 있다. 
 * --삭제
 * 이렇게 등록된 EventListener는 removeEventListener로 제거할 수 있다.
 * btn.removeEventListener('click', event1)를 전달하면 해당 이벤트리스너가 삭제되는 방식. 
 * 주의할 점은 등록할때 사용했던 이벤트핸들러를 그대로 전달해야한다. 
 * 이벤트 핸들러를 삭제해야한다면 익명함수로 핸들러를 등록하면 안된다.
 * 이벤트핸들러를 전달할 때 ()는 필요없이 핸들러 이름만 전달하면 된다.
 * ()를 붙일 경우 해당 함수의 리턴 값이 핸들러에 전달된다.
 * 
 * keydown : 키보드를 누를 때 
 * click : 클릭할 때 
 * 이벤트 핸들러가 되는 함수의 첫 번째 인자는 무조건 이벤트 객체가 전달된다. 
 * 
 * ---------------------------------------------------
 * function printEvent(event){
 *  console.log(event);
 * }
 * myInput.addEventListener('keydown', printEvent); : KeyboardEvent
 * myBtn.addEventListener('click', printEvent);     : MouseEvent
 * ---------------------------------------------------
 * 
 * event 객체에서 가장 많이 사용하는 것
 * 1. type  : 발생한 이벤트의 타입 ex ) 'keydown' 등
 * 2. target: 이벤트가 발생한 해당 요소를 담고있다. 특히 DOM요소가 담겨있다. 
 * 
 * 이벤트 버블링 : 상위 노드와 하위 노드가 이벤트 처리가 되어있을 경우 하위에서 이벤트 발생 시 상위의 이벤트도 호출되는 경우 
 * 이벤트 버블링의 경우 이벤트가 발생하면 target은 각 이벤트가 발생한 노드를 가리키지 않고 이벤트가 발생한 노드를 가리킨다. 
 * 즉, 하위 이벤트 발생 시 상위 이벤트도 호출이 되지만 상위 이벤트도 하위에 있는 이벤트가 발생한 노드를 target으로 가리킨다.
 * .currentTarget을 사용할 경우는 위 처럼 이벤트가 발생한 노드를 target으로 삼지 않고 현 이벤트핸들러가 가리키는 노드를 가리킨다.
 * 버블링을 멈추는 방법 
 * event.stopPropagation(); 
 * 하지만 꼭 필요한 경우가 아니라면 가급적 이벤트 버블링을 막는 것은 피하는 것이 좋다.
 * 
 * -- 이벤트 위임 : 자식요소의 이벤트를 부모 노드에게 위임했다. 라는 개념
 * 이벤트를 상위 노드에 줘도 .target은 이벤트를 발생시킨 노드를 target으로 가지고 있다.
 * const list = document.querySelector('#list');
 * 
 * list.addEventListener('click', function(e){ //상위 list노드 이벤트핸들러
 *  e.target.classList.toggle('done'); //target은 하위 이벤트가 일어난 노드를 가리킴
 * });
 * 이 경우 이벤트 핸들러는 상위 list노드를 가리키고 클릭 이벤트 처리는 클릭이 일어난 하위 노드로 할 수 있다.
 * 만약 list의 하위 노드에 이벤트가 발생하지 않고, 오로지 list 노드만 해당되는 부분에서 event가 발생했을 경우는 list에 이벤트 처리가 일어날 수 있다.
 * 
 * 이벤트 위임의 경우는 이에대한 처리를 해줘야한다. ex)
 * if( e.target.classList.contains('item') ){ //하위 노드만 포함되어있는 class item이 있는지
 *  e.target.classList.toggle('done'); 이벤트 처리 .contains('item')는 파라미터로 전달된 값이 해당 요소에 포함되어 있는지 boolean형태로 return
 * }
 * or
 * if( e.target.tagName === 'LI' ){ //하위 노드의 태그네임이 맞는지
 *  e.target.classList.toggle('done'); 이벤트 처리
 * }
 * 
 * 정리 :   이벤트 위임을 사용하면 하위 노드가 추가되어도 이벤트를 적용시킬 수 있다. 자식 노드의 추가 삭제할 때 이벤트를 고려하지 않아도 된다.
 *         이벤트 위임은 버블링을 활용한 방식이기 때문에 버블링을 막는 이벤트가 있을 경우 의도한대로 동작하지 않을 수 있다. 
 *         이벤트 버블링을 막지 않고 코딩하는 것이 바람직하다.
 *   
 * 브라우저 기본 동작 제어
 * 각 태그들은 태그들만의 고유의 기본동작들이 있다. ex) a태그는 해당 href로 이동하는 기본동작을 한다.
 * event.preventDefault : 브라우저의 기본 동작들을 막을 수 있다. 
 * text.addEventListener('contextmenu', function(e){ 웹 브라우저에서 마우스 오른 쪽 클릭 방지
 *  e.preventDefault();
 *  alert('마우스 오른쪽 클릭을 사용할 수 없습니다.');
 * });
 * 
 * a태그 : href="www.naver.com"
 * a.addEventListener('click',function(e){
 *  e.preventDefault(); a태그의 기본 동작을 막는다.
 *  alert('지금은 이동할 수 없습니다.');
 * });
 * 
 * [마우스 버튼 이벤트]
 * > MouseEvent.button
 * 0: 마우스 왼쪽 버튼
 * 1: 마우스 휠 노트북의 터치패드 같은 경우는 휠이 없기 때문에 대부분 0, 2 이벤트가 사용됌
 * 2: 마우스 오른쪽 버튼
 * 
 * > MouseEvent.type
 * click : 마우스 왼쪽 버튼을 눌렀을 때
 * contextmenu : 마우스 오른쪽 버튼을 눌렀을 때
 * dblclick : 동일한 위치에서 빠르게 두번 click이 일어날 때
 * mousedown : 마우스 버튼을 누른 순간
 * mouseup : 마우스 버튼을 눌렀다 뗀 순간
 * 주의할 점 : 하나의 동작에 여러개의 이벤트가 발생할 수도 있다. 각각의 이벤트 순서를 이해하고 사용하도록 한다.
 * ex ) 마우스 클릭 시 click, mousedown, mouseup 이벤트가 발생한다.
 * 마우스 오른쪽 버튼은 운영체제마다 이벤트 순서가 다르다 
 * 윈도우 : mousedown, mouseup, contextmenu가 발생 
 * 맥OS : mousedown, contextmenu, mouseup이 발생 
 * 
 * 
 * [마우스 이동 이벤트]
 * > MouseEvent.type
 * mousemove : 마우스 포인터가 이동할 때
 * mouseover : 마유스 포인터가 요소 밖에서 안으로 이동할 때
 * mouseout : 마우스 포인터가 요소 안에서 밖으로 이동할 때
 * 
 * > MouseEvent.clientX, clientY
 * : 화면에 표시되는 창을 기준으로 마우스 포인터의 위치 값
 * 
 * > MouseEvent.pageX, pageY
 * : 웹 문서 전체 기준 마우스 포인터 위치
 * 
 * > MouseEvent.offsetX, offsetY
 * : 이벤트가 발생한 요소 기준 마우스 포인터 위치
 * 위치 정보를 가지고 특정한 위치에 도달했을 때의 이벤트를 만들 수 있다.
 * 혹은 연속적으로 발생한 이벤트끼리의 위치 값을 계산해서 마우스 이동경로를 파악할 수도 있다.
 * 
 * > MouseEvent.target
 * : 이벤트가 발생한 요소
 * 
 * > MouseEvent.relatedTarget
 * : 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소
 * 
 * [키보드 이벤트]
 * 
 * > KeyBoardEvent.type
 * keydown : 키보드 버튼을 누른 순간
 * keypress : 키보드 버튼을 누른 순간
 * keyup : 키보드 버튼을 눌렀다가 뗀 순간
 * 
 * -- keypress
 * 키를 누르고 있을 경우 keypress는 한 번만 발생하고 keydown은 계속 발생한다.
 * keypress는 출력 값이 있는 키만 이벤트 발생. shift나 esc같은 키는 keypress가 발생하지 않는다.
 * keypresss는 영어가 아닌 경우에는 반응하지 않는다. 숫자도 반응함
 * keypress는 웹 표준에서 사용하지 않는다. keydown을 사용하도록 한다.
 * 
 * > KeyboardEvent.key
 * : 이벤트가 발생한 버튼의 값
 * 
 * > KeyboardEvent.code
 * : 이벤트가 발생한 버튼의 키보드에서 물리적인 위치 ex) Enter키는 Code : 13
 * 
 * [input 이벤트]
 * > 포커스 이벤트
 * focusin : 요소에 포커스가 되었을 때
 * focusout : 요소에 포커스가 빠져나갈 때
 * focus : 요소에 포커스가 되었을 때 (버블링 x)
 * blur : 요소에 포커스가 빠져나갈 때 (버블링 x)
 * -- 버블링이 되지 않으므로 이벤트 위임이 불가능하다.
 * 
 * > 입력 이벤트
 * input : 사용자가 입력을 할 때, esc, shift는 입력 값이 아니므로 이벤트 발생 x
 * change : 요소의 값이 변했을 때 입력이 시작되기 전 값과 입력이 끝난 후의 값이 차이가 있을 경우 발생한다.(포커스 아웃 직전에 발생한다. 또는 Enter키를 눌렀을 때)
 * 즉, change 이벤트는 입력중 상태에서 입력이 끝났다는 암시가 있을 때 값이 변했다면 발생한다.
 * 
 * [스크롤 이벤트]
 * 스크롤은 일반적으로 window객체에 이벤트를 등록한다.
 * window.addEventListener('scroll', eventMethod);
 */

 // 마우스 토글 이벤트 
 const box2 = document.querySelector('#box2');

 function eventTest(e){ 
     if( e.target.classList.contains('ceil') ){
         e.target.classList.toggle('on'); 
         //toggle을 이용해서 마우스가 올라간 위치의 클래스를 바꿔주면서 현재 마우스가 가리키는 요소를 다르게 표시가능 !
     }
 }

 box2.addEventListener('mouseover', eventTest);
 box2.addEventListener('mouseout', eventTest);


 //스크롤 이벤트

//  let lastScrollY = 0; //화면 로딩 시 스크롤 값 

//  function scrollEvent(e){
//      const STANDARD = 30; //기준 값

//      const nav = document.querySelector('#nav');
//      const toTop = document.querySelector('#to-top');
//      if( window.scrollY > STANDARD ){ //스크롤이 30px를 넘었을 때
//          nav.classList.add('shadow');
//          toTop.classList.add('show');
//      }else{ //스크롤이 30px를 넘지 않을 때 
//          nav.classList.remove('shadow');
//          toTop.classList.remove('show');
//      }

//      if(window.scrollY > lastScrollY ){ //스크롤 방향이 아랫 쪽일때
//         nav.classList.add('lift-up');
//      }else{ //스크롤 방향이 위 쪽일때 
//          nav.classList.remove('lift-up');
//      }

//      lastScrollY = window.scrollY; //이벤트 발생 scroll위치 값으로 변경 
//  }

//  window.addEventListener('scroll', scrollEvent);

const btn = document.querySelector('#btn1');

function mouseEvent(e){
    console.log(e.type); //이벤트 타입
}

btn.addEventListener('click',mouseEvent);
btn.addEventListener('mouseover',mouseEvent);
btn.addEventListener('mouseout',mouseEvent);
btn.addEventListener('dblclick',mouseEvent);

const text = document.querySelector('#text1');

function keyEvent(e){
    let type = e.type;
    if( type === 'change' ){
        alert('수정');
    }
}
text.addEventListener('change',keyEvent);
text.addEventListener('input',keyEvent);

//스크롤 반응 상단 헤더 표시/지움
const header = document.querySelector('.header');
let lastScrollY = 10;
function scrollTest(e){
    const STANDARD = 10;
    const scrollY = window.scrollY;
    if( scrollY > lastScrollY ){
        header.classList.add('headerOff');
    }else{
        header.classList.remove('headerOff');
    }
    lastScrollY = scrollY;
}
window.addEventListener('scroll', scrollTest);
//마우스 오른쪽 클릭 방지 
function contextMenu(e){
    e.preventDefault();//키보드 오른쪽 클릭 방지

}
document.body.addEventListener('contextmenu',contextMenu);
