(function(){

    let calcScreen = document.querySelector('.screen');
    let numButton = document.querySelectorAll('.btn');
    let equalSign = document.querySelector('.btn-grey');
    let clearSign = document.querySelector('.btn-red');

    numButton.forEach(function(numButton){
        numButton.addEventListener('click', function(e){
        let results = e.target.dataset.num;
        calcScreen.value += results;
       });
    });

    equalSign.addEventListener('click', function(e){
        
        if(calcScreen.value == ' '){
            calcScreen.value = 'Please Enter';
        }else{
            let answer = eval(calcScreen.value);
            calcScreen.value = answer;
        }
    });
    clearSign.addEventListener('click', function(e){
        calcScreen.value= "";
    });
})();