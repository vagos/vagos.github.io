---
layout: page
permalink: /things
permalink_name: /things 
title: Things
---


## Projects

{% for project in site.data.projects %}
<div style="display: flex; align-items: flex-start; justify-content: space-between;">
    <div>
        <h4><a href="{{ project.url }}">{{ project.title }}</a></h4>
        {% if project.description.size > 1 %}
            {% assign description = project.description | join: '<br>' %}
        {% else %}
            {% assign description = project.description %}
        {% endif %}
        {{ description | markdownify | remove: '<p>' | remove: '</p>' }}
    </div>

    {% if project.img %}
        <img src="{{ project.img }}" alt="{{ project.title }}" style="max-width: 15em;
        height: auto; margin-top:1%" />
    {% endif %}
</div>
{% endfor %}

## Publications

{% bibliography %}
