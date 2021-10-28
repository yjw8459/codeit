function fn_commonCreateTableRow(viewList, viewOrders, hiddenList){
    let html = '';
    for(let i = 0; i < viewList.length; i++){//뷰만큼 반복 
        let view = viewList[i];
        let viewName = Object.keys(view);
        html += '<tr>';
        for(let j = 0; j < viewOrders.length; j++){
            let viewOrder = viewOrders[j];
            for(let k = 0; k < viewOrders.length; k++){
                if( viewOrder === viewName[k] ){
                    html += '<td>' + view[viewOrder] + '<td>';
                    break;
                }
            }
            for(let k = 0; k < hiddenList.length; k++){
                if( viewOrder === hiddenList[k] ) {
                    html += '<input type="hidden" class="' + viewOrder + '" value="' + view[viewOrder] + '">';
                    break;
                }
            }
        }
        html += '</tr>';
    }

    return html;
}




let viewList = [{'test1' : '테스트', 'fuck' : '퍽유', 'yjw' : '호호'},
                {'test1' : '테스트입니다.', 'fuck' : 'ㅎㅎㅎㅎ', 'yjw' : '히히'},
                {'test1' : '유종원', 'fuck' : '유유유', 'yjw' : '헤헤'},
                {'test1' : '천소영', 'fuck' : '천소찡', 'yjw' : '하하'}];
let viewOrders = ['fuck', 'test1', 'yjw'];
let hiddenList = ['yjw', 'test1'];
console.log('test111');
let html = fn_commonCreateTableRow(viewList, viewOrders, hiddenList);
console.log('test');
console.log(html);

///testsa