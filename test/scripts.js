// the document object
const myDoc = [
    {
        type: 'div',
        refName: 'myDiv',
        children: [
            {
                type: 'button',
                id: 'my_button',
                refName: 'myButton',
                textContent: 'Press Me',
                listeners: {
                    click: () => console.log('Button clicked'),
                    mouseover: (e) => {
                        e.target.style.backgroundColor = 'red'
                    },
                    mouseout: (e) => {
                        e.target.style.backgroundColor = 'white'
                    }
                }
            },
            {type: 'hr'},
            {
                type: 'p',
                className: 'myClass',
                textContent: 'Hello, World',
                contentEditable: true,
                style: {
                    background_color: 'green',
                    border: '1px solid black',
                    border_radius: '10px'
                }
            }
        ]
    }
];


// render. automatically clears parent's children beforehand
// assigns refs with element references 
const refs = render(myDoc, document.body);

// adding h1 to myButton. myButton's children are not cleared
render([{
    type: 'h1',
    textContent: 'A heading in a weird place!',
}], refs.myButton, false);



