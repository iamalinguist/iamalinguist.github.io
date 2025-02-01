---
layout: page
title: fragments app for hindi
description: a demonstration of 'how Hindi grammar rules work?'
img: assets/img/projects/pro3 banner.jpg
importance: 3
category: work
---

This application was created to demonstrate how Hindi grammar rules work and how different syntactic categories are related. It was developed alongside my PhD research, though it was not the main focus of my studies. Instead, it grew out of my personal interest and suggestions from my mentors.


This Fragments app is labelled as 'Hindi Tree (HT) Parser'. It is a software solution to parse sentences of the Hindi language in Python. Presently, it is in its version 1.0.0. that can deal with a small fragment of Hindi. This parser (referred to as HT Parser) works differently from other available parsers in its algorithm for syntactic parsing. It facilitates the logical treatment of lexical items at the semantic stage. The parser works by first breaking down the source input into tokens and then analysing their arrangement according to the rules of a context-free grammar. The parser parses only grammatically correct inputs. In case of a grammatically incorrect input, the parser displays compilation errors. The parser consists of a glossary of lexical items and it can check the grammaticality of a sentence S only when S consists of items from the glossary.


#### Grammar of 'HT Parser'
The center point of the formalisation of the Hindi language is its grammar rules which produce a final parsing and associated set of annotations. These rules, as detailed below, which can generate theoretically infinite well-formed formulas for a fragment of Hindi with finite lexical units.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/pro3.1.png" title="logo of HT Parser" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image features the logo of HT Parser (concept and design by Dr. Nirmalya Guha), with the caption "ūrdhva-mūlam adhaḥ-śākham." Explore its meaning on <a href="https://vivekavani.com/b15v1/">this website</a>.
</div>



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/pro3.2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/pro3.3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/pro3.4.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    On the left is an example of a conjunction syntactic category. The middle section displays various sample rules operating within the HT Parser. On the right, another image showcases sample lexical items used as a corpus in the examples.
</div>


