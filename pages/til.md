---
layout: default
permalink: /til
permalink_name: /til
title: TIL
---

{% assign tils = site.til | sort: "date" | reverse %}
<ul class="til-list">
{%- for til in tils %}
  <li><a href="{{ til.url | relative_url }}">{{ til.title }}</a>{% if til.tags.size > 0 %} <span class="til-tags">{{ til.tags | join: " · " }}</span>{% endif %}</li>
{%- endfor %}
</ul>
