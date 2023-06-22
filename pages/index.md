---
layout: home
permalink: /index
permalink_name: /index
js_file: /assets/js/index.js
title: Home
---
<style>
    .profile {
    margin-right: 5%;
    }
    
    .container {
        display: grid;
        grid-template-columns: 40% 60%;
    }
</style>

<div class=container>

<div>
    {% for image in site.static_files %}
    {% if image.path contains 'vagos' %}
        <img class="profile" style="display: none; float:left;" src="{{ site.baseurl }}{{ image.path }}" alt="Evanglelos image." width=250 height=250/>
    {% endif %}
    {% endfor %}
</div>

<div markdown="1">
**Evangelos Lamprou**

I am an undergraduate student in the ECE department at the University of Patras.

I am currently in the process of writing my diploma thesis, 
supervised by Prof. [Christos Fidas](http://www.cfidas.info/).

For a detailed [CV](/assets/pdf/cv.pdf) as well as contact information, visit my [about](/about) page.

For some of my projects, visit the [things](/things) page.

My blog is [here](/blog).
</div>

</div>

