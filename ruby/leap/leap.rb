module Year
  def self.leap?(year)
   return false if (year % 100).zero? and !(year % 400).zero?
   (year % 4).zero?
  end
end
