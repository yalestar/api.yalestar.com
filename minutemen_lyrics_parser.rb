require 'htmlentities'
require 'nokogiri'
require 'mechanize'
require 'open-uri'

url = 'http://lyrics.wikia.com/Minutemen'
agent = Mechanize.new
page = agent.get(url)

# each of these contains links to a song's lyrics
# but some of them are non-existent

file = File.open('yourfile.txt', 'w')
page.links_with(:href => /^\/Minutemen:/).each do |l|
	title = l.href.split(':').last.gsub(/_/, ' ')
	song_page = l.click
	# http://lyrics.wikia.com/Minutemen:History_Lesson
	div = song_page.search('div.lyricbox')
	if div
		pf = div.text.gsub(/([a-z])([A-Z])/, '\1 \2').gsub(/Send.*Cell Ad/, '') 
		file.write(title) unless title =~ /action=edit/
		file.write(pf)
	end
end

