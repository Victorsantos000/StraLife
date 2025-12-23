import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, BarChart3, MessageSquare, ArrowRight } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Bot,
            title: 'Agentes de Atendimento',
            description: 'Assistentes virtuais inteligentes que resolvem problemas e agendam reuniões 24/7.'
        },
        {
            icon: Zap,
            title: 'Automação de Processos',
            description: 'Economize centenas de horas automatizando tarefas repetitivas e manuais.'
        },
        {
            icon: BarChart3,
            title: 'Análise de Dados',
            description: 'Transforme dados brutos em insights estratégicos para tomar melhores decisões.'
        },
        {
            icon: MessageSquare,
            title: 'Consultoria de IA',
            description: 'Estratégia personalizada para implementar IA no coração do seu modelo de negócio.'
        }
    ];

    return (
        <section className="py-24 bg-slate-900/50" id="servicos">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossas Soluções</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Tecnologia de ponta para escalar sua operação e aumentar sua lucratividade.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <service.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
