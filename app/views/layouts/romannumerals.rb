require 'rspec'
class RomanNumeral
	def roman(number)
		numeral = []
		if number == 10
			numeral << "X"
		end
		return numeral
	end
end






# RSpec.describe ChangeMachine do
#   describe '#roman' do
#   	it 'should return numural X' do
#   		number = RomanNumeral.new
#   		expect(number.roman(10)).to eq(["X"])
#   	end
    
#   end
# end