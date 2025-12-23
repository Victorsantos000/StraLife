import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Layout({ children }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Início', href: '#' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Contato', href: '#contato' },
    ];

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Navegação */}
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center">
                            <Brain className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">StraLife</span>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white border-0 px-6 rounded-xl">
                            Começar Agora
                        </Button>
                    </div>

                    {/* Botão Menu Mobile */}
                    <button 
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Menu Mobile Aberto */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
                        >
                            <div className="flex flex-col p-6 gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-lg font-medium text-slate-300 hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <Button className="w-full bg-gradient-to-r from-blue-500 to-violet-500 text-white py-6 rounded-xl">
                                    Começar Agora
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            <main>{children}</main>
        </div>
    );
}
