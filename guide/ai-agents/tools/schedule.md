# Agendar

Cria novos agendamentos diretamente pela conversa.

**Configuração:**

| Campo | Descrição |
|-------|-----------|
| **Agenda** | Selecione qual agenda utilizar |
| **Serviços** | Todos ou específicos |
| **Profissionais** | Todos ou específicos |
| **Operações** | Tipos de operação permitidos |

**Fluxo de agendamento:**
1. Cliente solicita agendamento
2. IA verifica horários disponíveis
3. Cliente escolhe data/horário
4. IA confirma e registra o agendamento

**Exemplo de uso:**
```text
👤 Cliente: Quero agendar uma consulta
🤖 IA: Claro! Temos horários disponíveis de segunda a sexta.
       Qual dia e horário você prefere?

👤 Cliente: Quinta às 14h
🤖 IA: ✅ Agendamento confirmado!
       📅 Quinta-feira, 26/12/2025 às 14:00
       Enviarei um lembrete 24h antes!
```

