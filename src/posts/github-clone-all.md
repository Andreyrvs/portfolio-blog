---
title: 'Github: Clonar todos repositórios'
date: '2023-03-31 11:30'
summary: 'guia de como buscar e clonar repositórios do GitHub usando o GitHub CLI'
tags: ['github', 'github cli', 'bash script']
---

Pré-requisito ter o [Github CLI](https://cli.github.com/) instalado e configurado.

## Como buscar os repositórios da **Organização**

Antes de clonar é bom saber com pesquisar e se vem o que é esperado.

Substitua *org-aqui* pelo nome da sua org.

```bash
  $ gh search repos org-aqui --limit 1000
```

---

É possível buscar todos os repositórios de um **time** especifico usando:

```bash
  $ gh search repos org-aqui --match name "seu-time" \
  --limit 1000
```

### Clonando repositórios

Esse script é responsável por clonar cada repositório e criar um diretório com o nome da Organização.

```bash
  $ while read -r repo _; do
    gh repo clone "$repo" "$repo"
  done
```

---

Agora combinamos a busca com o loop acima.

```bash
  $ gh search repos org-aqui --match name "seu-time" \
  --limit 1000 \
  | while read -r repo _; do
    gh repo clone "$repo" "$repo"
  done
```

### Repositório pessoal

Para buscar seu repositórios use:

```bash
  $ gh search repos --owner "seu-usuario-github" \
  --limit 1000 --visibility public 
```

---

A o loop é o mesmo, o que muda é a forma de pesquisar.

```bash
  $ gh search repos --owner "seu-usuario-github" \
  --limit 1000 --visibility public \
  | while read -r repo _; do
    gh repo clone "$repo" "$repo"
  done
```
