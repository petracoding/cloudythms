# Script Helper for Tumblr

by cloudythms ; https://cloudythms.tumblr.com/post/todo

questions or suggestions? [send me a message on tumblr!](https://cloudythms.tumblr.com/contact)

- [Features]()
- [Quick Start]()
- [Variables]()
- [Functions]()
- [Helper Functions]()

## Features

- Many [javascript helper functions]() that you can use in your code
- Adds helpful css classes to body element (which can be then used in your css or js)
  - '-loaded' when DOM is loaded
  - '-loaded-images' when all images have been loaded
  - '-TYPE' for each page type, for example: '-home, -posts'
- Adds helpful css classes to post elements (which can be then used in your css or js)
  - '-tagged-TAG' for each tag you define in the settings, for example: '-TAGGED-my-art'
- Shows/hides element with id #scrolltotop after scrolling a certain amount

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
  ct_scrollToTopBreakpoint = 30;
</script>
```

_ct_pageTypeOptions_ should be overwritten with the setPageTypeOptions() function:

```html
<script>
  setPageTypeOptions({
      homeHasPosts: false,
      tagsToDetect: ['hashtag'],
      wordsToDetectInCustomURLs: ['tags'],
      wordsToDetectOnPages: ['submit'],
      pageTypesToDetectWordsOn: []
  });
</script>
```

These are the variables:

Variable (with default value) | Description | Type
----------------------------- | ----------- | ----
let ct_scrollToTopMs = 500; | How long scrolling to the top should take (in milliseconds) | number \[ms]
let ct_scrollToTopBreakpoint = 20; | After how many pixels from the top the scroll-to-top button should show | number \[px]
let ct_postSelector = '.post'; | CSS Selector for one post | string
let ct_tagSelector = '.tag'; | CSS Selector for one tag (of a post) | string
let ct_tagsToAdd = \[]; | Tags that should be added as CSS classes to the posts | string array

## Functions

Here are some function you can use:

Function | Example | Description
-------- | ------- | -----------
`isPageType(type)` | `console.log(isPageType('submit'));` | Returns a boolean if the current page is of a type (string)
`printPageTypes()` | `printPageTypes();` | Output a list of all current page types into the console

## Helper functions

Here is a list of all helper functions available. If you need any additional info, look into the code, all the information is in there!

Function | Description
-------- | -----------
`objectIdsUnique(objArray, idParameterName, allowNullIds)` | Tells you whether the ids of the objects in an array are all unique
