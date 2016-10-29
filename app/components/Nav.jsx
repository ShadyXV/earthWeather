var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch:function(e){
    e.preventDefault();
    alert('Not Yet Wired Up!');
  },
  render:function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">earthWeather</li>
            <li>
              <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link>
            </li>
            <li>
              <Link to='/example' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examle</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="seach" placeholder="Search City"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"></input>
              </li>
            </ul>
          </form>
        </div>

      </div>
    );
  }
})


module.exports = Nav;
