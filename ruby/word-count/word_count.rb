class Phrase
  def initialize(words)
    @words = words
  end

  def word_count
    result = Hash.new

    # Remove special characters and strip
    @words.gsub!(/[^a-zA-Z0-9']|'(?!\w\s)/, ' ')
    @words.strip!

    # Split words in an array
    array = @words.split(%r{[, ]\s*})

    # Normalize case
    array.each { |w| w.downcase! }

    # Count words
    array.map { |w| result[w] = array.count(w) }
      
    result
  end
end
