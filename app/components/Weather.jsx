var React = require('react');
var Loc = require('Loc');
var WeatherUpdate = require('WeatherUpdate');
var openweathermap = require('Openweathermap');

var Weather = React.createClass({
  getInitialState:function(){
    return {
      isLoading:false
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({isLoading:true});
    openweathermap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    },function(errMessage){
      that.setState({isLoading:false});
      alert(errMessage);
    });
  },
   render:function(){
     var {isLoading,temp,location}=this.state;

     function renderMessage (){
       if(isLoading){
         return <h3>fetching Weather...</h3>
       }else if (temp && location){
        return  <WeatherUpdate temp={temp} location={location}/>
       }
     };

     return(
       <div>
         <h1>Get Weather</h1>
        <Loc onSearch={this.handleSearch}/>
        {renderMessage()}
       </div>
     );
   }
 });

module.exports = Weather;
