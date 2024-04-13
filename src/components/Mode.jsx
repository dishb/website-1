// import '../fontawesome/css/all.css';

function toggleMode () {
    const themeIcon = document.getElementById('theme-icon');
    const body = document.documentElement;

    if (themeIcon.classList.contains('fa-moon')) {
        themeIcon.classList.remove('fa-moon')
        themeIcon.classList.add('fa-sun')
        body.classList.add('dark')
    } else {
        themeIcon.classList.remove('fa-sun')
        themeIcon.classList.add('fa-moon')
        body.classList.remove('dark')
    }
}

function Mode () {
    return (
        <div className = 'float-right mr-10 xl:mt-5 xl:fixed xl:right-0 xl:top-0'>
            <button aria-label = 'Toggle light and dark mode.' onClick = {toggleMode} className = 'text-dark hover:text-peach dark:hover:text-peach transition ease-in-out duration-300 dark:text-white text-3xl'>
                <i id = 'theme-icon' className = 'fa-solid fa-moon' />
            </button>
        </div>
    );
}

export default Mode;
