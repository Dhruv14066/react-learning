//recact making tree graph for each elements a container 
function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    //we have to set eaxh attribute so not a good code 

    //new code 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const p in reactElement.props) {
        if (p === 'children') continue; // used to have children in prop but not now so this can be ignored
        domElement.setAttribute(p,reactElement.props[p])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href : "https://google.com",
        target : '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer) 
