---
title: Home
layout: home
permalink: /index
permalink_name: /index
js_files: 
    - /assets/js/index.js
    - /assets/js/now.js
profile: smiling_cute
---
<style>
    .profile {
        margin-right: 5%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        
    }
    
    .profile img {
    }
    
    .container {
        display: grid;
        grid-template-columns: 40% 60%;
        grid-gap: 2%;
    }
    
    .info {
        box-shadow: 5px 5px 5px -5px black; 
        margin-left: -10px;
        margin-right: -10px;
        background-color: #f5f5f5;
        padding: 10px 20px;
    }
</style>

<div class=container>

<div class="profile" onclick="setRandomPicture()">
    {% for image in site.static_files %}
    {% if image.path contains 'images/me' %}
    
    {% if image.path contains page.profile %}
        <img style="display: inline-block; float:left;" src="{{ image.path }}" alt="Evanglelos Lamprou" width=250 height=250/>
    {% else %}
        <img style="display: none; float:left;" src="{{ image.path }}" alt="Evanglelos Lamprou" width=250 height=250/>
    {% endif %}
    
    {% endif %}
    {% endfor %}
</div>

<div markdown="1" class=info>
**Evangelos Lamprou**

I am currently working as an embedded software engineer at
[Oticon](https://www.oticon.com/) in Denmark while pursuing my MSc in Computer
Science at [DTU](https://www.dtu.dk/).

Before that, I studied ECE at the University of Patras where I completed my
thesis under the supervision of Prof. [Christos Fidas](http://www.cfidas.info/).

For a detailed [CV](/assets/pdf/cv.pdf) as well as contact information, visit my [about](/about) page.

For some of my projects, visit the [things](/things) page.

My blog is [here](/blog).
</div>

</div>


#### What I am doing right now

<div id="current-task" style="word-wrap: break-word; white-space: pre-wrap;"> </div>
<div id="current-track"> </div>
