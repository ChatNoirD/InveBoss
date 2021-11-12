const $lang = document.querySelector('.specLink-lang');
const $minLang = document.querySelector('.specLink-lang-min');
const $arrowL = document.querySelector('#langArrow');
const $mainBlock = document.querySelector('main');

$lang.addEventListener('click', function(event) {
    event.stopImmediatePropagation;
    $minLang.classList.add('active');
    $arrowL.style.transform = 'rotate(180deg)';
});
$lang.removeEventListener('click', function(event) {
    event.stopImmediatePropagation;
    $minLang.classList.add('active');
    $arrowL.style.transform = 'rotate(180deg)';
});

$minLang.addEventListener('mouseover', function(event) {
    event.stopImmediatePropagation;
    $minLang.classList.add('active');
    $arrowL.style.transform = 'rotate(180deg)';
});
$minLang.removeEventListener('mouseover', function(event) {
    event.stopImmediatePropagation;
    $minLang.classList.add('active');
    $arrowL.style.transform = 'rotate(180deg)';
});

$minLang.addEventListener('mouseout', function(event) {
    event.stopImmediatePropagation;
    $minLang.classList.remove('active');
    $arrowL.style.transform = 'rotate(0deg)';
});
$mainBlock.removeEventListener('mouseout', function(event) {
    event.stopImmediatePropagation;
    $minLang.classList.remove('active');
    $arrowL.style.transform = 'rotate(0deg)';
});