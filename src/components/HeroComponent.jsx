import './components.css'
import gsap from "gsap";

export default function HeroComponent() {
    function pageLoad() {
        gsap.to(".hero", {y: 40, opacity: 1, delay: 0, ease: "power2.out"})
    }

    setTimeout(pageLoad, 10)
    return (
        <div className="hero">
            <nav className='navbar'>
                <h1 className='container mx-auto text-4xl name'>Sarah Rai</h1>
                <h2 className='text-2xl blog'>Blog</h2>
                <h2 className='text-2xl works'>Works</h2>
            </nav>
            <div className='aboutDetail'>I am a college student working towards my goal of
                becoming a ------. <br/> I am currently working on
                ----------------------------------------. <br/>I am currently learning
                ----------------------------------------.
            </div>
        </div>
    );
}