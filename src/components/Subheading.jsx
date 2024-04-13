/* eslint-disable react/prop-types */

import '../styles/hover.css'

function Subheading (props) {
    return (
        <div className = 'flex flex-row justify-center m-5'>
            <h2 className = 'text-peach text-2xl font-bold hover-underline'>
                {props.title}
            </h2>
        </div>
    );
}

export default Subheading;
