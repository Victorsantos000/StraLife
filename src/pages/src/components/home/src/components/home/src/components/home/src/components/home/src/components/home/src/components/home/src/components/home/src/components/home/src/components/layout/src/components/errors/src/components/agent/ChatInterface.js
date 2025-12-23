import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Loader2, Sparkles } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatInterface({ agentName }) {
    const [conversation, setConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isInitializing, setIsInitializing] = useState(true);
    const messagesEndRef = useRef(null);
    const unsubscribeRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        initializeChat();
        return () => {
            if (unsubscribeRef.current) {
                unsubscribeRef.current();
            }
        };
    }, []);

    const initializeChat = async () => {
        try {
            setIsInitializing(true);
            const newConversation = await base44.agents.createConversation({
                agent_name: agentName,
                metadata: {
                    name: 'Agendamento de Reunião',
                    source: 'website'
                }
            });
            
            setConversation(newConversation);

            unsubscribeRef.current = base44.agents.subscribeToConversation(
                newConversation.id, 
                (data) => {
                    setMessages(data.messages || []);
                }
            );

            await base44.agents.addMessage(newConversation, {
                role: 'user',
                content: 'Olá'
            });
        } catch (error) {
            console.error('Error initializing chat:', error);
        } finally {
            setIsInitializing(false);
        }
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim() || !conversation || isLoading) return;

        const messageToSend = inputMessage.trim();
        setInputMessage('');
        setIsLoading(true);

        try {
            await base44.agents.addMessage(conversation, {
                role: 'user',
                content: messageToSend
            });
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isInitializing) {
        return (
            <div className="flex items-center justify-center h-[500px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl">
                <div className="text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-violet-500 mx-auto mb-3" />
                    <p className="text-slate-600">Inicializando assistente...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[600px] bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="font-semibold text-white">Assistente Virtual Stralife</h3>
                    <p className="text-xs text-white/80">Agende sua consultoria gratuita</p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-br from-slate-50 to-slate-100">
                <AnimatePresence mode="popLayout">
                    {messages.map((message, index) => (
                        <motion.div
                            key={message.id || index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageBubble message={message} />
                        </motion.div>
                    ))}
                </AnimatePresence>
                
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-3"
                    >
                        <div className="h-8 w-8 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                        <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-200">
                <div className="flex gap-3">
                    <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        disabled={isLoading}
                        className="flex-1 rounded-xl border-slate-300 focus:border-violet-500 focus:ring-violet-500"
                    />
                    <Button 
                        type="submit"
                        disabled={isLoading || !inputMessage.trim()}
                        className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 rounded-xl px-6"
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <Send className="w-5 h-5" />
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
