// import '../fontawesome/css/all.css'

function Socials () {
    return (
        <div className = 'flex flex-row justify-center gap-5 mb-5'>
            <a title = 'Github' target = '_blank' rel = 'noreferrer noopener' href = 'https://github.com/dishb'>
                <i className = 'transition ease-in-out duration-300 hover:text-peach text-dark dark:text-white dark:hover:text-peach text-xl fa-brands fa-github'>
                </i>
            </a>
            <a title = 'Email' target = '_blank' rel = 'noreferrer noopener' href = 'mailto:code.dishb@gmail.com'>
                <i className = 'transition ease-in-out duration-300 hover:text-peach text-dark dark:text-white dark:hover:text-peach text-xl fa-solid fa-envelope'>
                </i>
            </a>
            <a title = 'PyPI' target = '_blank' rel = 'noreferrer noopener' href = 'https://pypi.org/user/dishb'>
                <i className = 'transition ease-in-out duration-300 hover:text-peach text-dark dark:text-white dark:hover:text-peach text-xl fa-solid fa-box-open'>
                </i>
            </a>
        </div>
    );
}

export default Socials;
