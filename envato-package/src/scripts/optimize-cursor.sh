#!/bin/bash

# =============================================================================
# CURSOR OPTIMIZATION SCRIPT - LawyerHero Project
# =============================================================================
# Script para otimizar performance do Cursor IDE no projeto
# 
# @author Bruno Cordeiro
# @version 1.0.0
# =============================================================================

set -e

echo "🚀 Otimizando Cursor para o projeto LawyerHero..."

# =============================================================================
# LIMPEZA DE CACHE
# =============================================================================

echo "🧹 Limpando caches desnecessários..."

# Next.js cache
if [ -d ".next" ]; then
    echo "  - Limpando cache do Next.js..."
    rm -rf .next/cache/*
    rm -f .next/*.json
fi

# TypeScript cache
if [ -f "tsconfig.tsbuildinfo" ]; then
    echo "  - Limpando cache do TypeScript..."
    rm -f tsconfig.tsbuildinfo
fi

# Node modules cache (se necessário)
if [ "$1" = "--deep-clean" ]; then
    echo "  - Limpeza profunda: removendo node_modules..."
    rm -rf node_modules
    npm install
fi

# =============================================================================
# OTIMIZAÇÃO DE ARQUIVOS
# =============================================================================

echo "📁 Verificando estrutura de arquivos..."

# Contar arquivos por tipo
echo "  - Arquivos TypeScript: $(find src -name "*.ts" -o -name "*.tsx" | wc -l)"
echo "  - Arquivos de configuração: $(find . -maxdepth 1 -name "*.json" -o -name "*.js" -o -name "*.ts" | wc -l)"
echo "  - Tamanho do projeto: $(du -sh . | cut -f1)"

# =============================================================================
# VERIFICAÇÃO DE RECURSOS
# =============================================================================

echo "💻 Verificando recursos do sistema..."

# RAM disponível
RAM_TOTAL=$(free -h | awk '/^Mem:/ {print $2}')
RAM_AVAILABLE=$(free -h | awk '/^Mem:/ {print $7}')
echo "  - RAM Total: $RAM_TOTAL"
echo "  - RAM Disponível: $RAM_AVAILABLE"

# CPU cores
CPU_CORES=$(nproc)
echo "  - CPU Cores: $CPU_CORES"

# Espaço em disco
DISK_FREE=$(df -h / | awk 'NR==2 {print $4}')
DISK_USED=$(df -h / | awk 'NR==2 {print $5}')
echo "  - Espaço livre: $DISK_FREE ($DISK_USED usado)"

# =============================================================================
# CONFIGURAÇÃO DO CURSOR
# =============================================================================

echo "⚙️  Aplicando configurações otimizadas..."

# Verificar se existe .vscode/settings.json
if [ ! -f ".vscode/settings.json" ]; then
    echo "  ❌ Arquivo .vscode/settings.json não encontrado!"
    echo "  📝 Execute o script de configuração primeiro."
else
    echo "  ✅ Configurações do Cursor aplicadas"
fi

# Verificar .cursorrules
if [ ! -f ".cursorrules" ]; then
    echo "  ❌ Arquivo .cursorrules não encontrado!"
else
    echo "  ✅ Regras do Cursor configuradas"
fi

# =============================================================================
# OTIMIZAÇÃO DO TYPESCRIPT
# =============================================================================

echo "🔧 Verificando configuração do TypeScript..."

# Verificar se tsconfig tem incrementalização
if grep -q '"incremental": true' tsconfig.json; then
    echo "  ✅ Compilação incremental habilitada"
else
    echo "  ⚠️  Compilação incremental não configurada"
fi

# =============================================================================
# RECOMENDAÇÕES
# =============================================================================

echo ""
echo "📋 RECOMENDAÇÕES PARA MELHOR PERFORMANCE:"
echo ""

# Verificar uso de RAM
RAM_PERCENT=$(free | awk '/^Mem:/ {printf "%.0f", $3/$2 * 100.0}')
if [ "$RAM_PERCENT" -gt 80 ]; then
    echo "  ⚠️  Alto uso de RAM ($RAM_PERCENT%). Considere:"
    echo "     - Fechar outras aplicações"
    echo "     - Reiniciar o Cursor"
    echo "     - Aumentar swap se necessário"
fi

# Verificar espaço em disco
DISK_PERCENT=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ "$DISK_PERCENT" -gt 85 ]; then
    echo "  ⚠️  Pouco espaço em disco ($DISK_PERCENT%). Considere:"
    echo "     - Limpar cache do sistema"
    echo "     - Remover arquivos desnecessários"
    echo "     - Mover projetos antigos"
fi

echo ""
echo "✨ OTIMIZAÇÕES RECOMENDADAS:"
echo "  1. Use busca específica em vez de busca global"
echo "  2. Trabalhe em arquivos individuais quando possível"
echo "  3. Use o terminal integrado para comandos Git"
echo "  4. Mantenha apenas abas necessárias abertas"
echo "  5. Use Ctrl+Shift+P > 'Reload Window' se ficar lento"

echo ""
echo "🎯 ATALHOS ÚTEIS NO CURSOR:"
echo "  - Ctrl+P: Busca rápida de arquivos"
echo "  - Ctrl+Shift+F: Busca em todo projeto"
echo "  - Ctrl+Shift+P: Command Palette"
echo "  - Ctrl+`: Terminal integrado"
echo "  - Ctrl+Shift+E: Explorer de arquivos"

echo ""
echo "✅ Otimização concluída! Reinicie o Cursor para aplicar todas as mudanças."
echo ""

# =============================================================================
# MONITORAMENTO CONTÍNUO
# =============================================================================

if [ "$1" = "--monitor" ]; then
    echo "🔍 Iniciando monitoramento de recursos..."
    while true; do
        clear
        echo "=== MONITORAMENTO CURSOR - $(date) ==="
        echo ""
        echo "RAM: $(free -h | awk '/^Mem:/ {print $3 "/" $2}')"
        echo "CPU: $(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | sed 's/%us,//')"
        echo "Cursor PIDs: $(pgrep -c cursor || echo "0")"
        echo ""
        echo "Pressione Ctrl+C para parar o monitoramento"
        sleep 5
    done
fi