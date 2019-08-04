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
`ct_redirects = {};` | Object of redirects. Key: old url (e.g. "contact"). Value: new url (e.g. "support"). (Without "/") | object
`ct_pt_homeHasPosts = true;` | Sets whether the homepage shows posts | boolean
`ct_pt_wordsToDetectOnPages = [];` | Words that should be looked for in the content of a page | string array
`ct_pt_pageTypesToDetectWordsOn = ['custom', 'post'];` | Page types on which to look for words (see above) | string array


## Functions

Here are some function you can use:

Function | Example | Description
-------- | ------- | -----------
`isPageType(type)` | `console.log(isPageType('submit'));` | Returns a boolean if the current page is of a type (string)
`printPageTypes()` | `printPageTypes();` | Output a list of all current page types into the console


## Changelog

**Version 1.0.0**
- Release



