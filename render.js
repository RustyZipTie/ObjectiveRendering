const render = (content, documentCtx) => {
    if (documentCtx) {
        const renderLevel = (levelContent, parent) => {
            console.log(levelContent)
            for (const { type, style, textContent, children } of levelContent) {
                if (type) {
                    const elem = documentCtx.createElement(type);
                    if (textContent)
                        elem.textContent = textContent;

                    if (children)
                        renderLevel(children, elem);

                    if (style)
                        console.log('Sorry, style is not supported yet');

                    parent.appendChild(elem);
                }else{
                    console.error('Element type unspecified')
                }
            }
        }
        renderLevel(content, documentCtx.body)
        // renderLevel(element, documentCtx);

    } else {
        console.error('Document context unspecified');
    }
}

if (typeof exports != 'undefined'){
    exports.render = render
}