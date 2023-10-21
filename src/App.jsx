import Header from './components/Header';
import Section from './components/Section';
import Project from './components/Project';
import About from './components/About';
import Socials from './components/Socials';
import Subheading from './components/Subheading'
import Mode from './components/Mode';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App () {
    return (
        <>
            <Mode />
            
            <Header />

            <div className = 'xl:fixed'>
                <Section
                    name = 'projects'
                    num = '1'
                />
                <Section
                    name = 'about'
                    num = '2'
                />

                <Section
                    name = 'skills'
                    num = '3'
                />

                <Section
                    name = 'socials'
                    num = '4'
                />
            </div>

            <div id = 'projects' className = 'xl:mt-16'>
                <Subheading title = 'projects' />

                <Project
                    title = 'monstera'
                    desc = 'monstera is a command line tool that retrieves system information such as the version of Python & pip, as well as their installation locations. It is especially helpful for maintainers of Python projects, who need information such as the operating system to help reproduce & solve issues.'
                    link = 'https://pypi.org/project/monstera'
                />

                <Project
                    title = 'dishb.github.io'
                    desc = 'My personal website & portfolio. Built with ReactJS & TailwindCSS. I also used icons from Fontawesome. This is my first, proper web development project & represents what I have been learning for a few weeks. I tried to go for an elegant, modern, & simple look.'
                    link = 'https://dishb.github.io'
                />

                <Project
                    title = 'recycle-it'
                    desc = 'recycle-it was a small project I made with a partner in my first 24 hour hackathon. It was a ton of fun for me! We created a desktop application that used a public API to analyze images (taken with the camera) for waste. The app would tell you whether to trash, compost, or recycle the waste.'
                    link = 'https://github.com/dishb/recycle-it'
                />

                <Project
                    title = 'firestarter'
                    desc = 'firestarter is a command line tool that helps Python developers quickly create boilerplate for a Python project. firestarter is like the ViteJS of Python. It lets you configure things like a testing framework and linter. You can create code for a blank project, Python package, and more.'
                    link = 'https://pypi.org/project/firestarter'
                />
            </div>

            <div id = 'about'>
                <Subheading title = 'about' />

                <About />
            </div>

            <div id = 'skills'>
                <Subheading title = 'skills' />

                <Skills />
            </div>

            <div id = 'socials'>
                <Subheading title = 'socials' />

                <Socials />
            </div>

            <Footer />
        </>
    );
}

export default App;
