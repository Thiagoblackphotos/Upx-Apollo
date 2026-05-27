# Banner Digital Interativo para Projetos Acadêmicos

Este repositório contém um modelo de landing page em formato de **banner digital interativo**, desenvolvido para apresentação de projetos acadêmicos, startups, MVPs, UPX, TCCs e disciplinas de desenvolvimento de software.

A página pode ser publicada gratuitamente no **GitHub Pages** e utilizada em apresentações, bancas, pitchs, feiras acadêmicas e portfólio profissional.

## Estrutura do projeto

```bash
banner-digital-github/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── imagens/
    └── docs/
```

## O que os alunos devem alterar

No arquivo `index.html`, substituir os textos genéricos por informações reais do projeto:

- Nome do projeto
- Slogan
- Problema identificado
- Solução proposta
- Funcionalidades
- Tecnologias utilizadas
- Arquitetura da solução
- Link do protótipo Figma
- Link do repositório GitHub
- Integrantes da equipe
- Disciplina, instituição e semestre

No arquivo `style.css`, é possível alterar:

- Cores principais
- Tipografia
- Espaçamentos
- Bordas
- Tamanho das seções
- Estilo dos cards

No arquivo `script.js`, já existem:

- menu responsivo;
- animações de entrada;
- QR Code gerado automaticamente com o link da página publicada.

## Como publicar no GitHub Pages

1. Criar um repositório público no GitHub.
2. Enviar os arquivos `index.html`, `style.css`, `script.js`, `README.md` e a pasta `assets`.
3. Acessar o repositório no GitHub.
4. Clicar em **Settings**.
5. Acessar **Pages**.
6. Em **Build and deployment**, selecionar:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. Salvar.
8. Aguardar o GitHub gerar o link público.

O link ficará semelhante a:

```bash
https://seu-usuario.github.io/nome-do-repositorio/
```

## Uso como banner de apresentação

Este modelo foi pensado para substituir ou complementar um banner estático. Durante uma apresentação, os alunos podem exibir a landing page em um notebook, projetor ou TV e permitir que a banca acesse pelo QR Code.

A página inclui seções para:

- apresentação visual do projeto;
- problema e solução;
- funcionalidades;
- tecnologias;
- arquitetura;
- demonstração do MVP;
- ODS e impacto;
- equipe;
- QR Code de acesso.

## Sugestões de melhoria

Os alunos podem enriquecer a página incluindo:

- imagens reais do sistema;
- GIFs demonstrativos;
- vídeo incorporado;
- link para protótipo Figma;
- link para aplicação funcional;
- diagrama de arquitetura;
- resultados de testes com usuários;
- métricas de avaliação;
- depoimentos ou validações.

## Critérios de avaliação sugeridos

| Critério | Peso |
|---|---:|
| Clareza da proposta e do problema | 2,0 |
| Qualidade visual e organização da página | 2,0 |
| Apresentação da solução e funcionalidades | 2,0 |
| Demonstração do MVP ou protótipo | 1,5 |
| Responsividade e usabilidade | 1,0 |
| Publicação correta no GitHub Pages | 1,0 |
| README e organização do repositório | 0,5 |

## Observação

Após publicar no GitHub Pages, abra a página pelo link público para que o QR Code seja gerado corretamente com o endereço real da landing page.
