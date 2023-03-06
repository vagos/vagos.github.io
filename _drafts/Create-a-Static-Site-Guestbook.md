---
layout: post
title:  "Creating a Static Site GuestBook"
---

Creating a static site guestbook might not be the most practical thing. However, I think it works pretty well for how simple it is.

### Why

- Don't have to bother with a database.
- The implementation code is quite simple and obvious.
- Messages can be filtered via an automatic tool or manually before they ever appear on the page.

### How

The following CGI Ruby script runs whenever someone presses presses "Sign" on the [guestbook](https:://www.vagoslabrou.xyz/guestbook) page. 

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
                'location' => 'www.vagoslabrou.xyz/guestbook')
```

When I regenerate the static website, all the new notes will appear on the final generated html.

Here is the Liquid code: 

```html
<ul>
{% for guest in site.guests %}

<li> {{ guest.name }} 

<div>
    <div>
         {{guest.content }}
    </div>
</div>

{% endfor %}
<ul>
```

This just takes all the guest files in the `_guests` folder and adds the content to the page. 

This means that periodically, I have to log in to my server and check the folder. If any new notes have been created, 
I'll have to re-generate the site.

### Possible Improvements

The site regeneration could be handled by the script, like so: 

```ruby
# code
```

However, I did not add that because I fear it will cause 
a big strain on the server if it has to regenerate the site every few minutes. 

### Helpful Links

- https://www.unix.com/shell-programming-and-scripting/218021-cant-create-file-cgi-script.html
- https://landchad.net/cgi
