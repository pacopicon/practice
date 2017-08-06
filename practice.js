List of interview questions:
(1) What are the differences between AngularJS and ReacJS
(2) How do you do inheritance with classes
(3) Explain a Closure in javascript
  (3.1) For example, what does the following print?

  var arr = []

  for (i=0; i<10; i++) {
    arr.push(function() {alert(i)})
  }

  for (j=0; j<10; j++) {
    arr[j]()
  }
(4) Look at this React web page (it has search functionality, a field that display the info of what you searched), which components need state and which components can be stateless?
(5) What is the difference between a function and a method
(6) What are Apply and Call and how are they used?  Use them in examples
(7) How does data-binding work in Angular?

List of interview programming simulations:

(1) code top trader Logic
  (1.1) Calculate Trader and Trade scores using following objects: Traders, Trades, Stocks
    (1.2.1) trader: {
          id: '',
          trades: [],
          score: 0
        }
    (1.2.2) trade: {
          id: '',
          tradeType: '',
          symbol: '',
          cost: 0,
          quantityTraded: 0
        }
    (1.2.3) stock: {
          id: '',
          symbol: '',
          vwap: 0
        }
  (1.2) Extract these objects from JSON  trades = {
                                          traders: [],
                                          trades: [],
                                          stocks: [],
                                        }
  (1.3) Come up with scores for each trader using the following formulas:
      (1.3.1)
      if (trade.tradeType === 'Buy') {
        var score = (trade.cost - stock.vwap) * trade.quantity
      } else if (trade.tradeType === 'Sell') {
        var score = (strock.wvap - trade.cost) * trade.quantity
      }
  (1.4) Use the following functions in order to compute (1.3, 1.3.1)
    (1.4.1) calculateScoreForTrades
    (1.4.2) calculateScoresForTrade
    (1.4.3) calculateScoreForTrader
    (1.4.4) extradTrade
(2) Display Top Trader in a React UI
(3) GET, POST, PUT, DELETE data to and from Node.js
(4) Test Top Trader with Karma.js
