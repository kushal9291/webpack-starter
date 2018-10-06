//Adding JS
import 'bootstrap';
import $ from 'jquery';  

//Adding CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';



console.log('From AppJs');

$.noConflict();
$(document).ready(function(){
    console.log('From AppJs jquery');
    $('[data-toggle="tooltip"]').tooltip(); 
});