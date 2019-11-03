# Script Helper for Tumblr

by cloudythms ; https://cloudythms.tumblr.com/post/todo

questions or suggestions? [send me a message on tumblr!](https://cloudythms.tumblr.com/contact)

1. [Features](#features)
1. [Quick Start](#quick-start)
1. [Variables](#variables)
1. [Functions](#functions)
1. [Changelog](#changelog)
1. [Helper Functions](https://github.com/petracoding/tumblr/blob/master/cloudythms/plugins/helper/HELPERS.md) :arrow_upper_right:

## Features

- Many [javascript helper functions](https://github.com/petracoding/tumblr/blob/master/cloudythms/plugins/helper/HELPERS.md) that you can use in your code
- Automatic redirects defined by you
- Adds helpful css classes to body element (which can be then used in your css or js)
  - '-loaded' when DOM is loaded
  - '-loaded-images' when all images have been loaded
  - '-param-_KEY_--_VALUE_' for each GET parameter (e.g. ?something=bla)
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
<script src="https://cdn.jsdelivr.net/gh/petracoding/tumblr@latest/cloudythms/plugins/helper/helper.js"></script>
```

Note! You will automatically get new versions of the script within 24 hours of release.

## Variables

You can overwrite the default values of some variables like so (**after** the script tag from above):

```html
<script>
  ct_scrollToTopMs = 600;
  ct_pt_homeHasPosts = false;
  ct_redirects = {
    'rules' : 'about#rules',
    'contact' : 'support'
  };
</script>
```

Variable (with default value) | Description | Type
----------------------------- | ----------- | ----
`ct_scrollToTopMs = 500;` | How long scrolling to the top should take (in milliseconds) | number \[ms]
`ct_scrollToTopBreakpoint = 20;` | After how many pixels from the top the scroll-to-top button should show | number \[px]
`ct_postSelector = '.post';` | CSS Selector for one post | string
`ct_tagSelector = '.tag';` | CSS Selector for one tag (of a post) | string
`ct_tagsToAdd = [];` | Tags that should be added as CSS classes to the posts | string array
`ct_redirects = {};` | Object of (internal) redirects. Key: old page url (e.g. "contact"). Value: new page url (e.g. "support"). (Without "/") | object
`ct_externalRedirects = {};` | Same as ct_redirects, except that the values are external urls (e.g. "https://www.google.com/") | object
`ct_pt_homeHasPosts = true;` | Sets whether the homepage shows posts | boolean
`ct_pt_wordsToDetectOnPages = [];` | Words that should be looked for in the content of a page | string array
`ct_pt_pageTypesToDetectWordsOn = ['custom', 'post'];` | Page types on which to look for words (see above) | string array


## Functions

Here are some function you can use:

Function | Example | Description
-------- | ------- | -----------
`isPageType(type)` | `console.log(isPageType('submit'));` | Returns a boolean if the current page is of a type (string)
`printPageTypes()` | `printPageTypes();` | Output a list of all current page types into the console

## Page and post types

Here are all the page types the plugin can detect.

Name | CSS Class | Description | Typical URLs
---- | --------- | ----------- | ------------
n/a | -loaded | DOM is loaded | all
n/a | -loaded-images | All images have been loaded | all
n/a | --param-KEY--VALUE | URL has GET a parameter with key "KEY" and value "VALUE" (e.g. ?key=value) | all
home | --home | Homepage | /
posts | --posts | Page shows multiple posts | /, /page/...
tag | --tag --tag-TAG | Search results of a tag | /tagged/...
post | --post --post-POSTID | Permalink page of one post | /post/...
page | --page | A page | /bla
ask | --ask | Default ask page | /ask
submit | --submit | Default submit page | /submit
custom | --custom -custom-URL | ? | ?
chrono | --chrono | Chronological sorting | /.../chrono
day | --day | Day page | /day/2019/02/14
contains-WORD | --contains-WORD | Page that contains this word | all

And the following classes are added to posts:

CSS Class | Description
--------- | -----------
-tagged-TAG | A tag you defined in the settings that this post has



## Changelog

**Version 1.0.0**
- Release



## Helper Functions

Here is a list of all helper functions available. If you need any additional info, look into [the code](https://github.com/petracoding/tumblr/blob/master/cloudythms/plugins/helper/helper.js), all the information is in there!

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
`getGETParameters()` | Get all GET parameters (e.g. ?something=bla) as object (or null if there are none)
