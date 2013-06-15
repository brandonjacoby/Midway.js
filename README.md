#Midway.js
##Automatically center responsive elements.

Midway.js makes it super easy to automatically center the responsive elements on your websites. You all know and love the absolute positioning centering technique, but what happens when those centered elements change sizes, due to percentage based layouts? That's where Midway.js comes in. Take a look at the example below, and see for yourself!

##Usage

Place the following right before </head>
``` html
<script type="text/javascript" src="midway.min.js"></script>
```

Depending on if you want your element to be centered horizontally, vertically, or both, add the following classes.
``` html
<div class="centerHorizontal centerVertical"></div>
```

##Release Notes

###v1.1
- Call the centering function whenever you would like, rather than just on load and resize. Simply call Midway();
- Midway.js now works with all elements, all the time! No more pesky bugs that would cause the element to be uncentered until you resize the browser.
- Other minor bug fixes.

##Thanks for checking out Midway.js!

