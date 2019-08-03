[<< back to docs](https://github.com/petracoding/tumblr/blob/master/cloudythms/plugins/helper/README.md)

# Helper Functions

Here is a list of all helper functions available. If you need any additional info, look into [the code](https://github.com/petracoding/tumblr/blob/master/cloudythms/plugins/helper/helper.js), all the information is in there!

## Objects

Function | Description
-------- | -----------
`objectIdsUnique(objArray, idParameterName, allowNullIds)` | Tells you whether the ids of the objects in an array are all unique
`objectOkay(obj, propsNotAllowedNull, stringPropsNotAllowedEmpty, arraysPropsNotAllowedEmpty)` | Tells you whether an object is ok (= does not have unallowed null/empty values). Takes an object and 3 string arrays of property names
`fixObjectArray(objArray, propsNotAllowedNull, stringPropsNotAllowedEmpty, arraysPropsNotAllowedEmpty)` | Removes all non-ok objects from an array (ok = does not have unallowed null/empty values)
`fillUpDefaults(obj, defaultObj)` | Fills up an object with default values of properties
`fillUpAllDefaults(objArray, defaultObj)` | Fills up objects with default values of properties


## Strings

Function | Description
-------- | -----------
`stringOkay(str)` | Checks if a string exists and isn't empty
`strContains(str, substr, caseSensitive = false, onlyMatchWholeWords = false)` | Checks if a string contains another string
`charIsNumber(c)` | Checks if a character is a number (0-9)
`firstCharIsNumber(str)` | Checks if the first character of a string is a number (0-9)
`makeSafeForCSS(str, makeFirstCharSafe = true, prefix = "")` | Makes a string safe for usage in css classes/ids
`makeFirstCharSafeForCSS(str, safeChar = "_")` | Makes the first character of a string safe for usage in css classes/ids


## Arrays

Function | Description
-------- | -----------
`arrayIsEmpty(arr)` | Checks if an array exists and has elements
`stringArrayIsEmpty(arr)` | Checks if a string array exists, has elements, and doesn't only have empty strings
`arraysOverlap(arr1, arr2)` | Checks if two arrays share at least one value
`intersectionOfArrays(arr1, arr2)` | Returns an array with values that are in both arrays
`makeArrayLowercase(arr)` | Returns the array with all elements in lowercase
`makeArrayUppercase(arr)` | Returns the array with all elements in uppercase


## Others

Function | Description
-------- | -----------
`copyToClipboard(stringToCopy)` | Copies a string to the user's clipboard
`pageContains(str)` | Check if the page contains a whole word
