//인간은 사회적 동물이다.
//추상화 : Abstract
//단순하고 간결하게 표현하면서 핵심은 명확하게 드러낸다.
//복잡한 것들을 목적에 맞게 단순화하는 것.
//목적을 명확히! 불필요한 것 숨기기! 
/**
 * 진리값 : true, false 
 * 
 * NaN : Not a Number
 * 
 * typeof는 자료형을 문자열로 반환한다. 
 * typeof 'Hello' + 'Codeit' = stringHello 출력 (우선순위 때문, 괄호를 사용해서 우선순위 고려해야함)
 * 
 * --형변환
 * String : '', Number : NaN, 0 은 Boolean으로 형 변환할 시 false  
 * 자바스크립트에서 '4' - true = 3
 * 자동 형 변환 잘 이해할 것
 * 4 + '2' = 42
 * 4 + 2 = 6
 * 4 - true = 3
 * 4 * false = 0
 * 4 / '2' = 2
 * '4' ** true = 4
 * 4 % 'two' = NaN NaN은 어떤 값과 연산해도 NaN이 나온다.
 * 
 * 같음 비교 연산
 * ==은 형 변환하고 비교 
 * ===은 형변환하지 않고 비교
 * 
 * 템플릿 문자열 : 형식 문자열
 * 가독성있고 쉽게 작성할 수 있음
 * ''가 아닌 ``을 사용 
 * 일반 사용 : console.log('생년월일은'+year+'년'+month+'월'+day+'일 입니다.');
 * 백틱 사용 : console.log(`생년월일은${year}년${month}월${day}입니다.`); 더하기 기호 생략 가능
 * 백틱 사용시 ${}안에서 함수도 호출 가능 ${fn_add(1,2)}
 * 
 * null과 undefined 
 * null : 값이 없다는 걸 의도적으로 표현, 지정할 때 사용(의도적으로 값이 없다)
 * undefined : 시스템적으로 표현(처음부터 없음)
 * null = undefined = true
 * null === undefined = false
 * 의도적으로 사용할 것이라면 null을 사용하는게 옳다
 * 
 * ***
 * 옵셔널 파리미터 : 파라미터에 할당 연산자를 통해서 값을 할당하는 것 
 * function test (a, b, c = 3){ 미리 값을 할당하는 것
 *  전달했을 경우는 전달한 값이고 값이 없을 경우 디폴트 값을 설정가능 
 *  옵셔널 파라미터는 파라미터의 가장 뒤쪽에 선언해야 한다. 
 * }
 * 
 * 
 * 프로그래밍 기초 in JavaScript 토픽 2 옵셔널 파라미터까지 \
 * 
 * 변수의 Scope(범위, 영역)
 * 로컬변수(지역변수) : 블록문 안에 선언된 변수
 * 글로벌 변수(전역변수) : 전역에서 사용할 수 있는 변수
 * 블록문 안에서는 로컬변수가 우선순위이다. 
 * 
 * 변수를 선언할 때 값이 없는데 초기화 한다면 
 * String = ''
 * Number = 0
 * 나머지는 null이 좋다.
 * 
 * 상수일 경우는 const 상수는 대문자로 사용한다. 
 * JAVA의 FINAL과 같다.
 * const로 선언된 변수의 값을 변경하려 하면 오류가 발생한다.
 * 
 * if문이 중첩될 경우 else if문을 사용하는 것이 가독성이 좋다.
 * 
 * while문은 반복문과 조건문을 혼합할 경우 사용하기 좋다.
 * break는 빠져나오고 continue는 다음 단계로 진행
 * 
 * 
 * -- 자료형
 * 객체 안에 데이터를 넣을 때 
 * 'name' : 'Yoo' == name : 'Yoo' 같다 (자동으로 문자열로 치환)
 * ''로 감싸지 않을 때 주의할 점.
 * 1. 첫 번째 글자는 반드시 문자, 밑줄(_), $ 중 하나로 시작해야함
 * 2. 띄어쓰기 금지 
 * 3. 하이픈(-) 금지
 * 셋 중에 하나에 해당한다면 ''로 감싸줘야함
 * Property는 제한없이, Number, String, Object 등 자유롭게 들어갈 수 있음
 * 
 * 객체의 프로퍼티에 접근하는 방법
 * 1. 점(.)표기법 : 점 표기법은 프로퍼티 네임에 띄어쓰기가 있는 경우 접근할 수 없음.
 * 2. 대괄호([]) 표기법 : ['na me'] 처럼 띄어쓰기가 있을 경우 접근할 수 있음 
 * 객체 안에 객체는 obj1.obj2.obj3 혹은 obj1.obj2[obj3] 
 * 
 * 프로퍼티 삭제방법 
 * delete obj1.obj2; 삭제가 된 값은 undefind 
 * 
 * -- in 연산자 ***
 * console.log(obj1.obj2 !== undefind); == console.log('name' in obj1.obj2);
 * in으로 프로퍼티 안의 값을 Boolean형으로 반환할 수 있음.
 * 안전하게 프로퍼티 값을 확인할 때는 in 연산자를 활용하는 것이 좋다. 
 * 
 * 프로그래밍 기초 in JavaScript 토픽 3 Date객체 02월 24일
 * 
 * 자바스크립트에서는 모든 날짜를 Date로 사용
 * 객체를 생성한 순간의 시간이 생성된다. 
 * Date 객체를 생성할 때 소괄호 안에 초기값을 넣어줄 경우 초기 값 넣어줄 수 있다 (1970년 초월 초일 기준)
 * let myDate1 = new Date('2017-05-18');
 * let myDate2 = new Date('2017-05-18T19:11:16');
 * new Date(2017, 4, 18, 19, 11, 16); 월의 경우 4일 경우 5월 
 * let myDate = new Date(2017, 4, 18, 19, 11, 16);
 * console.log(myDate.getTime()); : Date 객체의 기준년도인 1970년 1월 1일 0시 0분 0초로부터 몇 밀리초가 지났는 지 (타임스탬프라고 부름)
 * console.log(myDate.getFullYear());   //년도
 * console.log(myDate.getMonth());      //월
 * console.log(myDate.getDate());       //일자
 * console.log(myDate.getDay());        //요일
 * console.log(myDate.getHours());      //시간
 * console.log(myDate.getMinutes());    //분
 * console.log(myDate.getSeconds());    //초
 * console.log(myDate.getMillseconds());//밀리초
 * typeof new Date : Object
 * 
 * let arr = [1, 2, 3, 4]; 들어있는 각각의 값들을 요소(Element)라고 부른다. 각 요소들은 index라는 순서를 가진다.
 * 배열도 객체이다. typeof 시 Object로 나온다.
 * arr.length = arr['length'] 같다.
 * 존재하지 않는 값에 접근한다면 에러가 아니라 undefined가 나온다. arr[5] = undefind
 * 객체는 delete obj;
 * 배열을 삭제할 땐 배열이 가지고 있는 메소드를 사용한다. 
 * 배열에서 delete arr[1]을 할경우 [1]번째 값이 undefined
 * 배열을 완전히 삭제할 경우 arr.splice(1); //전달된 파라미터 이후로 모든 값을 삭제
 * 한 개만 삭제하고 싶다면 arr.splice(1,1); 
 * arr.splice(1, 1, 'Nice','Hi'); 2번 째 값이 삭제되고 Nice, Hi가 추가됌
 * arr.splice(1, 0, ''Nice', 'Hi'); 아무것도 삭제하지 않고 2번째 사이에 값을 추가할 수 있다.
 * -- splice(startIndex, deleteCount, item);
 * 
 * --shift();
 * arr.shift(); : 배열의 첫 요소가 삭제되고 하나씩 당겨짐
 * arr.pop(); : 배열의 마지막 요소가 삭제됌
 * arr.upshift('Hi'); : 배열의 첫 요소로 값 추가
 * arr.push('Hi'); : 배열의 마지막에 값 추가
 * 배열의 양 끝에 데이터를 처리해야 한다면 더 간결하게 사용할 수 있다.
 * 
 * -- for of
 * for(변수 of 배열){  // for in은 변수에 PropertyName이 할당된다. for of는 배열의 요소가 할당된다.(자바의 for in문) 
 *  console.log(element);
 * }
 * 배열에는 for of, 객체에는 for in 을 사용하는 것이 바람직하다.
 * 
 * --다차원 배열
 * 자바스크립트에서는 배열안의 배열을 다차원 배열이라고 한다.
 * var arr = [ [1, 2], [3, 4]];
 * var obj = {
 * 'arr1' : [1, 2],
 * 'arr2' : [3, 4]
 * }
 * 위 두가지 방법으로 다차원 배열을 사용할 수 있다. 단순 나열이라면 첫 번째 방법을, 프로퍼티 네임이 필요하다면 두 번째 방법을 사용한다.
 * 
 * -- 숫자 표기법
 * let millionaire = 10000000000;
 * let millionaire = 1e9; 지수 표기법 왼편의 수에 오른편의 수만큼 10의 거듭제곱을 곱한다.
 * console.log(-9.1e-5 === -0.000091); 음수 일 경우 소수로 표기한다.
 * 여러 분야에서 숫자를 표현할 때 지수 표기법을 사용한다.
 * 
 * --진법
 * 0xff; 0xFF = 255 Hexadecimal
 * 0o377 = 255      Octal
 * 0b11111111 = 255 binary numeral system
 * 
 * JavaScript 기초 토픽 3 자료형 심화 숫자형 메소드부터
 * 
 *  Number 사용법
 * let myNumber = 0.3591; 
 * console.log(myNumber.toFixed(7));  : 0.3591000 toFixed는 자릿수를 고정으로 잡아줌
 * console.log(typeof myNumber.toFixed(7)); : String
 * Number로 사용한다면 Number(myNumber.toFixed(7)); 혹은 console.log(+myNumber.toFixed(7));
 * -- 중요 : 앞에 +를 붙이면 Number형으로 만들어짐
 * 
 * toString 은 괄호의 진법으로 변환해줌 
 * console.log(myNumber.toString(2)); 2진법 
 * console.log(myNumber.toString(8)); 8진법
 * console.log(myNumber.toString(16));16진법 
 * 
 * 숫자형 메소드를 사용할 때 주의할점 : 255.toString() x, 255..toString() o 혹은 (255).toString()
 * 
 * 대부분의 프로그래밍 언어는 0.1 + 0.2 = 0.3으로 정확히 떨어지지 않는다.
 * 컴퓨터는 숫자처리를 2진수로 계산하는데 자바스크립트가 숫자를 표현할 수 있는 범위에서 반올림을 해버리기 때문에 오차가 생김
 * 해결법 : 1. toFixed(), toFixed를 사용할 땐 앞에 +를 붙이거나 Number로 형변환 해야함
 *         2. Math.round(sum * 10) / 10; 10을 곱해주고 다시 10으로 나눠주는 방법이 있다. 
 * 결론 : 적당히 반올림을 해야한다. 
 * 
 * 문자열 심화 
 * String도 객체처럼 다룰 수 있다.
 * String은 배열과 비슷하다 
 * .length 
 * .charAt(3), : 3번째 문자 == [3];
 * indexOf,     앞부터
 * lastIndexOf  뒤부터
 * toUpperCase  : 대문자로
 * toLowerCase  : 소문자로
 * trim         : 양 쪽 공백을 없애줌 
 * slice        : 부분 문자열을 가지고 오는 메소드 ex) .slice(0,2) 두 번째 인자를 넘기지 않는다면 시작 인덱스부터 끝까지
 * 
 * 기본형(Primitive Type) 
 * 1. Number
 * 2. String 
 * 3. Boolean
 * 4. null
 * 5. undefined
 * 기본형의 경우 x = 3, y = x 를 한 후 y = 5를 할당하면 x = 3, y = 5가 출력됌
 * 변수 = 값
 * 
 * 참조형(Reference Type)
 * 참조형(Object)의 경우는 x = {name : 'Codeit'}, y = x 를 할당한 후 y.birth = '2017'를 할당하면 x = {name = 'Codeit', '2017'}, y = {name = 'Codeit', '2017'} 
 * 두개가 동시해 바뀐다 (참조 개념으로 이해할 것)x와 y는 같은 객체를 바라보고 있다.
 * 변수 = 주소 값
 * 
 * 배열 : 같은 주소 값을 참조하고 싶지 않다면 let arr = [1, 2, 3]; let arr2 = arr1.slice(); : slice에 기본 값을 할당하지 않으면 본래 배열을 리턴한다.(배열을 복사한 것 같은 효과)
 * 객체 : Object.assign 혹은 for in문으로 만들어서 사용 혹은 for in문 작업을 하는 function 생성
 * 배열이나 객체 안에 또 배열이나 객체가 있을 경우는 다른 방법을 강구해야한다.
 * 
 * 변하지 않는 값은 생각보다 많고 const를 사용하도록 해야한다. 
 * let같은 바뀔 수 있는 변수는 많을수록 코드의 일관성이 떨어진다.
 * const는 두 개의 단어가 조합된다면 MY_NAME 언더바로 사용
 * const로 객체를 생성할 경우 프로퍼티 추가 같은 경우는 가능하다. 
 */
// console.log(typeof new Date);

// //메소드 (Method) 객체 안에 메소드가 3개 
// //메소드 : 프로퍼티 값으로 함수를 정의하면 객체의 메소드라고 한다.
// let greetings = {
//     sayHello : function(name){
//         console.log(`Hello ${name}!`);
//     },
//     sayHi : function(){
//         console.log('Hi!');
//     }, 
//     sayBye : function(){
//         console.log('Bye !');
//     }  
// }
// greetings.sayHello('YJW');//메소드 호출
// greetings['sayHello']('YJW'); //대괄호표기법
// //메소드의 응용 (어쩌면 하나의 클래스라고 생각해도 될 것 같다. 변수들과 메소드들 )
// let triAngle = {
//     width : 15,
//     height : 40,
//     getArea : function(){
//         return triAngle.width * triAngle.height / 2;
//     }
// }


//  //in 연산자 
// let codeit = {
//     name : '코드잇',
//     bornYear : 2017,
//     isVeryNice : true,
//     worstCourse : null,
//     bestCourse : {
//         title : '자바스크립트 프로그래밍 기초',
//         language : 'JavaScript'
//     }
// }; 
// console.log('name' in codeit); //codeit 객체안에 name이라는 Property가 있는지
// console.log('worstCourse' in codeit); //codeit 객체에 worstCourse라는 Property가 있는지 




// //소수 구하기 
//  var arr = new Array();
//  var count = 0;
//  var chk;
 
//  for(let j = 1; j < 100; j++){
//     chk = true;
//     for(let i = 2; i < j; i++){
        
//         if( j % i == 0 ){
//             chk = false;
//             continue;
//         }
//     }
//     if(chk){
//         arr[count] = j;
//         count ++;
//      } 
//  }
//  console.log(arr);

 function optionalParam(a=3){//옵셔널 파라미터는 맨 마지막에 두도록 한다.
    console.log('OptionalParam : ', a);
 }

 function inTest(){
     let data = {
         name : 'Yoo'
     }
     console.log( 'name' in data ); // O ''로 감싸줘야함
     //console.log( data in 'name' );  X
 }

 function arrTest(){
     let arr = [1, 2, 3, 4];
     arr.shift(); //배열 첫번째 값 삭제 후 앞으로 하나씩 당겨짐
     console.log(arr);
     arr.pop(); // 배열 마지막 삭제 
     console.log(arr);
     arr.push(71); //배열 마지막에 추가
     console.log(arr);
     console.log('test');
 }
 
 //slice는 부분 인덱스를 가져오는 메소드, 인자전달로 순서 지정하지 않을 경우 복제(주소값은 참조하지않는 별도의 배열로 복제 )
 function arrSlice(){
     let arr = [1, 2, 3, 4];
     let arr2 = arr.slice(); //인자 전달하지 않으면 배열 복제 
     console.log(arr2);
     arr2 = arr.slice(1,2); //1번 인덱스부터 1개의 값 (param2 - param1)
     console.log(arr2);
     arr2 = arr.slice(1);
     console.log(arr2);
 }
 
 function arrSplice(){
     let arr = [1, 2, 3, 4];
     arr.splice(0);//전체삭제 
     console.log(arr);
     arr = [1, 2, 3, 4];
     arr.splice(1); //1을 제외한 나머지 삭제 
     console.log(arr);
     //즉 인자 전달한 인덱스 부터 삭제 ex) 1일경우 0번 인덱스 이후부터 삭제 
 }
 
 //객체의 프로퍼티이름을 하나씩 꺼내서 사용
 function forIn(){ 
     let data = {
         name : 'Yoo',
         age : 27
     }

     for (const key in data) { //ProperyName이 할당 키 개념
         console.log(key);
     }
 }

 //배열에 사용 배열에 있는 값을 하나씩 꺼내서 사용 
 function forOf(){ 
    let arr = [ { name : 'Yoo' }, { age : 27 } ];

    for (const iterator of arr) {
        console.log(iterator);
    }
 }

 //템플릿 문자열
 function templeteString(name, age){
     console.log(`이름은 ${name}입니다. 나이는 ${age}입니다. 함수호출 : ${templeteString2()}`);
 }
 function templeteString2(){
     return 1 + 2;
 }

 //삼항연산자
 function returnTest(param){
     return param > 3 ? '3보다 큽니다.' : '3보다 작거나 같습니다.';
 }
 console.log(returnTest(3));
