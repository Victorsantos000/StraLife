import React from 'react';
import { motion } from 'framer-motion';
import ChatInterface from '../agent/ChatInterface';
import { Sparkles, Calendar, CheckCircle2 } from 'lucide-react';

export default function AgentDemo() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                            Experimente nossa <br />
                            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                IA em tempo real
                            </span>
                        </h2>
                        <p className="text-slate-400 mb-8 text-lg">
                            Nosso agente não apenas responde, ele entende o contexto e executa tarefas complexas como agendamentos e qualificações de leads.
                        </p>
                        
                        <div className="space-y-4">
                            {[
                                'Atendimento humanizado 24 horas',
                                'Agendamento direto na sua agenda',
                                'Qualificação inteligente de leads'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-[2rem] blur-2xl" />
                        <ChatInterface agentName="Stralife Assistant" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
