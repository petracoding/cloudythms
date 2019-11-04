# Pagii

:robot: https://cloudythms.tumblr.com/post/todo

1. [Features](#features)
1. [Quick Start](#quick-start)
1. [How To Use](#how-to-use)
1. [Reference](#reference)

Current Version: v1.0

## Features

- Adds css classes to the body element when the DOM/images is/are loaded
- Detects which page type (URL) the user is on (e.g. homepage, posts, page, submit, ...)
- Makes it possible to query these page types in css and javascript

## Quick Start

This plugin requires jQuery.

After your body content and jquery link, include and initialize Pagii like so: 

```html
<script src="https://static.tumblr.com/tpbx7ye/34Dq0gj69/cloudythmspagiiv1.js"></script>
<script>
  $(document).ready(function() {
      pagii();
  });
</script>
```

If your homepage does *not* show posts, use `pagii(false);` instead!

## How To Use

You can reference the page types in your css or javascript. You obviously don't have to do both.

Example: Show the homepage teaser on the homepage.

### CSS

The CSS classes are added to the `<body>` element, but there is no need to write `body.-example`, just write `.-example`

```css
.-home #homepage-teaser { /* use the css class (see: reference) */
  display: block;
}
```

### Javascript

```javascript
if(isPageType('home')) { // use the name (see: reference)
  // do something...
}

printPageTypes(); // for debugging. prints a list of current page types to the console.
```

## Reference

Here are all the page types the plugin can detect. An URL can have multiple page types. For example, /tagged/hello would be "posts" and "tag".

The CSS Class of a type is always the name with a `-` prefix.

### Page Types

Name | CSS Class(es) | Description | Typical URLs
---- | ------------- | ----------- | ------------
home | -home | Homepage | /
posts | -posts | Page that shows multiple posts | /, /page/...
tag, tag-*TAG* | -tag -tag-*TAG* | Search results of a tag | /tagged/...
search, search-*QUERY* | -search -search-*QUERY* | Search results of a string | /search/...
post, post-*POSTID* | -post, -post-*POSTID* | Permalink page of one post | /post/...
page | -page | A page | /anything (including /ask, /submit, ...)
custom | -custom -custom-*URLPATH* | A page you created | /anything (excluding /ask, /submit, ...)
ask | -ask | Default ask page | /ask
submit | -submit | Default submit page | /submit
chrono | -chrono | Chronological sorting | /.../chrono
day | -day | Day page | /day/2019/03/11
anchor | -anchor -anchor-*ID* | Url with anchor | /...#example

### Misc

Name | CSS Class(es) | Description
---- | ------------- | -----------
param-*KEY*, param-*KEY*--*VALUE* | -param-*KEY*, -param-*KEY*--*VALUE* | URL has GET a parameter with key "KEY" and value "VALUE" (e.g. ?key=value)
n/a | -loaded | DOM is loaded
n/a | -loaded-images | All images have been loaded
