#!/bin/env ruby

require 'cgi'

cgi = CGI.new

name = cgi["name"]
guest_sign_note = cgi["comment"]

guest_folder = "/var/www/vagos/_guests/"

unless name.to_s.strip.length == 0

  File.open("#{guest_folder}/#{name}.md", "w+") do |f|

    guest_sign_content = "---\n" +
                         "name: %s\n" % name +
                         "---\n" +
                         guest_sign_note 

    f.write(guest_sign_content)
  end

end

print cgi.header('status' => 'REDIRECT',
                'location' => '/guestbook')
