import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                            <Sparkles className="w-4 h-4" /> Inteligência Artificial para o seu Negócio
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Transforme sua empresa com <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Agentes de IA</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                            Automatize processos, escale seu atendimento e tome decisões baseadas em dados com nossas soluções personalizadas de Inteligência Artificial.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-8 py-6 rounded-2xl text-lg font-semibold group">
                                Começar Agora <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
