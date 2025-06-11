---
layout: post
title: Why does my first linguistic paper fail terribly in advancing scientific inquiry?
date: 2025-06-07 10:14:00-0400
description: it remains more of a sketch than a robust theory
tags: grammar syntax formalrules
categories: review-posts
giscus_comments: false
related_posts: false
toc:
  sidebar: left
---

```
I am going to refer to myself as the 'author' and talk about my [first paper](https://iamalinguist.github.io/assets/pdf/article1.pdf). This work takes a promising first step- but it remains more of a sketch than a robust theory. It lacks formal definitions, data evaluation, and engagement with canonical grammar theory is not at all present.
```


## A. Critical review of the paper
---


##### 1. Unclear Theoretical Foundation
The author draws on two major theoretical foundations- *CFG (Chomsky)* and *Montague-style semantics*—under a unified framework, suggesting a possible 'hybrid' approach. However, upon examining [Part 2](https://iamalinguist.github.io/assets/pdf/article2.pdf) of this article (and thus the complete paper), it becomes evident that it does not fully align with either theoretical model. 

* CFG is *Type 2 grammar* in the *Chomsky hierarchy*, and is more powerful than regular grammars (Type 3), but less powerful than context-sensitive grammars (Type 1) - author has not strictly followed the formalism and notations of Type 2 grammar.

* Montague grammar is tailored to *higher-order intensional logic* with *λ-calculus* and *quantificational structure* — yet author has restricted themselves to propositional logic, quantifier-less sentences, and simple entities. 

Consequently, the use of *Chomsky grammar* or *Montague grammar* here appears unwarranted.

<br>
<br>

##### 2. Overly Simplistic CFG Approach
* It's well-known that while CFGs can model many structures in natural languages, they struggle with free word order and agreement phenomena without extensions like TGG, LFG, GPSG, or MG (i.e. Minimalist Program). 

* Author restricted grammar to rigid rule‑based word order thus can not deal with free word-order (scrambling).

If the author intended to use a context-free grammar (CFG), there is no formal definition of V, Σ, P and S. The author directly introduced the rules without specifying which symbols are terminals or non-terminals, nor did they indicate the starting point.

<br>
<br>

##### 3. Incomplete Formalization of Gender, Agreement, and Negation

* Gender misalignment detection is hard-coded rather than derived from structural or feature-based mechanisms, again weakening the design.

* Author introduced auxiliary‑gender agreement rules informally but don’t formalize them. By formalisation I mean defining feature structures or agreement constraints in the grammar.

* Negation is handled via ad hoc phrase transformation (X neg Y → neg X Y), but you never define a transformation grammar nor provide a normalization algorithm. This blurs the line between syntax and morphology and butchers modularity.

<br>
<br>

##### 4. Evaluation: Corpus and Results Are Underwhelming

A proper evaluation section is missing. Author mentioned a “corpus … created” for experiments, but never provided corpus size, sources, annotation procedure, or detailed evaluation metrics (precision, recall, parsing accuracy). This lack of transparency prevents any assessment of performance or reproducibility.


* Examples 1–8 are illustrative, but no statistical data (e.g., coverage, failure rate, speed) is reported.

<br>
<br>

##### 5. Grammar Theoretic Gaps and Missing Dependencies
Key Hindi-specific linguistic phenomena aren't addressed: postposition attachment, case marking beyond nominative/accusative, compound verbs, participles, adjectives/adverbs, adjective agreement, or complex embedding.

* Author ignored discontinuous dependencies, long-distance movement, and scrambler constructs, which are central to modeling free word‑order languages.

* There's no discussion of deeper categorization: feature structures for number, case, animacy, tense/mood/aspect, or the role of verbal agreement outside the auxiliary.

<br>
<br>
<br>
<br>

## B. Grammatical Theory/ Framework/ System
---

This paper does not clearly follow any of the major grammatical theories— at least not in a consistent or principled way. By grammatical theories, I mean theories like-  Traditional Grammar (TG), Structural Grammar (SG),  Transformational-Generative Grammar (TGG), Functional Grammar (FG), Dependency Grammar (DG), Lexical Functional Grammar (LFG), Head-Driven Phrase Structure Grammar (HPSG), Construction Grammar (CG) etc.


| Grammatical Theory                        | Does Paper Follow It? | Why / Why Not                                                                 |
|------------------------------------------|-----------------------------|--------------------------------------------------------------------------------|
| Traditional Grammar (TG)             | ❌                          | Not descriptive or terminology-based; author aims for formal rules. |
| Structural Grammar (SG)              | ❌                          | Author has phrase rules, but SG focuses on distributions, not formal parsing.   |
| Transformational-Generative Grammar (TGG) | ❌                     | No transformations (movement, deletion, etc.), no deep/surface structure.     |
| Functional Grammar (FG)              | ❌                          | No thematic roles, no discourse function labels, no functional motivation.     |
| Dependency Grammar (DG)              | ❌                          | No head-dependent relations, no dependency trees.                              |
| Lexical Functional Grammar (LFG)     | ❌                          | No f-structures or c-structures, no mapping from lexical entries to syntax.    |
| Head-Driven Phrase Structure Grammar (HPSG) | ❌                     | No feature structures, no unification, no typed logic.                         |
| Construction Grammar (CG)            | ❌                          | No form-meaning pairings or construction-level generalizations.               |

<br>
<br>
This paper attempted a simplified CFG-based analysis, loosely reminiscent of early Context-Free Phrase Structure Grammars as used in early NLP (e.g., before the statistical revolution). If author wants to improve this work and make it publishable in a stronger venue, choosing one coherent grammatical theory and sticking with it will greatly help. Some suggestions:

> ###### **Option 1: Dependency Grammar (UD-style)**
If author is interested in parser implementation and wish to move toward NLP applications, DG is a better choice. It's flexible and aligns with existing corpora (e.g., Hindi UD Treebank). Use head-modifier dependencies, model relations like `nsubj`, `obj`, `aux`, and handle scrambling via `edge labels`.


> ###### **Option 2: Lexical Functional Grammar (LFG)**
* Good for free word order languages like Hindi. Allows c-structure and f-structure separation. You can model:
  * Surface word order using phrase structure rules (c-structure)
  * Underlying relations (subject, object) using functional structures (f-structure)
  * Gender, number, case as feature attributes


> ###### **Option 3: HPSG (Head-Driven Phrase Structure Grammar)**
* Also great for morphologically rich languages. Rich in typed feature structures and lexical specifications. Excellent for:
  * Agreement modelling
  * Subject/object marking
  * Constraint-based parsing


<br>
<br>
<br>
<br>

## Summary and Improvement
---

Some major points of improvement for this paper are:

* Clarify theoretical framework: state whether this is CFG-based Montague semantics or a hybrid, and defend that choice.

* Fully enumerate CFG rules (means listing all grammar rules in an ordered, numbered way, following formal notation.) in a consistent notation, including feature-attributes (gender, number, case, etc.).

* Expand grammar coverage to include optional orderings and scrambling.

* Formalize gender/agreement/negation using features or typed structures rather than ad hoc transformations.

* Provide corpus and evaluation metrics: size, domain, parsing accuracy, coverage, ambiguity rates.

* Publish code or grammar file for reproducibility and allow community verification.

* Compare against baselines: dependency parsers, formal grammar systems (GPSG, LFG, CG etc.).

* Address ambiguity management and discuss parse selection or ranking strategies.
