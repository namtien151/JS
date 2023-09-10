// Lấy reference đến các phần tử DOM cần sử dụng
var input = document.querySelector('input');
var buttons = document.querySelectorAll('.numbers button');
var equalButton = document.querySelector('.equal');
var calculation = document.querySelectorAll('.calculation button');
var clearButton = document.querySelector('.clear')

var expression = '';
var result = '';


buttons.forEach(function (item) {
    item.addEventListener('click', function (e) {
        
        var buttonText = e.target.textContent;
        expression += buttonText;
        input.value = expression;
    });
    clearButton.addEventListener('click', function (e) { 
        input.value = ''
        expression = '' 
        result =''
    });
});

calculation.forEach(function (item1) {
    item1.addEventListener('click', function (e) { 
        var operator = e.target.textContent;

        
      
            expression += operator;
            input.value = expression;
        
    });
});

equalButton.addEventListener('click', function (e) {
    if (expression !== '') {
        // Sử dụng hàm eval() để tính toán biểu thức
        
            result = eval(expression);
            input.value = result;
      
        expression = result;
    }
});
