ngTeleport
===============

<img src="https://travis-ci.org/Wildhoney/ngTeleport.png?branch=master" />
&nbsp;
<img src="https://badge.fury.io/js/ng-teleport.png" />

Example: https://ng-teleport.herokuapp.com/

All in all, `ngTeleport` has similar functionality to `ngTransclude`, but `ngTeleport` allows you to uproot a piece of the DOM and place it elsewhere. However, `ngTeleport` is entirely Angular.js aware and therefore sets up the scope and interpolation for you.

**Note:** Using `ngTeleport` to move elements around the DOM for responsiveness is no longer recommended &ndash; [use Flexbox](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes) instead. For cases where you require the same functionality for [non-supported browsers](http://caniuse.com/#search=flexbox) explain to your CTO that complicating the codebase's architecture to support a handful of antiquated browsers is absurd.

Getting Started
---------------

First of all you need to define the `ng-teleport` attribute with a unique identifier for the scope on any DOM element you wish to teleport &ndash; this allows `ngTeleport` to take a note of the precompiled HTML. Once you've defined the `ng-teleport` you're free to move it around wherever you wish. Simply add `teleport` to your directive, and invoke it with the `source` (DOM node with the `ng-teleport` attribute), `target`, and <a href="#options">any additional options</a>.

```html
<section ng-teleport="myElement">

</section>
```

With the above code `section` is now all ready to be teleported anywhere in the DOM where there is a valid Angular scope.

```javascript
teleport(sectionElement, someOtherNode);
```

Uses Case
---------------

When using `ngTeleport` it's crucial that you don't over-complicate your code. Remember that there might always be a better solution for doing what you want to do.

One prominent use case that `ngTeleport` is in a responsive design &ndash; upon changing the browser window, you may want to shuffle the DOM elements around based on media queries, which is precisely what `ngTeleport` allows you to do in an Angular environment.

Options
---------------

<table>
    <tr>
        <th>Option</th>
        <th>Type</th>
        <th>Default</th>
        <th>Result</th>
    </tr>
    <tr>
        <td><code>duplicate</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>Instead of removing the source DOM it instead creates a copy of it.</td>
    </tr>
    <tr>
        <td><code>retainScope</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>Retain the original scope of the node even though it's a child of another scope &ndash; not recommended due to complexity).</td>
    </tr>
    <tr>
        <td><code>insertion</code></td>
        <td><code>String</code></td>
        <td><code>append</code></td>
        <td>Can either be <code>append</code> or <code>prepend</code> depending on what you're looking for.</td>
    </tr>
</table>
