$(document).ready(function(){
    str = '';
    data.map(function(elem, index){
            str += ' ' + elem.name;
            console.log(elem);

    });
    $('.obj').text(str);
});