import $ from  'jquery';
console.log('From AppJs'); 

$.noConflict();
$(document).ready(function(){
    console.log('From AppJs jquery');
    $('[data-toggle="tooltip"]').tooltip(); 
    console.log('From Jquery hot or not ');
});

const sayHello = () => {
    console.log('Hello!');
}
sayHello();