class Phrase
  def initialize(words)
    @words = words
  end

  def word_count
    hash = Hash.new

    # Split words to an array avoiding special characters
    array = @words.gsub(/[^a-zA-Z0-9']|'(?!\w\s)/, ' ').strip.split(%r{[, ]\s*})

    # Normalize case
    array.each { |w| w.downcase! }

    # Count words
    array.map { |w| hash[w] = array.count(w) }
      
    hash
  end
end

