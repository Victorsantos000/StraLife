import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact() {
    return (
        <section className="py-24 bg-slate-950" id="contato">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">Vamos escalar o seu negócio?</h2>
                        <p className="text-slate-400 mb-10 text-lg">
                            Entre em contacto para uma consultoria gratuita e descubra como a nossa IA pode transformar a sua operação.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">E-mail</div>
                                    <div className="font-medium text-white">contato@stralife.com.br</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">WhatsApp</div>
                                    <div className="font-medium text-white">+55 (11) 99999-9999</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10"
                    >
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Input placeholder="Nome" className="bg-white/5 border-white/10 text-white h-12 rounded-xl" />
                                <Input placeholder="E-mail" className="bg-white/5 border-white/10 text-white h-12 rounded-xl" />
                            </div>
                            <Input placeholder="Assunto" className="bg-white/5 border-white/10 text-white h-12 rounded-xl" />
                            <textarea 
                                className="w-full min-h-[150px] bg-white/5 border border-white/10 text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                placeholder="Como podemos ajudar?"
                            />
                            <Button className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white h-12 rounded-xl font-bold flex items-center justify-center gap-2">
                                Enviar Mensagem <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
