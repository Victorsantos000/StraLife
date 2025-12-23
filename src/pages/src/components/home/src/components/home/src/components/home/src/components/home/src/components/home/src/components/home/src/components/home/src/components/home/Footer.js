import React from 'react';
import { Brain, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center">
                            <Brain className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">StraLife</span>
                    </div>

                    <div className="flex gap-8 text-sm text-slate-400">
                        <a href="#" className="hover:text-white transition-colors">Início</a>
                        <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
                        <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
                        <a href="#contato" className="hover:text-white transition-colors">Contato</a>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} StraLife Inteligência Artificial. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
