import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Ricardo Silva",
            role: "Diretor de Operações",
            content: "A implementação dos agentes de IA da Stralife reduziu o nosso tempo de resposta em 90%. É impressionante a precisão do sistema.",
            stars: 5
        },
        {
            name: "Ana Martins",
            role: "CEO Tech Solutions",
            content: "O Victor e a sua equipa trouxeram uma visão estratégica que não encontrámos em nenhuma outra consultoria de tecnologia.",
            stars: 5
        },
        {
            name: "Pedro Santos",
            role: "Gerente Comercial",
            content: "Conseguimos escalar o nosso atendimento sem precisar de contratar mais 10 pessoas. A IA faz o trabalho pesado com perfeição.",
            stars: 5
        }
    ];

    return (
        <section className="py-24 bg-slate-950/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que dizem nossos clientes</h2>
                    <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-slate-800/30 border border-white/5 relative"
                        >
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-white/5" />
                            <p className="text-slate-300 mb-6 italic">"{t.content}"</p>
                            <div>
                                <div className="font-bold text-white">{t.name}</div>
                                <div className="text-sm text-violet-400">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
