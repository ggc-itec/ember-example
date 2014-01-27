App = Ember.Application.create({
  LOG_TRANSITIONS : true
});

App.Router.map(function() {
  this.resource('about');
  this.resource('currency');
  this.resource('stocks', function () {
    this.resource('stock', { path: ':stock_id' });    
  });
  this.resource('activity');
  
});

App.CurrencyRoute = Ember.Route.extend({
  model: function() {
    return currencies;
  }
});

App.StocksRoute = Ember.Route.extend({
  model: function() {
    return stocks;    
  }
});


App.StockRoute = Ember.Route.extend({
  model: function(params) {
    return stocks.findBy('id',params.stock_id);
  }
});

App.ActivityRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&format=json').then(function(data) {
      return data;
    });     
  }
});

var currencies = [
{
  id:'1',
  from: "KRW",
},
{
  id:'2',
  from: "YEN" 
}];


var stocks = [
{
  id:'1',
  quote:'YHOO',
  description: 'Yahoo! an internet company' 
},
{
  id:'2',
  quote:'TWTR', 
  description: 'Twit at Twitter'
}];
