# advanced search

By [cloudythms](https://cloudythms.tumblr.com/).
View the tumblr post [here](https://cloudythms.tumblr.com/).

[PREVIEW](https://cloudythms.tumblr.com/) / [EXAMPLE CODE](https://github.com/petracoding/tumblr/blob/master/cloudythms/plugins/advanced-search/example.html)

## Installation guide

- Add the [html](https://github.com/petracoding/tumblr/blob/master/cloudythms/plugins/advanced-search/code.html) to your theme. You can put it anywhere. Don't remove any classes. You can change texts or delete whole parts you don't need. Just be careful and test accordingly.
- Add the [css](https://github.com/petracoding/tumblr/blob/master/cloudythms/plugins/advanced-search/code.css) to your theme. (Or [scss](https://github.com/petracoding/tumblr/blob/master/cloudythms/plugins/advanced-search/code.scss) if you prefer it.) The existing styling is very boring, feel free to adjust however you want.
- Import the script like so: `<script src="https://cdn.jsdelivr.net/gh/petracoding/tumblr@latest/cloudythms/plugins/advanced-search/advanced-search.js"></script>` before `</body>`
- Below that, add the [javascript](https://github.com/petracoding/tumblr/blob/master/cloudythms/plugins/advanced-search/code.js). Change the options to whatever you want, and add your search data.
- No jQuery required, unless you want to wrap the function call in a document-ready function, which isn't required if you add the script below your content.

## If you want to use it in a theme for users

- Add the [options](https://github.com/petracoding/tumblr/blob/master/cloudythms/plugins/advanced-search/options.html) to your theme.
- Set `advancedSearchFeaturedTags` to `the string`.
- Instead of setting `advancedSearchData` write something like: `// Add you generated code here!`
- Instruct the users to add their pages as possible results within the code. They can use [this generator](https://cloudythms.tumblr.com/) to generate the code. So - no coding required for users! (Except adding the code...)
