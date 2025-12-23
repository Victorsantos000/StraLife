import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import AgentDemo from '../components/home/AgentDemo';
import Benefits from '../components/home/Benefits';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-950">
            <Hero />
            <Services />
            <AgentDemo />
            <Benefits />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}
