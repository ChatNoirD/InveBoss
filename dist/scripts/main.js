/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/footer.js":
/*!***************************!*\
  !*** ./scripts/footer.js ***!
  \***************************/
/***/ (() => {

eval("var $telegBtn = document.querySelector('#telegBtn');\nvar $mailBtn = document.querySelector('#mailBtn'); // Including listeners to Telegram and e-mail submit buttons\n\n$telegBtn.addEventListener('mouseenter', function (event) {\n  event.stopPropagation();\n  event.target.classList.add('hover_btn');\n});\n$telegBtn.removeEventListener('mouseenter', function (event) {\n  event.target.classList.add('hover_btn');\n});\n$mailBtn.addEventListener('mouseenter', function (event) {\n  event.stopPropagation();\n  event.target.classList.add('hover_btn');\n});\n$mailBtn.removeEventListener('mouseenter', function (event) {\n  event.target.classList.add('hhover_btn');\n});\n$telegBtn.addEventListener('mouseleave', function (event) {\n  event.stopPropagation();\n  event.target.classList.remove('hover_btn');\n});\n$telegBtn.removeEventListener('mouseleave', function (event) {\n  event.target.classList.remove('hover_btn');\n});\n$mailBtn.addEventListener('mouseleave', function (event) {\n  event.stopPropagation();\n  event.target.classList.remove('hover_btn');\n});\n$mailBtn.removeEventListener('mouseleave', function (event) {\n  event.target.classList.remove('hover_btn');\n});\n$telegBtn.addEventListener('mousedown', function (event) {\n  event.stopPropagation();\n  event.target.classList.add('clicked_btn');\n});\n$telegBtn.removeEventListener('mousedown', function (event) {\n  event.target.classList.add('clicked_btn');\n});\n$telegBtn.addEventListener('mouseup', function (event) {\n  event.stopPropagation();\n  event.target.classList.remove('clicked_btn');\n});\n$telegBtn.removeEventListener('mouseup', function (event) {\n  event.target.classList.remove('clicked_btn');\n});\n$mailBtn.addEventListener('mousedown', function (event) {\n  event.stopPropagation();\n  event.target.classList.add('clicked_btn');\n});\n$mailBtn.removeEventListener('mousedown', function (event) {\n  event.target.classList.add('clicked_btn');\n});\n$mailBtn.addEventListener('mouseup', function (event) {\n  event.stopPropagation();\n  event.target.classList.remove('clicked_btn');\n});\n$mailBtn.removeEventListener('mouseup', function (event) {\n  event.target.classList.remove('clicked_btn');\n});\nvar mailInp = document.querySelector('#footEmail');\nmailInp.addEventListener('input', function (event) {\n  var inpText = event.target.value;\n\n  if (inpText.length <= 19) {\n    event.target.style.fontSize = 14 + \"px\";\n  } else {\n    event.target.style.fontSize = 12 + \"px\";\n  }\n});\nmailInp.removeEventListener('input', function (event) {\n  var inpText = event.target.value;\n\n  if (inpText.length <= 19) {\n    event.target.style.fontSize = 14 + \"px\";\n  } else {\n    event.target.style.fontSize = 12 + \"px\";\n  }\n});\n\n//# sourceURL=webpack:///./scripts/footer.js?");

/***/ }),

/***/ "./scripts/lang.js":
/*!*************************!*\
  !*** ./scripts/lang.js ***!
  \*************************/
/***/ (() => {

eval("var $lang = document.querySelector('.specLink-lang');\nvar $minLang = document.querySelector('.specLink-lang-min');\nvar $arrowL = document.querySelector('#langArrow');\nvar $mainBlock = document.querySelector('main');\n$lang.addEventListener('click', function (event) {\n  event.stopImmediatePropagation;\n  $minLang.classList.add('active');\n  $arrowL.style.transform = 'rotate(180deg)';\n});\n$lang.removeEventListener('click', function (event) {\n  event.stopImmediatePropagation;\n  $minLang.classList.add('active');\n  $arrowL.style.transform = 'rotate(180deg)';\n});\n$minLang.addEventListener('mouseover', function (event) {\n  event.stopImmediatePropagation;\n  $minLang.classList.add('active');\n  $arrowL.style.transform = 'rotate(180deg)';\n});\n$minLang.removeEventListener('mouseover', function (event) {\n  event.stopImmediatePropagation;\n  $minLang.classList.add('active');\n  $arrowL.style.transform = 'rotate(180deg)';\n});\n$minLang.addEventListener('mouseout', function (event) {\n  event.stopImmediatePropagation;\n  $minLang.classList.remove('active');\n  $arrowL.style.transform = 'rotate(0deg)';\n});\n$mainBlock.removeEventListener('mouseout', function (event) {\n  event.stopImmediatePropagation;\n  $minLang.classList.remove('active');\n  $arrowL.style.transform = 'rotate(0deg)';\n});\n\n//# sourceURL=webpack:///./scripts/lang.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/footer.scss */ \"./styles/footer.scss\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ \"./index.html\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ \"./scripts/footer.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.js */ \"./scripts/search.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_search_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_searchclr_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/searchclr.scss */ \"./styles/searchclr.scss\");\n/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lang.js */ \"./scripts/lang.js\");\n/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lang_js__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./scripts/main.js?");

/***/ }),

/***/ "./scripts/search.js":
/*!***************************!*\
  !*** ./scripts/search.js ***!
  \***************************/
/***/ (() => {

eval("var $srchLay = document.querySelector('.header_link-search');\nvar $srchField = document.querySelector('.header_searchField');\nvar $mainBlock = document.querySelector('main');\n$srchLay.addEventListener('click', function () {\n  $srchField.style.display = 'block';\n});\n$srchLay.removeEventListener('click', function () {\n  $srchField.style.display = 'block';\n});\ndocument.addEventListener('scroll', function () {\n  $srchField.style.display = 'none';\n});\ndocument.removeEventListener('scroll', function () {\n  $srchField.style.display = 'none';\n});\n$mainBlock.addEventListener('click', function () {\n  $srchField.style.display = 'none';\n});\n$mainBlock.removeEventListener('click', function () {\n  $srchField.style.display = 'none';\n});\ndocument.addEventListener('keyup', function (event) {\n  if (event.keyCode == 13) {\n    $srchField.style.display = 'none';\n  }\n});\ndocument.removeEventListener('keyup', function (event) {\n  if (event.keyCode == 13) {\n    $srchField.style.display = 'none';\n  }\n});\n\n//# sourceURL=webpack:///./scripts/search.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./public/logo.png */ \"./public/logo.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./public/search.png */ \"./public/search.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./public/hotLine.png */ \"./public/hotLine.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./public/enter.png */ \"./public/enter.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./public/arrow.png */ \"./public/arrow.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./public/en.png */ \"./public/en.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./public/de.png */ \"./public/de.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./public/ru.png */ \"./public/ru.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./public/main_top_girlPic.png */ \"./public/main_top_girlPic.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./public/main_top_arrow.png */ \"./public/main_top_arrow.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./public/phone.png */ \"./public/phone.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./public/arrowright.png */ \"./public/arrowright.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./public/slide.png */ \"./public/slide.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./public/telegram icon grey.png */ \"./public/telegram icon grey.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./public/icon-letter.png */ \"./public/icon-letter.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./public/ПОДВАЛ_Лого.png */ \"./public/ПОДВАЛ_Лого.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./public/linkedin.png */ \"./public/linkedin.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./public/tweeter.png */ \"./public/tweeter.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./public/facebook.png */ \"./public/facebook.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./public/instagram.png */ \"./public/instagram.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./public/youtube.png */ \"./public/youtube.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n    <head>\\r\\n        <meta charset=\\\"UTF-8\\\">\\r\\n        <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n        <title>Inveboss</title>\\r\\n    </head>\\r\\n    <body>\\r\\n        <header>\\r\\n            <div class=\\\"header_container\\\">\\r\\n                <a href=\\\"#\\\" id=\\\"logo\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"Site logo\\\" /></a>\\r\\n                <div class=\\\"header_links\\\">\\r\\n                    <ul class=\\\"header_links_mainlinks_list\\\">\\r\\n                        <li class=\\\"header_link\\\"><a href=\\\"#\\\">Инвестировать</a></li>\\r\\n                        <li class=\\\"header_link\\\"><a href=\\\"#\\\">Купить безнес</a></li>\\r\\n                        <li class=\\\"header_link\\\"><a href=\\\"#\\\">Франшиза</a></li>\\r\\n                        <li class=\\\"header_link\\\"><a href=\\\"#\\\">Найти инвестора</a></li>\\r\\n                        <li class=\\\"header_link header_link_prices\\\">\\r\\n                            <a href=\\\"#\\\">Услуги и цены</a>\\r\\n                            <ul class=\\\"header_link_prices-min\\\">\\r\\n                                <li class=\\\"header_link_prices-min_link\\\"><a href=\\\"#\\\">Размещение на сайте</a></li>\\r\\n                                <li class=\\\"header_link_prices-min_link\\\"><a href=\\\"#\\\">Сопровождение проектов</a></li>\\r\\n                                <li class=\\\"header_link_prices-min_link\\\"><a href=\\\"#\\\">Консалтинг</a></li>\\r\\n                                <li class=\\\"header_link_prices-min_link\\\"><a href=\\\"#\\\">Юридические услуги</a></li>\\r\\n                                <li class=\\\"header_link_prices-min_link\\\"><a href=\\\"#\\\">Дизайн</a></li>\\r\\n                                <li class=\\\"header_link_prices-min_link\\\"><a href=\\\"#\\\">Маркетинг</a></li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        <li class=\\\"header_link header_link-search\\\">\\r\\n                            <img class=\\\"search-reg\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"Поиск\\\" />\\r\\n                            <input class=\\\"header_searchField\\\" type=\\\"search\\\" name=\\\"search\\\" id=\\\"srch\\\" placeholder=\\\"Введите слово или фразу для поиска\\\">\\r\\n                            <img class=\\\"search-reg-act\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"Поиск\\\" />\\r\\n                        </li>\\r\\n                    </ul>\\r\\n                    <div class=\\\"header_vrtLine\\\"></div>\\r\\n                    <ul class=\\\"header_specLinks\\\">\\r\\n                        <li class=\\\"header_link header_specLink hotline\\\"><a href=\\\"#\\\">Горячая линия</a><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"Hotline Icon\\\" /></li>\\r\\n                        <li class=\\\"header_link header_specLink enter\\\"><a href=\\\"#\\\">Вход</a><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"Enter Icon\\\" /></li>\\r\\n                        <li class=\\\"header_link header_specLink specLink-lang\\\"><a href=\\\"#\\\">En</a><img id=\\\"langArrow\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"Choose language Icon\\\" />\\r\\n                            <ul class=\\\"specLink-lang-min\\\">\\r\\n                                <li class=\\\"specLink-lang-min_item\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"English\\\"><a href=\\\"#\\\">English</a></li>\\r\\n                                <li class=\\\"specLink-lang-min_item\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"Deutsch\\\"><a href=\\\"#\\\">Deutsch</a></li>\\r\\n                                <li class=\\\"specLink-lang-min_item\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"Русский\\\"><a href=\\\"#\\\">Русский</a></li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                    </ul>\\r\\n                </div>\\r\\n            </div>\\r\\n        </header>\\r\\n        <main>\\r\\n            <div class=\\\"main_container\\\">\\r\\n                <div class=\\\"main_titleBlock\\\">\\r\\n                    <section class=\\\"main_titleBlock_text\\\">\\r\\n                        <h1>Начни <span class=\\\"aqua\\\">свой бизнес</span> с нами</h1>\\r\\n                        <p>\\r\\n                            Выберите франшизу<br>из 85 000 предложений Европы<br>Фильтр по интересам и инвестициям.\\r\\n                        </p>\\r\\n                    </section>\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"\\\" />\\r\\n                    <img class=\\\"main_topArrow\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"\\\" />\\r\\n                </div>\\r\\n                <section class=\\\"main_inputTop_container\\\">\\r\\n                    <ul class=\\\"main_inputTop_links\\\">\\r\\n                        <li class=\\\"main_inputTop_link main_inputTop_link-active\\\"><a href=\\\"#\\\">Инвест проект</a></li>\\r\\n                        <li class=\\\"main_inputTop_link\\\"><a href=\\\"#\\\">Купить бизнес</a></li>\\r\\n                        <li class=\\\"main_inputTop_link\\\"><a href=\\\"#\\\">Франшиза</a></li>\\r\\n                        <li class=\\\"main_inputTop_link\\\"><a href=\\\"#\\\">Найти инвестора</a></li>\\r\\n                    </ul>\\r\\n                    <div class=\\\"main_inputTop_formWrapper\\\">\\r\\n                        <div class=\\\"main_inputTop_formTitles\\\">\\r\\n                            <p class=\\\"keyword\\\">\\r\\n                                Ключевое слово\\r\\n                            </p>\\r\\n                            <p>\\r\\n                                Страна\\r\\n                            </p>\\r\\n                        </div>\\r\\n                        <form class=\\\"main_inputTop_form\\\" action=\\\"#\\\" method=\\\"post\\\">\\r\\n                            <input type=\\\"text\\\" name=\\\"keyword\\\" id=\\\"keyword\\\" />\\r\\n                            <select name=\\\"country\\\" id=\\\"country\\\"></select>\\r\\n                            <input type=\\\"submit\\\" name=\\\"sub-Button\\\" id=\\\"btn-top\\\" value=\\\"Поиск\\\" />\\r\\n                        </form>\\r\\n                        <a class=\\\"main_inputTop_form_link\\\" href=\\\"#\\\">Расширенные настройки</a>\\r\\n                    </div>\\r\\n                </section>\\r\\n            </div>\\r\\n            <div class=\\\"main_advantages_container\\\">\\r\\n                <h2>Преимущества</h2>\\r\\n                <ul class=\\\"main_advantages_info\\\">\\r\\n                    <li class=\\\"main_advantages_info_blocks\\\"\\r\\n                    ><h3>25+</h3>\\r\\n                        <p>\\r\\n                            Разнообразный и богатый опыт говорит нам, что граница обучения кадров влечет за собой.\\r\\n                        </p>\\r\\n                    </li>\\r\\n                    <li class=\\\"main_advantages_info_blocks\\\">\\r\\n                        <h3>2020</h3>\\r\\n                        <p>\\r\\n                            С 2020 года безусловно, семантический разбор 45+ внешних возможностях форм.\\r\\n                        </p>\\r\\n                    </li>\\r\\n                    <li class=\\\"main_advantages_info_blocks\\\">\\r\\n                        <h3>200+</h3>\\r\\n                        <p>\\r\\n                            Безусловно, семантический разбор внешних противодействий говорит о возможностях форм воздействия. Разнообразный и богатый опыт.\\r\\n                        </p>\\r\\n                    </li>\\r\\n                    <li class=\\\"main_advantages_info_blocks\\\">\\r\\n                        <h3>10k</h3>\\r\\n                        <p>\\r\\n                            Безусловно, семантика разбор внешних противодействий говорит о возможностях форм воздействия.\\r\\n                        </p>\\r\\n                    </li>\\r\\n                </ul>\\r\\n            </div>\\r\\n            <div class=\\\"main_book_wrapper\\\">\\r\\n                <img class=\\\"main_book_mob\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"Телефон\\\" />\\r\\n                <h2>Не знаете <span class=\\\"aqua\\\">с чего начать</span>?</h2>\\r\\n                <section class=\\\"main_book_container\\\">\\r\\n                    <p class=\\\"main_book_container_text-top\\\">\\r\\n                        Дарим пошаговую инструкцию по покупке бизнеса.<br>Книга из 54 страниц научит успешно покупать бизнесы и франшизы.\\r\\n                    </p>\\r\\n                    <p class=\\\"main_book_container_text-bottom\\\">\\r\\n                        Заполните поля и получите инструкцию по продаже бизнеса бесплатно\\r\\n                    </p>\\r\\n                    <form class=\\\"main_book_form\\\" action=\\\"#\\\" method=\\\"post\\\">\\r\\n                        <input type=\\\"text\\\" name=\\\"book_name\\\" id=\\\"bookName\\\" placeholder=\\\"Введите Ваше имя\\\" required/>\\r\\n                        <input type=\\\"email\\\" name=\\\"book_email\\\" id=\\\"bookEmail\\\" placeholder=\\\"Введите e-mail\\\" required/>\\r\\n                        <input type=\\\"submit\\\" value=\\\"Получить книгу\\\" id=\\\"btnBookForm\\\"/>\\r\\n                    </form>\\r\\n                </section>\\r\\n            </div>\\r\\n            <div class=\\\"main_investProd_wrapper\\\">\\r\\n                <ul class=\\\"main_inputTop_links\\\">\\r\\n                    <li class=\\\"main_inputTop_link-active\\\"><a href=\\\"#\\\">Инвест проект</a></li>\\r\\n                    <li class=\\\"main_inputTop_link\\\"><a href=\\\"#\\\">Купить бизнес</a></li>\\r\\n                    <li class=\\\"main_inputTop_link\\\"><a href=\\\"#\\\">Франшиза</a></li>\\r\\n                    <li class=\\\"main_inputTop_link\\\"><a href=\\\"#\\\">Найти инвестора</a></li>\\r\\n                </ul>\\r\\n                <section class=\\\"main_investProd_container\\\">\\r\\n                    <ul class=\\\"main_investProd_info\\\">\\r\\n                        <li class=\\\"main_investProd_info_blocks\\\"\\r\\n                        ><h3>Идея</h3>\\r\\n                            <p>\\r\\n                                Нет опыта в инветсировании? Предлагаем 42 идеи для инвестирования.\\r\\n                            </p>\\r\\n                        </li>\\r\\n                        <li class=\\\"main_investProd_info_blocks\\\">\\r\\n                            <h3>В разработке</h3>\\r\\n                            <p>\\r\\n                                Нет опыта в инветсировании? Предлагаем 42 идеи для инвестирования.\\r\\n                            </p>\\r\\n                        </li>\\r\\n                        <li class=\\\"main_investProd_info_blocks\\\">\\r\\n                            <h3>Работающие с прибылью</h3>\\r\\n                            <p>\\r\\n                                Рабочие проекты с налаженными процессами.\\r\\n                            </p>\\r\\n                        </li>\\r\\n                        <li class=\\\"main_investProd_info_blocks\\\">\\r\\n                            <h3>Работающие без прибыли</h3>\\r\\n                            <p>\\r\\n                                Всё подготовлено, осталось запустить.\\r\\n                            </p>\\r\\n                        </li>\\r\\n                    </ul>\\r\\n                    <button class=\\\"main_investProd-btn\\\"><a href=\\\"#\\\">Все инвестиционные проекты</a>\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"\\\" />\\r\\n                    </button>\\r\\n                </section>\\r\\n            </div>\\r\\n            <div class=\\\"main_investSize_wrapper\\\">\\r\\n                <h2>Выбрать размер инвестиций</h2>\\r\\n                <ul class=\\\"main_investSize_list\\\">\\r\\n                    <li><a href=\\\"#\\\">до 25 000 &#8381</a></li>\\r\\n                    <li><a href=\\\"#\\\">до 50 000 &#8381</a></li>\\r\\n                    <li><a href=\\\"#\\\">до 100 000 &#8381</a></li>\\r\\n                    <li><a href=\\\"#\\\">до 200 000 &#8381</a></li>\\r\\n                    <li><a href=\\\"#\\\">до 300 000 &#8381</a></li>\\r\\n                    <li><a href=\\\"#\\\">до 400 000 &#8381</a></li>\\r\\n                </ul>\\r\\n            </div>\\r\\n            <div class=\\\"main_popular\\\">\\r\\n                <h2>Популярные статьи</h2>\\r\\n                <ul class=\\\"main_popular_imgLinks\\\">\\r\\n                    <li class=\\\"main_popular_imgLink\\\"><a href=\\\"#\\\">20 самых<br>перспективных<br>рыночных ниш<br>в бизнесе</a></li>\\r\\n                    <li class=\\\"main_popular_imgLink\\\"><a href=\\\"#\\\">ТОП  100<br>бизнес-идей<br>производства<br>в 2021 году</a></li>\\r\\n                    <li class=\\\"main_popular_imgLink\\\"><a href=\\\"#\\\">ТОП  37<br>лучших<br>мотивирующих<br>фильмов</a></li>\\r\\n                    <li class=\\\"main_popular_imgLink\\\"><a href=\\\"#\\\">ТОП  31 идея<br>бизнеса<br>без особых<br>вложений</a></li>\\r\\n                </ul>\\r\\n                <div class=\\\"main_popular_link\\\">\\r\\n                    <a href=\\\"#\\\">Все статьи</a>\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"\\\" />\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"main_franchizes\\\">\\r\\n                <h2>О франшизах простым языком</h2>\\r\\n                <ul class=\\\"main_franchizes_imgLinks\\\">\\r\\n                    <li class=\\\"main_franchizes_imgLink\\\"><a href=\\\"#\\\">20 самых<br>перспективных<br>рыночных ниш<br>в бизнесе</a></li>\\r\\n                    <li class=\\\"main_franchizes_imgLink\\\"><a href=\\\"#\\\">ТОП  100<br>бизнес-идей<br>производства<br>в 2021 году</a></li>\\r\\n                    <li class=\\\"main_franchizes_imgLink\\\"><a href=\\\"#\\\">ТОП  37<br>лучших<br>мотивирующих<br>фильмов</a></li>\\r\\n                    <li class=\\\"main_franchizes_imgLink\\\"><a href=\\\"#\\\">ТОП  31 идея<br>бизнеса<br>без особых<br>вложений</a></li>\\r\\n                </ul>\\r\\n                <div class=\\\"main_franchizes_link\\\">\\r\\n                    <a href=\\\"#\\\">Все статьи</a>\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"\\\" />\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"main_slider_wrapper\\\">\\r\\n                <!-- Если это задумывалось как слайдер, то сделать его не получится. Картинка не полная и точки - часть рисунка-->\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"Фото\\\" />\\r\\n            </div>\\r\\n            </div>\\r\\n            <div class=\\\"main_seoart_wrapper\\\">\\r\\n                <h2>SEO-статья</h2>\\r\\n                <section class=\\\"main_seoart_textSect\\\">\\r\\n                    <p>\\r\\n                        Ясность нашей позиции очевидна: глубокий уровень погружения обеспечивает широкому кругу (специалистов) участие в формировании существующих финансовых и административных условий. Современные технологии достигли такого уровня, что выбранный нами инновационный путь позволяет оценить значение укрепления моральных ценностей. \\r\\n                    </p>\\r\\n                    <p>\\r\\n                        А также реплицированные с зарубежных источников, современные исследования функционально разнесены на независимые элементы! \\r\\n                    </p>\\r\\n                    <ul class=\\\"main_seoart_textSect_list\\\">\\r\\n                        <li>Таким образом, глубокий уровень погружения в значительной степени обусловливает важность существующих условий.</li>\\r\\n                        <li>А также сторонники тоталитаризма в науке представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом.</li>\\r\\n                        <li>\\r\\n                            Предварительные выводы неутешительны: реализация плановых заданий не даёт иного выбора, кроме определения форм воздействия.</li>\\r\\n                        <li>Сложно сказать, почему интерактивные прототипы будут обнародованы.</li>\\r\\n                    </ul>\\r\\n                    <p>\\r\\n                        Банальные, но неопровержимые выводы, а также стремящиеся вытеснить традиционное производство, нанотехнологии, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут разоблачены.\\r\\n                    </p>\\r\\n                </section>\\r\\n            </div>\\r\\n        </main>\\r\\n        <footer>\\r\\n            <div class=\\\"footer_container\\\">\\r\\n                <section class=\\\"footer_telegram\\\">\\r\\n                    <div class=\\\"footer_telegram-info\\\">\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"Иконка телеграм\\\" />\\r\\n                        <p class=\\\"footer_telegText-desk\\\">\\r\\n                            Подписаться на Telegram-бот, чтобы первым узнавать о новых предложениях и объявлениях\\r\\n                        </p>\\r\\n                        <p class=\\\"footer_telegText-pad\\\">\\r\\n                            Telegram-бот с новыми объявлениями\\r\\n                        </p>\\r\\n                    </div>\\r\\n                    <a href=\\\"#\\\"><button id=\\\"telegBtn\\\" class=\\\"footer_telegram-button\\\">Подписаться</button></a>\\r\\n                </section>\\r\\n                <section class=\\\"footer_emailForm\\\">\\r\\n                    <div class=\\\"footer_emailForm_info\\\">\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"Иконка письма\\\" />\\r\\n                        <p class=\\\"footer_emailText-desk\\\">\\r\\n                            Подписаться на рассылку инвестпроектов без спама\\r\\n                        </p>\\r\\n                        <p class=\\\"footer_emailText-pad\\\">\\r\\n                            Рассылка инвестпроектов без спама\\r\\n                        </p>\\r\\n                    </div>\\r\\n                    <form class=\\\"footer_form\\\" name=\\\"emailForm\\\" action=\\\"#\\\" method=\\\"post\\\">\\r\\n                        <input class=\\\"footer_form_input email\\\" type=\\\"email\\\" name=\\\"userEmail\\\" id=\\\"footEmail\\\" placeholder=\\\"Введите ваш e-mail\\\" />\\r\\n                        <input id=\\\"mailBtn\\\"  class=\\\"footer_form_input submit\\\" type=\\\"submit\\\" value=\\\"Подписаться\\\" />\\r\\n                    </form>\\r\\n                </section>\\r\\n                <div class=\\\"string\\\"></div>\\r\\n                <div class=\\\"footer_contain\\\">\\r\\n                    <section class=\\\"footer_logoAndLinks\\\">\\r\\n                        <a href=\\\"#\\\"><img id=\\\"logo\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" alt=\\\"Лого сайта\\\" /></a>\\r\\n                        <p>\\r\\n                            Real-time updates on construction development.\\r\\n                        </p>\\r\\n                        <ul id=\\\"swLinksList\\\">\\r\\n                            <li class=\\\"footer_socialLink\\\"><a target=\\\"_blank\\\" href=\\\"https://www.linkedin.com/\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\" alt=\\\"Иконка Линкедин\\\" /></a></li>\\r\\n                            <li class=\\\"footer_socialLink\\\"><a target=\\\"_blank\\\" href=\\\"https://twitter.com/\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" alt=\\\"Иконка Твитер\\\" /></a></li>\\r\\n                            <li class=\\\"footer_socialLink\\\"><a target=\\\"_blank\\\" href=\\\"https://facebook.com/\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" alt=\\\"Иконка Фейсбук\\\" /></a></li>\\r\\n                            <li class=\\\"footer_socialLink\\\"><a target=\\\"_blank\\\" href=\\\"https://www.instagram.com/\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\" alt=\\\"Иконка Инстаграм\\\" /></a></li>\\r\\n                            <li class=\\\"footer_socialLink\\\"><a target=\\\"_blank\\\" href=\\\"https://www.youtube.com/\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\" alt=\\\"Иконка Ютюб\\\"></a></li>\\r\\n                        </ul>\\r\\n                    </section>\\r\\n                    <section class=\\\"footer_services\\\">\\r\\n                        <h3>Услуги</h3>\\r\\n                        <ul class=\\\"footer_servicesLinks\\\">\\r\\n                            <li class=\\\"footer_link\\\"><a href=\\\"#\\\">Купить бизнес</a></li>\\r\\n                            <li class=\\\"footer_link\\\"><a href=\\\"#\\\">Инвестировать</a></li>\\r\\n                            <li class=\\\"footer_link\\\"><a href=\\\"#\\\">Франшиза</a></li>\\r\\n                            <li class=\\\"footer_link\\\"><a href=\\\"#\\\">Найти инвестора</a></li>\\r\\n                        </ul>\\r\\n                    </section>\\r\\n                    <section class=\\\"footer_conpanyAndContacts\\\">\\r\\n                        <section class=\\\"footer_conpanyAndContacts_company\\\">\\r\\n                            <h3>Компания</h3>\\r\\n                            <ul class=\\\"footer_companyLinks\\\">\\r\\n                                <li class=\\\"footer_link company\\\"><a href=\\\"#\\\">Про компанию</a></li>\\r\\n                                <li class=\\\"footer_link\\\"><a href=\\\"#\\\">Privacy Policy</a></li>\\r\\n                            </ul>\\r\\n                        </section>\\r\\n                        <section class=\\\"footer_conpanyAndContacts_contacts\\\">\\r\\n                            <h3>Контакты</h3>\\r\\n                            <ul class=\\\"footer_contactsLinks\\\">\\r\\n                                <li class=\\\"footer_link\\\"><a href=\\\"mailto:info@estabild.com\\\">info@estabild.com</a></li>\\r\\n                                <li class=\\\"footer_link\\\"><a href=\\\"tel:+460812137994\\\">+46 (0) 81-213-7994</a></li>\\r\\n                            </ul>\\r\\n                        </section>\\r\\n                    </section>\\r\\n                    <ul class=\\\"footer_otherLinks\\\">\\r\\n                        <li class=\\\"footer_link\\\"><a href=\\\"#\\\">Партнерская программа</a></li>\\r\\n                        <li class=\\\"footer_link\\\"><a href=\\\"#\\\">Блог</a></li>\\r\\n                        <li class=\\\"footer_link\\\"><a href=\\\"#\\\">Новый заказ</a></li>\\r\\n                    </ul>\\r\\n                </div>\\r\\n                <!-- Здесь пришлось дублировать код, т.к. без этого отображение данных блоков было бы некорректно в малых размерах за счет необходимых стилей для адаптации -->\\r\\n                <div class=\\\"footer_block-1024\\\">\\r\\n                    <div class=\\\"footer_string-1024\\\"></div>\\r\\n                    <ul class=\\\"swLinksList-1024\\\">\\r\\n                        <li class=\\\"footer_socialLink-1024\\\"><a target=\\\"_blank\\\" href=\\\"https://www.linkedin.com/\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\" alt=\\\"Иконка Линкедин\\\" /></a></li>\\r\\n                        <li class=\\\"footer_socialLink-1024\\\"><a target=\\\"_blank\\\" href=\\\"https://twitter.com/\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" alt=\\\"Иконка Твитер\\\" /></a></li>\\r\\n                        <li class=\\\"footer_socialLink-1024\\\"><a target=\\\"_blank\\\" href=\\\"https://facebook.com/\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" alt=\\\"Иконка Фейсбук\\\" /></a></li>\\r\\n                        <li class=\\\"footer_socialLink-1024\\\"><a target=\\\"_blank\\\" href=\\\"https://www.instagram.com/\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\" alt=\\\"Иконка Инстаграм\\\" /></a></li>\\r\\n                        <li class=\\\"footer_socialLink-1024\\\"><a target=\\\"_blank\\\" href=\\\"https://www.youtube.com/\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\" alt=\\\"Иконка Ютюб\\\"></a></li>\\r\\n                    </ul>\\r\\n                    <section class=\\\"footer_sectionAndLogo-1024\\\">\\r\\n                        <p class=\\\"footer_someInfo\\\">\\r\\n                            Real-time updates<br>on construction development.\\r\\n                        </p>\\r\\n                        <a href=\\\"#\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" alt=\\\"Лого сайта\\\" /></a>\\r\\n                        <p class=\\\"copyrights-1024\\\">\\r\\n                            Copyright © 2020. Estabild AB. All rights reserved.<br>Organization number: 559228-3211\\r\\n                        </p>\\r\\n                    </section>\\r\\n                </div>\\r\\n                <p class=\\\"copyrights\\\">\\r\\n                    Copyright © 2020. Estabild AB. All rights reserved. Organization number: 559228-3211\\r\\n                </p>\\r\\n            </div>\\r\\n        </footer>\\r\\n    </body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./styles/footer.scss":
/*!****************************!*\
  !*** ./styles/footer.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/footer.scss?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ "./styles/searchclr.scss":
/*!*******************************!*\
  !*** ./styles/searchclr.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/searchclr.scss?");

/***/ }),

/***/ "./public/arrow.png":
/*!**************************!*\
  !*** ./public/arrow.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/16b5ffa701354632fe56.png\";\n\n//# sourceURL=webpack:///./public/arrow.png?");

/***/ }),

/***/ "./public/arrowright.png":
/*!*******************************!*\
  !*** ./public/arrowright.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/94fe84602c9c689d8314.png\";\n\n//# sourceURL=webpack:///./public/arrowright.png?");

/***/ }),

/***/ "./public/de.png":
/*!***********************!*\
  !*** ./public/de.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/4c0b49c89fd627b331a3.png\";\n\n//# sourceURL=webpack:///./public/de.png?");

/***/ }),

/***/ "./public/en.png":
/*!***********************!*\
  !*** ./public/en.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/497ec860fe90f8037cae.png\";\n\n//# sourceURL=webpack:///./public/en.png?");

/***/ }),

/***/ "./public/enter.png":
/*!**************************!*\
  !*** ./public/enter.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/cbbd250ec7150670a3ed.png\";\n\n//# sourceURL=webpack:///./public/enter.png?");

/***/ }),

/***/ "./public/facebook.png":
/*!*****************************!*\
  !*** ./public/facebook.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/08e942ad0dffc28dc61f.png\";\n\n//# sourceURL=webpack:///./public/facebook.png?");

/***/ }),

/***/ "./public/hotLine.png":
/*!****************************!*\
  !*** ./public/hotLine.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/7aa2491841ddeb5f4561.png\";\n\n//# sourceURL=webpack:///./public/hotLine.png?");

/***/ }),

/***/ "./public/icon-letter.png":
/*!********************************!*\
  !*** ./public/icon-letter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/2747d15b84973aff0bd6.png\";\n\n//# sourceURL=webpack:///./public/icon-letter.png?");

/***/ }),

/***/ "./public/instagram.png":
/*!******************************!*\
  !*** ./public/instagram.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/2986656dce6888599871.png\";\n\n//# sourceURL=webpack:///./public/instagram.png?");

/***/ }),

/***/ "./public/linkedin.png":
/*!*****************************!*\
  !*** ./public/linkedin.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/1853c32b778bd04e4fe4.png\";\n\n//# sourceURL=webpack:///./public/linkedin.png?");

/***/ }),

/***/ "./public/logo.png":
/*!*************************!*\
  !*** ./public/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/5c8fdd2473ab9f304d93.png\";\n\n//# sourceURL=webpack:///./public/logo.png?");

/***/ }),

/***/ "./public/main_top_arrow.png":
/*!***********************************!*\
  !*** ./public/main_top_arrow.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/baab207b222fb0dfc3d4.png\";\n\n//# sourceURL=webpack:///./public/main_top_arrow.png?");

/***/ }),

/***/ "./public/main_top_girlPic.png":
/*!*************************************!*\
  !*** ./public/main_top_girlPic.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/c0b7830553a79dd9db9e.png\";\n\n//# sourceURL=webpack:///./public/main_top_girlPic.png?");

/***/ }),

/***/ "./public/phone.png":
/*!**************************!*\
  !*** ./public/phone.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/d74feccf7cc80aedf75c.png\";\n\n//# sourceURL=webpack:///./public/phone.png?");

/***/ }),

/***/ "./public/ru.png":
/*!***********************!*\
  !*** ./public/ru.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/dd5ce2e19ed76b970cea.png\";\n\n//# sourceURL=webpack:///./public/ru.png?");

/***/ }),

/***/ "./public/search.png":
/*!***************************!*\
  !*** ./public/search.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/667f5a0c31aeddf8b044.png\";\n\n//# sourceURL=webpack:///./public/search.png?");

/***/ }),

/***/ "./public/slide.png":
/*!**************************!*\
  !*** ./public/slide.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/651bc64a0ea684ff898d.png\";\n\n//# sourceURL=webpack:///./public/slide.png?");

/***/ }),

/***/ "./public/telegram icon grey.png":
/*!***************************************!*\
  !*** ./public/telegram icon grey.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/bd76cb671837a870752f.png\";\n\n//# sourceURL=webpack:///./public/telegram_icon_grey.png?");

/***/ }),

/***/ "./public/tweeter.png":
/*!****************************!*\
  !*** ./public/tweeter.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/84f6d6fc6bbf0db9c61d.png\";\n\n//# sourceURL=webpack:///./public/tweeter.png?");

/***/ }),

/***/ "./public/youtube.png":
/*!****************************!*\
  !*** ./public/youtube.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/6da19fb577e0697f934d.png\";\n\n//# sourceURL=webpack:///./public/youtube.png?");

/***/ }),

/***/ "./public/ПОДВАЛ_Лого.png":
/*!********************************!*\
  !*** ./public/ПОДВАЛ_Лого.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"public/ae2518e331b842d1969e.png\";\n\n//# sourceURL=webpack:///./public/%D0%9F%D0%9E%D0%94%D0%92%D0%90%D0%9B_%D0%9B%D0%BE%D0%B3%D0%BE.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main.js");
/******/ 	
/******/ })()
;