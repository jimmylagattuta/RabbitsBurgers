require ‘rspec’

class Coin

 def change(money)
    ary = []
    while money >= 25 do
      money -= 25
      ary << 25
      if money >= 10 && money < 25 do
        money -= 10
        ary << 10
      elsif money >= 5 && money < 10 do
        money -= 5
        ary << 5
      elsif money >= 1 && money < 5 do
        money -= 1
        ary << 1 
      end
    return ary
      

    # while money >= 25 do
    #   money = money - 25
    #   ary << 25
    #   while money >= 10 && money < 25 do
    #     money = money - 10
    #      ary << 10
    #     while money >= 5 && money <10 do
    #       money = money - 5
    #       ary << 5
    #       while money >= 1 && money < 5 do
    #         money = money -1
    #         ary << 1
    #       end
    #     end
    #   end
    # end
  end

end

RSpec.describe Coin do
  describe ‘#change’ do
    it ‘should convert money into coins’ do
      coin = Coin.new
      expect(coin.change(116)).to eq([25, 25, 25, 25, 10, 5, 1])
    end
  end
end