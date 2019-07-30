# Script Helper for Tumblr

by cloudythms ; https://cloudythms.tumblr.com/post/todo

questions or suggestions? [send me a message on tumblr!](https://cloudythms.tumblr.com/contact)

1. [Features](#features)
1. [Quick Start](#quick-start)
1. [Variables](#variables)
1. [Functions](#functions)
1. [Helper Functions](#helper-functions)

## Features

- Many [javascript helper functions](#helper-functions) that you can use in your code
- Adds helpful css classes to body element (which can be then used in your css or js)
  - '-loaded' when DOM is loaded
  - '-loaded-images' when all images have been loaded
  - '-_TYPE_' for each page type, for example: '-home' and '-posts'
    - home, posts, tag, post, page, ask, submit, custom, chrono
    - tag-_TAG_, post-_POSTID_, custom-_URL_, contains-_WORD_
- Adds helpful css classes to post elements (which can be then used in your css or js)
  - '-tagged-TAG' for each tag you define in the settings, for example: '-TAGGED-my-art'
- Shows/hides element with id #scrolltotop after scrolling a certain amount

... and many more things that aren't done automatically, but which you can do with functions.

## Quick Start

If you don't already have jQuery in your theme, include this line:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

:bulb: Then, include the script helper like so: 

```html
<script src="https://cdn.jsdelivr.net/gh/petracoding/tumblr@latest/cloudythms/plugins/helper.js"></script>
```

Note! You will automatically get new versions of the script within 24 hours of release.

## Variables

You can overwrite the default values of some variables like so (**after** the script tag from above):

```html
<script>
  ct_scrollToTopMs = 600;
  ct_pt_homeHasPosts = false;
</script>
```

Variable (with default value) | Description | Type
----------------------------- | ----------- | ----
`ct_scrollToTopMs = 500;` | How long scrolling to the top should take (in milliseconds) | number \[ms]
`ct_scrollToTopBreakpoint = 20;` | After how many pixels from the top the scroll-to-top button should show | number \[px]
`ct_postSelector = '.post';` | CSS Selector for one post | string
`ct_tagSelector = '.tag';` | CSS Selector for one tag (of a post) | string
`ct_tagsToAdd = \[];` | Tags that should be added as CSS classes to the posts | string array
`ct_pt_homeHasPosts = true;` | Sets whether the homepage shows posts | boolean
`ct_pt_wordsToDetectOnPages = [];` | Words that should be looked for in the content of a page | string array
`ct_pt_pageTypesToDetectWordsOn = ['custom', 'post'];` | Page types on which to look for words (see above) | string array


## Functions

Here are some function you can use:

Function | Example | Description
-------- | ------- | -----------
`isPageType(type)` | `console.log(isPageType('submit'));` | Returns a boolean if the current page is of a type (string)
`printPageTypes()` | `printPageTypes();` | Output a list of all current page types into the console

## Helper Functions

Here is a list of all helper functions available. If you need any additional info, look into [the code](https://cdn.jsdelivr.net/gh/petracoding/tumblr@latest/cloudythms/plugins/helper.js), all the information is in there!


### Objects

Function | Description
-------- | -----------
`objectIdsUnique(objArray, idParameterName, allowNullIds)` | Tells you whether the ids of the objects in an array are all unique
`objectOkay(obj, propsNotAllowedNull, stringPropsNotAllowedEmpty, arraysPropsNotAllowedEmpty)` | Tells you whether an object is ok (= does not have unallowed null/empty values). Takes an object and 3 string arrays of property names
`fixObjectArray(objArray, propsNotAllowedNull, stringPropsNotAllowedEmpty, arraysPropsNotAllowedEmpty)` | Removes all non-ok objects from an array (ok = does not have unallowed null/empty values)
`fillUpDefaults(obj, defaultObj)` | Fills up an object with default values of properties
`fillUpAllDefaults(objArray, defaultObj)` | Fills up objects with default values of properties


### Strings

Function | Description
-------- | -----------
`stringOkay(str)` | Checks if a string exists and isn't empty
`strContains(str, substr, caseSensitive = false, onlyMatchWholeWords = false)` | Checks if a string contains another string
`charIsNumber(c)` | Checks if a character is a number (0-9)
`firstCharIsNumber(str)` | Checks if the first character of a string is a number (0-9)
`makeSafeForCSS(str, makeFirstCharSafe = true, prefix = "")` | Makes a string safe for usage in css classes/ids
`makeFirstCharSafeForCSS(str, safeChar = "_")` | Makes the first character of a string safe for usage in css classes/ids


### Arrays

Function | Description
-------- | -----------
`arrayIsEmpty(arr)` | Checks if an array exists and has elements
`stringArrayIsEmpty(arr)` | Checks if a string array exists, has elements, and doesn't only have empty strings
`arraysOverlap(arr1, arr2)` | Checks if two arrays share at least one value
`intersectionOfArrays(arr1, arr2)` | Returns an array with values that are in both arrays
`makeArrayLowercase(arr)` | Returns the array with all elements in lowercase
`makeArrayUppercase(arr)` | Returns the array with all elements in uppercase


### Others

Function | Description
-------- | -----------
`copyToClipboard(stringToCopy)` | Copies a string to the user's clipboard
`pageContains(str)` | Check if the page contains a whole word

