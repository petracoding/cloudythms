# Script Helper for Tumblr

:earth_americas: https://cloudythms.tumblr.com/post/todo

1. [Features](#features)
1. [Quick Start](#quick-start)
1. [Variables](#variables)
1. [Functions](#functions)

## Features

- Many javascript helper functions that you can use in your code
- Automatic redirects defined by you
- Shows/hides element with id #scrolltotop after scrolling a certain amount

... and many more things that aren't done automatically, but which you can do with functions.

## Quick Start

This plugin requires jQuery.

After your body content and jquery link, include the Script Helper like so: 

```html
<script src="https://cdn.jsdelivr.net/gh/petracoding/cloudythms@latest/plugins/scripthelper/helper.js"></script>
```

Note: You will automatically get new versions of the script within 24 hours of release.

## Variables

You can overwrite the default values of some variables like so (**after** the script tag from above):

```html
<script>
  ct_scrollToTopMs = 600;
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


## Functions

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
