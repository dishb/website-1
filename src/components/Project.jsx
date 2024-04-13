/* eslint-disable react/prop-types */

// import'../fontawesome/css/all.css';

function Project (props) {
    const sourceLink = `https://github.com/dishb/${props.title}`;
    const viewLink = props.link;

    return (
        <div className = 'flex flex-row justify-center items-center mb-10 mx-5' >
            <div className = 'max-w-lg h-48 w-full shadow-xl shadow-black/20 dark:shadow-white/20 rounded-md'>
                <div className = 'px-4 pt-4 bg-white dark:bg-dark inline-block'>
                    <h3 className = 'text-xl text-dark dark:text-white font-bold'>
                        {props.title}
                    </h3>
                </div>
                <div className = 'float-right px-4 pt-4'>
                    <div className = 'inline-block px-2'>
                        <a href = {sourceLink} target = '_blank' rel = 'noreferrer noopener' title = 'Source code'>
                            <i className = 'text-dark dark:text-white dark:hover:text-peach fa-brands fa-github fa-lg transition ease-in-out duration-300 hover:text-peach'></i>
                        </a>
                    </div>
                    <div className = 'inline-block px-2'>
                        <a href = {viewLink} target = '_blank' rel = 'noreferrer noopener' title = 'View project'>
                            <i className = 'text-dark dark:text-white dark:hover:text-peach fa-solid fa-up-right-from-square transition ease-in-out duration-300 hover:text-peach'></i>
                        </a>
                    </div>
                    </div>
                <div className = 'px-4 pb-4 bg-white dark:bg-dark inline-block'>
                    <p className = 'mt-5 text-sm dark:text-white text-dark font-serif'>
                        {props.desc}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;
