const $srchLay = document.querySelector('.header_link-search');
const $srchField = document.querySelector('.header_searchField');
const $mainBlock = document.querySelector('main');

$srchLay.addEventListener('click', function() {
    $srchField.style.display = 'block';
});
$srchLay.removeEventListener('click', function() {
    $srchField.style.display = 'block';
});

document.addEventListener('scroll', function() {
    $srchField.style.display = 'none';
});
document.removeEventListener('scroll', function() {
    $srchField.style.display = 'none';
});

$mainBlock.addEventListener('click', function() {
    $srchField.style.display = 'none';
});
$mainBlock.removeEventListener('click', function() {
    $srchField.style.display = 'none';
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        $srchField.style.display = 'none';
    }    
});
document.removeEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        $srchField.style.display = 'none';
    }    
});