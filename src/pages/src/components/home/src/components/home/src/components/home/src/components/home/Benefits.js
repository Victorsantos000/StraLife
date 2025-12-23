import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, TrendingUp, Cpu } from 'lucide-react';

export default function Benefits() {
    const benefits = [
        {
            icon: Clock,
            title: 'Disponibilidade 24/7',
            desc: 'Sua empresa nunca para. Atendimento instantâneo a qualquer hora do dia ou da noite.'
        },
        {
            icon: Shield,
            title: 'Segurança de Dados',
            desc: 'Proteção total das informações com criptografia e protocolos de segurança avançados.'
        },
        {
            icon: TrendingUp,
            title: 'Escalabilidade',
            desc: 'Atenda centenas de clientes simultaneamente sem perder a qualidade ou aumentar o custo.'
        },
        {
            icon: Cpu,
            title: 'IA de Ponta',
            desc: 'Modelos de linguagem avançados que entendem as necessidades reais do seu cliente.'
        }
    ];

    return (
        <section className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/10"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                                <benefit.icon className="w-7 h-7 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
