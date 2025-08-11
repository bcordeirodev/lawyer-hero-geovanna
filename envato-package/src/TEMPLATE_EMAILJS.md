# 📧 Template EmailJS - Formulário de Contato Advogado

## 🎯 Como Configurar

1. **Acesse o EmailJS**: https://emailjs.com
2. **Vá em Email Templates**
3. **Clique em "Create New Template"**
4. **Copie e cole o template abaixo**

---

## 📋 TEMPLATE PARA EMAILJS

### **Subject (Assunto):**

```
{{urgency_level == 'URGENTE' ? '🚨 URGENTE' : urgency_level == 'ALTA' ? '⚡ ALTA PRIORIDADE' : '📋'}} Nova Consulta: {{consultation_subject}}
```

### **Content (Conteúdo):**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: #2d3748;
        line-height: 1.7;
        margin: 0;
        padding: 0;
        background-color: #f7fafc;
      }
      .email-container {
        max-width: 650px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .header {
        background: linear-gradient(135deg, #2c5530 0%, #1a3a1f 100%);
        color: white;
        padding: 30px 20px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
        font-weight: 600;
      }
      .header p {
        margin: 8px 0 0 0;
        opacity: 0.9;
        font-size: 14px;
      }
      .content {
        padding: 30px;
      }
      .priority-badge {
        display: inline-block;
        padding: 8px 16px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 13px;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .urgent-badge {
        background: #fed7d7;
        color: #c53030;
        border: 1px solid #fc8181;
      }
      .high-badge {
        background: #fefcbf;
        color: #d69e2e;
        border: 1px solid #f6e05e;
      }
      .normal-badge {
        background: #bee3f8;
        color: #2b6cb0;
        border: 1px solid #90cdf4;
      }
      .info-card {
        background: #f7fafc;
        border-radius: 8px;
        padding: 24px;
        margin: 20px 0;
        border: 1px solid #e2e8f0;
      }
      .info-card h2 {
        margin: 0 0 16px 0;
        font-size: 18px;
        color: #2d3748;
        font-weight: 600;
      }
      .info-row {
        display: flex;
        margin-bottom: 12px;
        align-items: center;
      }
      .info-label {
        font-weight: 600;
        color: #4a5568;
        min-width: 140px;
        font-size: 14px;
      }
      .info-value {
        color: #2d3748;
        font-size: 14px;
      }
      .message-box {
        background: white;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        padding: 20px;
        margin: 16px 0;
        font-style: italic;
        color: #4a5568;
        position: relative;
      }
      .message-box:before {
        content: '"';
        font-size: 60px;
        color: #cbd5e0;
        position: absolute;
        top: -10px;
        left: 10px;
        font-family: serif;
      }
      .actions-section {
        background: #edf2f7;
        border-radius: 8px;
        padding: 24px;
        margin: 24px 0;
        text-align: center;
      }
      .action-button {
        display: inline-block;
        padding: 12px 24px;
        margin: 8px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.2s;
      }
      .btn-primary {
        background: #2c5530;
        color: white;
      }
      .btn-whatsapp {
        background: #25d366;
        color: white;
      }
      .system-info {
        background: #f0f8ff;
        border-left: 4px solid #3182ce;
        padding: 16px;
        margin: 20px 0;
        border-radius: 0 8px 8px 0;
        font-size: 13px;
        color: #2d3748;
      }
      .footer {
        background: #edf2f7;
        text-align: center;
        padding: 24px;
        color: #718096;
        font-size: 13px;
        border-top: 1px solid #e2e8f0;
      }
      .footer strong {
        color: #2d3748;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <!-- HEADER -->
      <div class="header">
        <h1>🏛️ Nova Consulta Jurídica</h1>
        <p>Formulário de Contato - Website</p>
      </div>

      <div class="content">
        <!-- PRIORIDADE -->
        <div
          class="priority-badge {{urgency_level == 'URGENTE' ? 'urgent-badge' : urgency_level == 'ALTA' ? 'high-badge' : 'normal-badge'}}"
        >
          {{urgency_level == 'URGENTE' ? '🚨 URGENTE' : urgency_level == 'ALTA'
          ? '⚡ ALTA PRIORIDADE' : '📋 NORMAL'}}
        </div>

        <!-- INFORMAÇÕES DO CLIENTE -->
        <div class="info-card">
          <h2>👤 Informações do Cliente</h2>
          <div class="info-row">
            <span class="info-label">Nome:</span>
            <span class="info-value">{{client_name}}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Email:</span>
            <span class="info-value">
              <a
                href="mailto:{{client_email}}"
                style="color: #2c5530; text-decoration: none;"
                >{{client_email}}</a
              >
            </span>
          </div>
          <div class="info-row">
            <span class="info-label">Telefone:</span>
            <span class="info-value">{{client_phone}}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Preferência de Contato:</span>
            <span class="info-value">{{contact_preference}}</span>
          </div>
        </div>

        <!-- INFORMAÇÕES DA CONSULTA -->
        <div class="info-card">
          <h2>⚖️ Detalhes da Consulta</h2>
          <div class="info-row">
            <span class="info-label">Área do Direito:</span>
            <span class="info-value">{{practice_area}}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Assunto:</span>
            <span class="info-value">{{consultation_subject}}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Tipo de Consulta:</span>
            <span class="info-value">{{consultation_type}}</span>
          </div>

          <h3 style="margin: 20px 0 10px 0; color: #2d3748;">
            📝 Mensagem do Cliente:
          </h3>
          <div class="message-box">{{consultation_message}}</div>
          <p style="margin: 5px 0; font-size: 12px; color: #718096;">
            <em>Tamanho da mensagem: {{message_length}} caracteres</em>
          </p>
        </div>

        <!-- INFORMAÇÕES DO SISTEMA -->
        <div class="system-info">
          <h3 style="margin: 0 0 12px 0; color: #2d3748;">
            🔧 Informações Técnicas
          </h3>
          <p style="margin: 6px 0;">
            <strong>Data e Hora:</strong> {{timestamp}} ({{day_of_week}})
          </p>
          <p style="margin: 6px 0;">
            <strong>Data:</strong> {{date_only}} |
            <strong>Horário:</strong> {{time_only}}
          </p>
          <p style="margin: 6px 0;"><strong>Origem:</strong> {{source}}</p>
          <p style="margin: 6px 0;">
            <strong>Tem Telefone:</strong> {{has_phone}}
          </p>
        </div>

        <!-- AÇÕES RÁPIDAS -->
        <div class="actions-section">
          <h3 style="margin: 0 0 16px 0; color: #2d3748;">🚀 Ações Rápidas</h3>
          <a
            href="mailto:{{client_email}}?subject=Re: {{consultation_subject}}&body=Olá {{client_name}},%0D%0A%0D%0AObrigado pelo seu contato sobre {{consultation_subject}}.%0D%0A%0D%0AAtenciosamente,%0D%0ADra. Geovanna Nery"
            class="action-button btn-primary"
          >
            📧 Responder por Email
          </a>
          {{client_phone != 'Não informado' ? '<a
            href="https://wa.me/55' + client_phone.replace(/\D/g, '') + '?text=Olá ' + client_name + '! Recebi sua mensagem sobre ' + consultation_subject + '. Vamos conversar?"
            class="action-button btn-whatsapp"
            >📱 WhatsApp</a
          >' : ''}}
        </div>
      </div>
    </div>

           <!-- FOOTER -->
       <div class="footer">
         <p>Este email foi gerado automaticamente pelo sistema de contato do website.</p>
         <p><strong>Dra. Geovanna Nery</strong> | Advocacia Especializada</p>
         <p>OAB/DF 123.456 | {{to_email}}</p>
       </div>
     </div>
   </body>
 </html>
```

---

## 🔧 Variáveis Disponíveis no Template

### 👤 **Informações do Cliente**

- `{{client_name}}` - Nome do cliente
- `{{client_email}}` - Email do cliente
- `{{client_phone}}` - Telefone do cliente
- `{{reply_to}}` - Email para resposta
- `{{contact_preference}}` - Preferência de contato

### ⚖️ **Informações da Consulta**

- `{{consultation_subject}}` - Assunto da consulta
- `{{consultation_message}}` - Mensagem do cliente
- `{{consultation_type}}` - Tipo de consulta
- `{{practice_area}}` - Área do direito identificada
- `{{urgency_level}}` - Nível de urgência (NORMAL/ALTA/URGENTE)

### 🕐 **Informações de Tempo**

- `{{timestamp}}` - Data e hora completa
- `{{date_only}}` - Apenas a data
- `{{time_only}}` - Apenas o horário
- `{{day_of_week}}` - Dia da semana

### 🔧 **Informações Técnicas**

- `{{source}}` - Origem do contato
- `{{message_length}}` - Tamanho da mensagem
- `{{has_phone}}` - Se tem telefone (Sim/Não)
- `{{to_email}}` - Email de destino

---

## 📱 Template Simplificado (Alternativa)

Se preferir um template mais simples:

### **Subject:**

```
Nova Consulta: {{consultation_subject}}
```

### **Content:**

```
Olá Dra. Geovanna,

Você recebeu uma nova consulta através do website:

CLIENTE:
Nome: {{client_name}}
Email: {{client_email}}
Telefone: {{client_phone}}

CONSULTA:
Assunto: {{consultation_subject}}
Área: {{practice_area}}
Prioridade: {{urgency_level}}

MENSAGEM:
{{consultation_message}}

DETALHES:
Data/Hora: {{timestamp}}
Origem: {{source}}

Para responder, clique aqui: mailto:{{client_email}}

---
Sistema de Contato - Dra. Geovanna Nery
```

---

## ✅ Próximos Passos

1. Copie o template desejado
2. Cole no EmailJS
3. Teste enviando um formulário
4. Ajuste conforme necessário
5. O email chegará em: **bcordeiro.dev@gmail.com**
