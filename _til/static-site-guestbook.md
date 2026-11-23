---
title: Bolting on a guestbook to a "static" site
date: 2022-03-29
tags: jekyll cgi ruby
---

Idea: a Ruby CGI script runs when someone presses "Sign" on a guestbook page.
It writes the note to a Jekyll collection, `_guests`.

```ruby
require 'cgi'

cgi = CGI.new

name = cgi["name"]
guest_sign_note = cgi["comment"]

File.open("../../_guests/%s.md" % name, "w+") do |f|
  guest_sign_content = "---\n" +
                       "name: %s\n" % name +
                       "---\n" +
                       guest_sign_note
  f.write(guest_sign_content)
end

puts cgi.header('status' => 'REDIRECT',
                'location' => '/guestbook')
```

The guestbook page lists every file in the collection:

{% raw %}
```html
<ul>
{% for guest in site.guests %}
  <li>{{ guest.name }}
    <div>{{ guest.content }}</div>
  </li>
{% endfor %}
</ul>
```
{% endraw %}

New signatures show up the next time the site is built.
