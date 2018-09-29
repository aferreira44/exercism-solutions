module TwoFer
  def self.two_fer(name = nil)
    return "One for #{name}, one for me." if !name.nil?
    'One for you, one for me.'
  end
end
