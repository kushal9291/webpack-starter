//Adding JS
import _ from 'lodash';
import $ from 'jquery';  
require('bootstrap');


//Adding CSS
require('bootstrap/dist/css/bootstrap.min.css');
require('../css/style.css');



console.log('From AppJs');

$.noConflict();
$(document).ready(function(){
    console.log('From AppJs jquery');
    $('[data-toggle="tooltip"]').tooltip(); 
});