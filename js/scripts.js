window.addEventListener('load', function(e){
   
    var inp1 = document.querySelector('.inp1');
    var inp2 = document.querySelector('.inp2');
    var btn = document.querySelector('.go');
    var res = document.querySelector('.res');
    var sel = document.querySelector('select');
    
    btn.addEventListener('click', function(){
    	var operation = sel.options[sel.selectedIndex].innerHTML;
    	var sum = eval(parseFloat(inp1.value) + operation + parseFloat(inp2.value));
    	res.innerHTML = sum;
    	btn.disabled = true;
    });

    inp1.addEventListener('keypress', undisable);
    inp2.addEventListener('keypress', undisable);

    function undisable(event) {
       btn.disabled = false;
       if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
    }
    }

});

