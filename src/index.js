/**
 * Components Life cycle method:
 * 
 * Three phases:
 * 
 * Mount Phase:
 *      Initial render:
 *      1) constructor()
 *          - Component lifecycle begins during constructor instantiation
 *      2) componentWillMount()
 *          - componentWillMount() is invoked immediately before mounting occurs. It is called before render()
 *      3) render()
 *          - Render return will update the DOM to the virtual DOM
 *      4) componentDidMount() 
 *          - When the instance is rendered into DOM for the first time
 *          - right place for timers, ajax
 * 
 * Update Phase:
 *      Once Ui rendered, triggered by events:
 *      1) componentWillReceiveProps()
 *          - Dynamic props gets passed - called
 *      2) shouldComponentUpdate()
 *          - prevent your component update (not much useful)
 *      3) componentWillUpdate()
 *      4) Render()
 *      5) ComponentDidUpdate()
 * 
 *  unmount phase:
 *      when DOM element is removed from the DOM tree 
 *      1) componentWillUnmount()
 * 
 */


// Imports for React and React DOM initialization
import React from 'react';
import ReactDOM from 'react-dom';

export class ComponentLifecycle extends React.Component {

    //  Initial render: Mount phase

    // Component lifecycle begins - During constructor() instantiation 
    constructor() {
        super();
        console.log("ComponentLifecycle(Mount Phase) => initial Render methods:");
        console.log("ComponentLifecycle - Constructor method executed");
    }

    // componentWillMount() is invoked immediately before mounting occurs.
    componentWillMount() {
        console.log("ComponentLifecycle - componentWillMount executed");
    }

    // Render return will update the DOM to the virtual DOM
    render() {
        console.log("ComponentLifecycle - render method executed");
        return <div>Hello ComponentLifecycle</div>;
    }

    // When the instance is rendered into DOM for the first time
    componentDidMount() {
        console.log("ComponentLifecycle - componentDidMount executed");
    }

}

ReactDOM.render(<ComponentLifecycle />, document.getElementById('root'));