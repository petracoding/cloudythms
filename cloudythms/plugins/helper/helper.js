// SCRIPT HELPER by Cloudythms
// post => https://cloudythms.tumblr.com/post/todo
// docs => https://github.com/petracoding/tumblr/tree/master/cloudythms/plugins/helper
// v 0.0.0

// Include like so:
// <script src="https://cdn.jsdelivr.net/gh/petracoding/tumblr@latest/cloudythms/plugins/helper/helper.js"></script>
// requires jQuery!

// Variables ------------------------------------------

let ct_scrollToTopMs = 500;
let ct_scrollToTopBreakpoint = 20;
let ct_postSelector = '.post';
let ct_tagSelector = '.tag';
let ct_tagsToAdd = ['theme', 'blogtheme'];

let ct_pt_homeHasPosts = true;
let ct_pt_wordsToDetectOnPages = [];
let ct_pt_pageTypesToDetectWordsOn = ['custom', 'post'];

// Add classes to body --------------------------------

$(document).ready(function() {
    $('body').addClass('-loaded');
    ct_getPageTypes().forEach(function(pageType) {
        $('body').addClass('--' + pageType);
    });
    ct_addTagsToPostClasses();
});

$(window).bind('load', function() {
    $('body').addClass('-loaded-images');
});

// Scroll To Top --------------------------------------

$(function() {
    $('#scrolltotop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, ct_scrollToTopMs);
    });
});

$(window).scroll(function() {
    if (
        document.body.scrollTop > ct_scrollToTopBreakpoint ||
        document.documentElement.scrollTop > ct_scrollToTopBreakpoint
    ) {
        $('#scrolltotop').css('opacity', '1');
    } else {
        $('#scrolltotop').css('opacity', '0');
    }
});

// Add tags as css classes ----------------------------

function ct_addTagsToPostClasses() {
    let tagList = makeArrayLowercase(ct_tagsToAdd);
    let tags = [];
    $(ct_postSelector).each(function() {
        $(this)
            .find(ct_tagSelector)
            .each(function() {
                let tag = $(this).data('tag');
                if (tagList.includes(tag.toLowerCase())) {
                    tags.push('-tagged-' + makeSafeForCSS(tag, false));
                }
            });
        $(this).addClass(tags.join(' '));
    });
}

// Add classes to body --------------------------------

const url = window.location.pathname;
// const url = '/tagged/jskdlf'; // TESTING

let ct_pageTypes = null;

function printPageTypes() {
    console.log('Page Types: ' + ct_getPageTypes().join(', '));
}

function isPageType(type) {
    return ct_getPageTypes().includes(type);
}

function ct_getPageTypes() {
    if (!ct_pageTypes) {
        ct_pageTypes = ct_generatePageTypes();
    }
    return ct_pageTypes;
}

function ct_generatePageTypes() {
    ct_pageTypes = [];

    if (url === '/') {
        ct_pageTypes.push('home');
        if (ct_pageTypeOptions.homeHasPosts) {
            ct_pageTypes.push('posts');
        }
    } else if (strContains(url, '/page/')) {
        ct_pageTypes.push('posts');
    } else if (strContains(url, '/tagged/')) {
        ct_pageTypes.push('posts');
        let searchAfter = '/tagged/';
        let startIndex = url.indexOf(searchAfter) + searchAfter.length;
        let tag = url.substring(startIndex);
        ct_pageTypes.push('tag');
        ct_pageTypes.push('tag-' + tag);
    } else if (strContains(url, '/post/')) {
        let searchAfter = '/post/';
        let startIndex = url.indexOf(searchAfter) + searchAfter.length;
        let indexOfSecondSlash = url.indexOf('/', startIndex);
        let id;
        if (indexOfSecondSlash >= 0) {
            id = url.substring(startIndex, url.indexOf('/', startIndex));
        } else {
            id = url.substring(startIndex);
        }
        ct_pageTypes.push('post');
        ct_pageTypes.push('post-' + id);
    } else if (url.endsWith('/ask')) {
        ct_pageTypes.push('ask');
        ct_pageTypes.push('page');
    } else if (url.endsWith('/submit')) {
        ct_pageTypes.push('submit');
        ct_pageTypes.push('page');
    } else {
        ct_pageTypes.push('custom');
        ct_pageTypes.push('page');

        let customUrl = url.substring(1);
        let safeCustomUrl = makeSafeForCSS(customUrl, false);
        ct_pageTypes.push('custom-' + safeCustomUrl);
    }

    if (url.endsWith('/chrono')) ct_pageTypes.push('chrono');

    if (
        !arrayIsEmpty(ct_pageTypeOptions.wordsToDetectOnPages) &&
        arraysOverlap(ct_pageTypeOptions.pageTypesToDetectWordsOn, ct_pageTypes)
    ) {
        ct_pageTypeOptions.wordsToDetectOnPages.forEach(function(word) {
            if (pageContains(word)) {
                ct_pageTypes.push('contains-' + makeSafeForCSS(word, false));
            }
        });
    }

    return ct_pageTypes;
}

// ----------------------------------------------------
// ----------------------------------------------------
// ------------------ H E L P E R S -------------------
// ----------------------------------------------------
// ----------------------------------------------------

//******************************************************************
//*************************** OBJECTS ******************************
//******************************************************************

/*
    FUNCTION objectIdsUnique RETURNS boolean
    Tells you whether the ids of the objects in an array are all unique
    - Params:
        objArray (array of objects)
        idParamterName (string, defaults to "id")
        allowNullIds (boolean) 
    - Example:
        console.log(objectIdsUnique(myObjects, "theId", false));
*/
function objectIdsUnique(objArray, idParameterName, allowNullIds) {
    if (idParameterName === undefined) idParameterName = 'id';
    if (allowNullIds === undefined) allowNullIds = false;
    let usedIds = [];
    let i;
    let id;
    for (i = 0; i < objArray.length; ++i) {
        if (objArray[i].hasOwnProperty(idParameterName)) {
            id = objArray[i][idParameterName];
            if (!allowNullIds && !id) continue;
            if (usedIds.includes(id)) return false;
            usedIds.push(id);
        } else if (!allowNullIds) {
            return false;
        }
    }
    return true;
}

/*
    FUNCTION objectOkay RETURNS boolean
    Tells you whether an object is ok (= does not have unallowed null/empty values)
    - Params:
        obj (object)
        propsNotAllowedNull (array of parameter names that are not allowed to be undefined/null) (default: [])
        stringPropsNotAllowedEmpty (array of parameter names that are not allowed to be an empty string) (default: [])
        arraysPropsNotAllowedEmpty (array of parameter names that are not allowed to be an empty array) (default: [])
    - Example:
        console.log(objectOkay(myObject, ["id"], ["name"], ["tags"]));
*/
function objectOkay(obj, propsNotAllowedNull, stringPropsNotAllowedEmpty, arraysPropsNotAllowedEmpty) {
    if (propsNotAllowedNull === undefined) propsNotAllowedNull = [];
    if (stringPropsNotAllowedEmpty === undefined) stringPropsNotAllowedEmpty = [];
    if (arraysPropsNotAllowedEmpty === undefined) arraysPropsNotAllowedEmpty = [];
    let ok = true;
    propsNotAllowedNull.forEach(function(p) {
        if (!obj.hasOwnProperty(p)) ok = false;
    });
    for (var p in obj) {
        if (obj.hasOwnProperty(p) && propsNotAllowedNull.includes(p)) {
            if (obj[p] === undefined || obj[p] === null) {
                ok = false;
            }
        }
        if (obj.hasOwnProperty(p) && stringPropsNotAllowedEmpty.includes(p)) {
            if (!stringOkay(obj[p])) {
                ok = false;
            }
        }
        if (obj.hasOwnProperty(p) && arraysPropsNotAllowedEmpty.includes(p)) {
            if (arrayIsEmpty(obj[p])) {
                ok = false;
            }
        }
    }
    return ok;
}

/*
    FUNCTION fixObjectArray RETURNS array of objects
    Removes all non-ok objects from an array (ok = does not have unallowed null/empty values)
    - Params:
        objArray (array of objects)
        propsNotAllowedNull (array of parameter names that are not allowed to be undefined/null) (default: [])
        stringPropsNotAllowedEmpty (array of parameter names that are not allowed to be an empty string) (default: [])
        arraysPropsNotAllowedEmpty (array of parameter names that are not allowed to be an empty array) (default: [])
    - Example:
        myObjectsFixed = fixObjectArray(myObjects, ["id"], ["name"], ["tags"]);
*/
function fixObjectArray(objArray, propsNotAllowedNull, stringPropsNotAllowedEmpty, arraysPropsNotAllowedEmpty) {
    let i;
    let newArray = [];
    for (i = 0; i < objArray.length; ++i) {
        if (objectOkay(objArray[i], propsNotAllowedNull, stringPropsNotAllowedEmpty, arraysPropsNotAllowedEmpty)) {
            newArray.push(objArray[i]);
        }
    }
    return newArray;
}

function fillUpDefaults(obj, defaultObj) {
    let newObj = {};
    for (var p in defaultObj) {
        if (defaultObj.hasOwnProperty(p)) {
            newObj[p] = obj[p] === undefined ? defaultObj[p] : obj[p];
        }
    }
    return newObj;
}

function fillUpAllDefaults(objArray, defaultObj) {
    let i;
    let newArray = [];
    for (i = 0; i < objArray.length; ++i) {
        newArray.push(fillUpDefaults(objArray[i], defaultObj));
    }
    return newArray;
}

function makeArrayLowercase(arr) {
    let newArray = [];
    for (i = 0; i < arr.length; ++i) {
        newArray.push(arr[i].toLowerCase());
    }
    return newArray;
}

function makeArrayUppercase(arr) {
    let newArray = [];
    for (i = 0; i < arr.length; ++i) {
        newArray.push(arr[i].toUpperCase());
    }
    return newArray;
}

//******************************************************************
//*************************** STRINGS ******************************
//******************************************************************

// check if a string contains another string
function strContains(str, substr, caseSensitive = false, onlyMatchWholeWords = false) {
    if (!stringOkay(str) || !stringOkay(substr)) return false;
    if (!caseSensitive) {
        str = str.toLowerCase();
        substr = substr.toLowerCase();
    }
    if (onlyMatchWholeWords) {
        return new RegExp('\\b' + substr + '\\b').test(str);
    }
    return str.indexOf(substr) > -1;
}

// check if a string exists and isn't empty
function stringOkay(str) {
    return !(!str || !(typeof str === 'string') || /^\s*$/.test(str));
}

// check if the page contains whole words
function pageContains(str) {
    return (document.documentElement.textContent || document.documentElement.innerText).indexOf(str) > -1;
}

// check if character is actually a number
function firstCharIsNumber(str) {
    return charIsNumber(str);
}
function charIsNumber(c) {
    return c >= '0' && c <= '9';
}

//******************************************************************
//**************************** ARRAYS ******************************
//******************************************************************

// check if an array exists and has elements
function arrayIsEmpty(arr) {
    return !(arr && arr.length);
}

// check if an array exists and the strings aren't all empty
function stringArrayIsEmpty(arr) {
    if (arrayIsEmpty(arr)) return true;
    let arrIsEmpty = true;
    arr.forEach(function(str) {
        if (stringOkay(str)) {
            arrIsEmpty = false;
            return;
        }
    });
    return arrIsEmpty;
}

// check if arrays share at least 1 value
function arraysOverlap(arr1, arr2) {
    return !arrayIsEmpty(intersectionOfArrays(arr1, arr2));
}

// intersect arrays
function intersectionOfArrays(arr1, arr2) {
    return arr1.filter(x => arr2.indexOf(x) > -1);
}

//******************************************************************
//*********************** MAKE SAFE FOR ****************************
//******************************************************************

function makeSafeForCSS(str, makeFirstCharSafe = true, prefix = '') {
    if (!stringOkay(str)) {
        return '';
    }
    let safeStr = str.trim().replace(/[^a-z0-9-_]/g, function(s) {
        let c = s.charCodeAt(0);
        if (c == 32) return '-';
        if (c >= 65 && c <= 90) return s.toLowerCase();
        return '';
    });
    if (!stringOkay(safeStr)) {
        return '';
    }
    if (stringOkay(prefix)) {
        return makeSafeForCSS(prefix, makeFirstCharSafe) + safeStr;
    } else if (makeFirstCharSafe) {
        return makeFirstCharSafeForCSS(safeStr);
    } else {
        return safeStr;
    }
}

function makeFirstCharSafeForCSS(str, safeChar = '_') {
    if (firstCharIsNumber(str)) {
        let newStart = str.charAt(0).replace(/[^a-z-_]/g, safeChar + str.charAt(0));
        return newStart + str.substring(1);
    }
    return str;
}

// Copy to Clipboard
function copyToClipboard(stringToCopy) {
    var ta = document.createElement('textarea');
    ta.value = stringToCopy;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
}
