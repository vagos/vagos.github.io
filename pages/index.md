---
layout: home
permalink: /index
permalink_name: /index
js_file: /assets/js/index.js
title: Home
---

<div style="text-align:center">
{% for image in site.static_files %}
{% if image.path contains 'assets/images/vagos_' %}
    <img class="profile" style="display: none" src="{{ site.baseurl }}{{ image.path }}" alt="image" witdth=250 height=250/>
{% endif %}
{% endfor %}
</div>
