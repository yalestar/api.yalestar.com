require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => "postgresql",
  :host => "localhost",
  :username => "api",
  :password => "api",
  :database => "yalestar_api"
)

class Minuteman < ActiveRecord::Base
end

re = /[a-z]+/
lyrics = ""
mm = nil

open('yourfile.txt').each_line do |l|
  case 
    when l.start_with?('t=')
      title = l.split('t=')[1]
      mm = Minuteman.new(title: title)
      lyrics = ""
    when re.match(l)
      lyrics += l
    else
      mm.lyrics = lyrics
      print "\n"
      puts mm.title
      mm.save
   end 
  
end