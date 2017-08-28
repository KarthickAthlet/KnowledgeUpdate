/**
 * Components Life cycle method:
 * 
 * Three phases:
 * 
 * Mount Phase:
 *      Initial render:
 *      1) constructor()
 *      2) componentwillMount()
 *      3) render()
 *      4) componentDidMount() 
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

    render(){
        return <div>Hello ComponentLifecycle</div>;
    }
} 

ReactDOM.render(<ComponentLifecycle/>, document.getElementById('root'));