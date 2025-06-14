---
layout: post
title: understanding hpsg
date: 2025-06-13 00 :00:00
description: A quick visual schema of 'How HPSG organizes sentence structure?'
tags: formatting 
categories: theoretical
tabs: true
typograms: true
citation: false
giscus_comments: false
related_posts: false
---

## Visual Schema- An Example

HPSG combines ideas from:

- Unification-based grammar
- Lexicalist theories
- Constraint-based syntax and semantics

It’s known for using *typed feature structures* and modeling grammar in a way that integrates syntax, semantics, and the lexicon in a highly modular and formal way. Let us see a quick visual schema of how HPSG organizes sentence structure-

````markdown
```
[ S ]
 |-- HEAD: verb
 |-- SUBJ: < NP >
 |-- COMPS: < NP >
 |-- SYNSEM:
 |     |-- LOCAL:
 |     |     |-- CAT: [HEAD verb, SUBJ <NP>, COMPS <NP>]
 |     |     |-- CONTENT: [Semantic Representation]
 |
 |-- DTRS (Daughters):
       |
       |-- [ NP ]  ← Subject (e.g., "John")
       |
       |-- [ V' ]
             |
             |-- HEAD: verb
             |-- COMPS: < NP >
             |-- DTRS:
                   |-- [ V ]      ← Verb (e.g., "gave")
                   |-- [ NP ]     ← Object (e.g., "a book")
```
````

<hr>


### 1. `[ S ]` – Sentence node
- The top-level phrase (S for Sentence).
- A **headed phrase**, meaning the **verb** determines the grammatical behavior.

---

### 2. `HEAD: verb`
- The **head** of the sentence is the **verb** (e.g., "gave").
- The head determines the phrase’s syntactic and semantic properties.

---

### 3. `SUBJ: <NP>`
- Specifies the **subject** requirement of the verb (like "John").
- It is a list of NPs that the verb expects in the **SUBJ** feature.

---

### 4. `COMPS: <NP>`
- Specifies the **complements** required by the verb (like objects).
- "Gave" requires two NPs (e.g., "a book" and "to Mary").

---

### 5. `SYNSEM` (Syntactic and Semantic Features)
- Merges **syntax and semantics** into a unified structure.
- Contains:

  - **LOCAL**:
    - `CAT`: category features (HEAD, SUBJ, COMPS)
    - `CONTENT`: semantic representation (meaning of the phrase)

---

### 6. `DTRS` (Daughters)
- Immediate components of the phrase:
  
  - `NP` – the **subject** ("John")
  - `V'` – the **verb phrase**, which contains:
    - `V` – the verb ("gave")
    - `NP` – the object ("a book")

- Follows the **Head Feature Principle** (explained below).

---

## ✅ Key Principles in the Schema

| Principle                 | Description |
|--------------------------|-------------|
| **Head Feature Principle** | The head daughter passes up its features to the mother node. |
| **Valence Principle**      | SUBJ and COMPS lists are discharged as syntactic elements combine. |
| **Feature Structures**     | Every node is an **Attribute-Value Matrix (AVM)**. |
| **Lexicalism**             | Most grammatical information is stored in the lexicon. For example, the verb "gave" encodes that it takes a subject and two complements. |

---

#### HPSG Tree Diagram with AVMs for "John gave a book"

````markdown
```
                                 [S]
                +----------------+----------------+
                |                                 |
           [NP] John                      [V'] (Verb Phrase)
                                              |
                                +-------------+-------------+
                                |                           |
                         [V] "gave"                   [NP] "a book"

AVMs for Each Node:

[S]
⎡HEAD   verb             ⎤
⎢SUBJ   ⟨NP⟩              ⎥
⎢COMPS  ⟨NP⟩              ⎥
⎢CONT   give'(x, y)      ⎥
⎣                        ⎦

[NP] → "John"
⎡HEAD   noun             ⎤
⎢INDEX  j                ⎥
⎢CONT   john'            ⎥
⎣                        ⎦

[V']
⎡HEAD   verb             ⎤
⎢COMPS  ⟨NP⟩              ⎥
⎢CONT   λx. give'(j, x)  ⎥
⎣                        ⎦

[V] → "gave"
⎡HEAD   verb             ⎤
⎢SUBJ   ⟨NP⟩              ⎥
⎢COMPS  ⟨NP⟩              ⎥
⎢CONT   λxλy. give'(y, x)⎥
⎣                        ⎦

[NP] → "a book"
⎡HEAD   noun             ⎤
⎢INDEX  b                ⎥
⎢CONT   book'(b)         ⎥
⎣                        ⎦

```
````


- [x] The verb "gave" expects a subject (SUBJ ⟨NP⟩) and a complement (COMPS ⟨NP⟩), both noun phrases.
- [x] The semantics (CONT) is built through lambda abstraction.
- [x] "John" is the subject, indexed as j, and "a book" is the object, indexed as b.
- [x] The semantic content of the sentence becomes give'(john', book').


## Definitions

