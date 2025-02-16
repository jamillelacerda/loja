#!/bin/bash

# Verifica se o parâmetro da pasta foi fornecido
if [ -z "$1" ]; then
  echo "Erro: Por favor, informe o caminho da pasta como parâmetro."
  echo "Uso: $0 <caminho-da-pasta>"
  exit 1
fi

# Variáveis
BUCKET_NAME="jamillelacerda.com.br"
DIST_FOLDER="$1"  # Pasta informada como parâmetro

# Verifica se a pasta existe
if [ ! -d "$DIST_FOLDER" ]; then
  echo "Erro: A pasta '$DIST_FOLDER' não foi encontrada."
  exit 1
fi

# Lista os arquivos da pasta
echo "Arquivos na pasta '$DIST_FOLDER':"
ls -l "$DIST_FOLDER"

# Confirmação do usuário
echo ""
read -p "Confira os arquivos listados acima. Pressione qualquer tecla para continuar ou CTRL+C para cancelar..." -n 1 -r

aws s3 rm s3://jamillelacerda.com.br --recursive

# Sincroniza os arquivos da pasta com o bucket S3
echo ""
echo "Subindo arquivos para o bucket S3: $BUCKET_NAME..."
aws s3 sync "$DIST_FOLDER" "s3://$BUCKET_NAME" --delete

# Verifica se o comando foi executado com sucesso
if [ $? -eq 0 ]; then
  echo "Upload concluído com sucesso!"
else
  echo "Erro: Falha ao subir os arquivos para o S3."
  exit 1
fi
