window.addEventListener('load', function(e){
   
    var inp1 = document.querySelector('.inp1');
    var inp2 = document.querySelector('.inp2');
    var btn = document.querySelector('.go');
    var res = document.querySelector('.res');
    
    btn.addEventListener('click', function(){
    	var sum = parseFloat(inp1.value) + parseFloat(inp2.value);
    	res.innerHTML = sum;
    	btn.disabled = true;
    });

});

