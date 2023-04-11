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
    }
    
</style>

<div class=container>
{% for image in site.static_files %}
{% if image.path contains 'assets/images/vagos' %}
    <img class="profile" style="display: none; float:left;" src="{{ site.baseurl }}{{ image.path }}" alt="Evanglelos Image" width=250 height=250/>
{% endif %}
{% endfor %}
</div>

**Evangelos Lamprou**

I am an undergraduate student in the ECE department at the University of Patras.

I am currently in the process of writing my diploma thesis, 
supervised by Prof. [Christos Fidas](http://www.cfidas.info/).

For a detailed [CV](/assets/pdf/cv.pdf) as well as contact information, visit my [about](/about) page.

<br>

For some of my projects, visit the [things](/things) page.

My blog is [here](/blog).
