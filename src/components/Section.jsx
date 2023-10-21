/* eslint-disable react/prop-types */

import '../styles/hover.css'

function scroll(elementID) {
    document.getElementById(elementID).scrollIntoView({behavior: 'smooth'});
}

function Section (props) {

    return (
        <div className = 'flex flex-row mt-5 ml-10'>
            <button onClick = {() => scroll(props.name)}>
                <h2 className = 'hover-underline inline-block text-xl font-bold text-dark dark:text-white'>
                    {props.name}
                </h2>
            </button>
        </div>
    );
}

export default Section;
