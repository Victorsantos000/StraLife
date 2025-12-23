// Este ficheiro gere a comunicação com a inteligência artificial
export const base44 = {
    agents: {
        createConversation: async ({ agent_name, metadata }) => {
            // Aqui ligamos o site ao seu agente específico
            console.log(`A iniciar conversa com o agente: ${agent_name}`);
            return { id: 'conv_' + Math.random().toString(36).substr(2, 9), agent_name, metadata };
        },
        subscribeToConversation: (conversationId, callback) => {
            // Função para ouvir as respostas do robô
            console.log(`Subscrito na conversa: ${conversationId}`);
            return () => console.log('Ligação encerrada');
        },
        addMessage: async (conversation, { role, content }) => {
            // Envia a sua mensagem para a IA
            console.log(`Mensagem enviada: ${content}`);
            // Simulação de resposta (no sistema real, o Base44 responde aqui)
        }
    }
};
