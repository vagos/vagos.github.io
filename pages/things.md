---
layout: page
permalink: /things
permalink_name: /things 
title: Things
---

## Music

I upload some of my music on [soundcloud](https://soundcloud.com/vagozino).

## Projects


{% for project in site.data.projects %}
<div style="display: flex; align-items: center; justify-content: space-between;">
    <div>
        <h4><a href="{{ project.url }}">{{ project.title }}</a></h4>
        {{ project.description | markdownify | remove: '<p>' | remove: '</p>' }}
        
        {% if entry.url_code %}
        <span><a href="{{ project.url_code }}">[code]</a></span>
        {% endif %}
    </div>

    {% if project.img %}
        <img src="{{ project.img }}" alt="{{ project.title }}" style="max-width: 15em;
        height: auto; margin-top:1%" />
    {% endif %}
</div>
{% endfor %}


## Publications

{% bibliography %}
