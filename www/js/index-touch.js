var docBody = document.getElementById('main-body');

var handle = new Hammer(docBody);

var enableRightSwipe = function(){

    handle.on("panright", openOnRight);

};

var enableLeftSwipe = function(){

    handle.on("panleft", closeOnLeft);

};

handle.on("panright", openOnRight);

handle.on("panleft", closeOnLeft);

function openOnRight(){
    $('.mdl-layout__drawer-button').trigger('click');
    handle.off("panright");
    setTimeout(enableRightSwipe,1000);
}

function closeOnLeft(){
    $('.mdl-layout__drawer-button').trigger('click');
    handle.off("panleft");
    setTimeout(enableLeftSwipe,1000);


}