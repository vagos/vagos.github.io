---
title: Home
layout: home
permalink: /index
permalink_name: /index
profile: me
js_files: 
    - /assets/js/index.js
    - /assets/js/now.js
---

<div class=container>

<div class="profile">
    <img style="display: inline-block; float:left;" src="/assets/img/me/me.jpg" alt="profile picture"/>
</div>

<div class="description" markdown=1>

<div id="name">
Evangelos (Vagos) Lamprou
</div>

I am a PhD student at Brown University advised by Prof. [Nikos Vasilakis](https://nikos.vasilak.is/).

My research interests lie in programming-languages, operating systems, and security.

[[vagos@lamprou.xyz]](mailto:vagos@lamprou.xyz)
[[Scholar]](https://scholar.google.com/citations?user=O-fz6ZgAAAAJ&hl=en)
[[CV]](/assets/pdf/cv.pdf)
[[GitHub]](https://github.com/vagos)
<a id="social-btn">[...]</a>
<span id="social" markdown="1" style="display: none">
[[RSS]](/feed/blog.xml)
[[PGP]](/assets/txt/key.txt)
[[Hacker News]](https://news.ycombinator.com/user?id=vagozino)
[[Last.fm]](https://www.last.fm/user/vagozino)
[[SoundCloud]](https://soundcloud.com/vagozino)
[[X]](https://x.com/vagozino)
[[Mastodon]](https://mastodon.social/@vagozino)
[[LinkedIn]](https://www.linkedin.com/in/evangelos-lamprou/)
[[Pinboard]](https://pinboard.in/u:vagos)
[[Library Thing]](https://www.librarything.com/profile/elamprou)
[[Steam]](https://steamcommunity.com/id/vagoz)
Urbit: ~dopnyr-figbud
Chinese name: 法高思
</span>
</div>

</div>

## News

<div class="info">
  {% assign news = site.data.news | sort_by: 'date' | reverse %}
  <table>
  <tbody>
    {% for item in news %}
      <tr>
        <th style="width: 15%">{{ item.date | date: "%b %Y" }}</th>
        <td style="width: 85%">{{ item.description | markdownify | remove: '<p>' | remove: '</p>' }}</td>
      </tr>
    {% endfor %}
  </tbody>
  </table>
</div>

<h3 id="whatnow" style="display: none;">Right now</h3>

<div id="now" class="info" style="display: none;">
    <div id="current-task" style="word-wrap: break-word; white-space: pre-wrap; display: none;"> </div>
    <div id="current-track" style="display: none;"> </div>
</div>

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

    {% if project.html %}
        <div style="max-width: 15em; height: auto; width: 100%;">{{ project.html }}</div>
    {% elsif project.img %}
        <img src="{{ project.img }}" alt="{{ project.title }}" style="width: 15em; height: auto; margin-top:1%" />
    {% endif %}
</div>
{% endfor %}

## Publications

{% bibliography %}
