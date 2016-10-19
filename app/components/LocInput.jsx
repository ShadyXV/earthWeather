var React = require('react');
//appid=c4e735ea8bd7e7b6dc8368c752517b2d of andrew
var Loc = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length >0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render:function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' placeholder='Enter Location' ref="location"/>
        <button>Get Weather</button>
    </form>
    );
  }
});

module.exports  = Loc;
