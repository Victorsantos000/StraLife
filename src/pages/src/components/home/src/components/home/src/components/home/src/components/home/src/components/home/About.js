import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, Award } from 'lucide-react';

export default function About() {
    const experience = [
        {
            icon: Building2,
            title: 'Itaú Unibanco',
            description: 'Analista de Negócios no maior banco da América Latina'
        },
        {
            icon: Users,
            title: 'Liderança de Times',
            description: 'Trabalhou com analistas, desenvolvedores e designers'
        },
        {
            icon: TrendingUp,
            title: 'Visão Estratégica',
            description: 'Reuniões com coordenadores, gerentes e superintendentes'
        },
        {
            icon: Award,
            title: 'Produtos & Inovação',
            description: 'Foco em eficiência, produtividade e faturamento'
        }
    ];

    return (
        <section className="relative py-32 bg-slate-900" id="sobre">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-2xl" />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-500/10 rounded-2xl" />
                            
                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-white/10">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center mb-4">
                                        <Building2 className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Victor Augusto</h3>
                                    <p className="text-violet-400 font-medium">CEO & Fundador</p>
                                </div>
                                
                                <div className="space-y-4">
                                    {experience.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3 p-3 rounded-xl bg-white/5"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-violet-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white text-sm">{item.title}</div>
                                                <div className="text-xs text-slate-400 mt-0.5">{item.description}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-medium text-violet-400 tracking-wider uppercase">
                            Liderança & Experiência
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                            Quem está por trás <br />
                            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                da Stralife
                            </span>
                        </h2>
                        
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>
                                A Stralife é liderada por <strong className="text-white">Victor Augusto</strong>, especialista em negócios, dados, automação e inteligência artificial.
                            </p>
                            <p>
                                Victor atuou como <strong className="text-white">Analista de Negócios no Itaú Unibanco</strong>, onde liderou times multidisciplinares e participou de decisões estratégicas de alto nível.
                            </p>
                            <p className="pt-4 font-semibold text-white">
                                Essa vivência corporativa sustenta a visão estratégica da Stralife para entregar resultados reais.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
