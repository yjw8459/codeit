

var a = 1;

function outer(){
    console.log(a);     //첫번 째 로그 출력
    function inner(){
        console.log(a); //두번 째 로그 출력
        var a = 3;
    }
    inner();

    console.log(a);     // 세번 째 로그 출력
}

outer();
console.log(a);         //네번 째 로그 출력 후 전역 콘텍스트 종료