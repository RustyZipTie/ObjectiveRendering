# Objective Rendering
Objective rendering renders elements to the document body from objects.

The `render` function does the work. Pass in 1) your document, structured as an object (see below) and 2) the `document` object.

Object example:  
```
[
    {
        type: 'div',
        children: [
            {
                type: 'button',
                textContent: 'Press Me'
            },
            {type: 'hr'},
            {
                type: 'p',
                textContent: 'Hello, World'
            }
        ]
    }
]
```

Notes:
- The top-level structure must be an array
- Currently, the supported attributes are
    - `type` (string) (required)
    - `children` (array) (optional)
    - `textContent` (string) (optional)
- More attributes, such as style and event listeners, will be added in future versions.

Full example:
```
const myDoc = [
    {
        type: 'div',
        children: [
            {
                type: 'button',
                textContent: 'Press Me'
            },
            {type: 'hr'},
            {
                type: 'p',
                textContent: 'Hello, World'
            }
        ]
    }
];

render(myDoc, document);
```

Note: Currently, `render()` does not clear the DOM. Therefore, calling it multiple times will result in duplicate content. Future versions will have a clearing option.

CDN: 
```
<script src="https://unpkg.com/objective-rendering@1.0.0/render.js"></script>
```