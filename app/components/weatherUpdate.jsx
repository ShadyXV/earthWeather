var React = require('react');

// var WeatherUpdate  = React.createClass({
//   render:function (){
//     var {temp,location} = this.props;
//     return (
//       <p>Its {temp}c in {location}</p>
//     );
//   }
// });

//Stateless functional components with props.
// var WeatherUpdate = (props) =>{
//   var {temp, location} = props;
//   return (
//     <p>Its {temp}c in {location}</p>
//   );
// }
// module.exports = WeatherUpdate;

//es6 destructruing inside arguments.
var WeatherUpdate = ({temp, location}) =>{
  return (
    <p>Its {temp}c in {location}</p>
  );
}
module.exports = WeatherUpdate;
