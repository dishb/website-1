/* eslint-disable react/no-unescaped-entities */

import '../styles/hover.css'

function About () {
    return (
        <div className = 'flex flex-row justify-center align-center mb-10'>
            <div className = 'max-w-lg w-full mx-5'>
                <p className = 'text-sm text-dark dark:text-white font-serif'>
                    Hey, I'm Dishant. I'm a high schooler living in California. I
                    like to code & play soccer. My favorite language is Python because of it's simple syntax & large
                    ecosystem of open-source packages. My open-source contributions can be found on
                    my <a className = 'hover-underline text-peach' href = 'https://github.com/dishb' rel = 'noopener noreferrer' target = '_blank' title = 'GitHub profile'>GitHub
                    </a> profile.
                    <br /> <br />
                    I've been playing soccer for around 7 years. I usually play centerback (defense)
                    on my team but I sometimes play midfield. I've been appointed captain for my team
                    twice now.
                </p>
            </div>
        </div>
    );
}

export default About;
