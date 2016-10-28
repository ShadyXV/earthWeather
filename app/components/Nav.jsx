var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return(

    <div>
      <h2>Nav Comp</h2>
      <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
      <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link>
      <Link to='/example' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examle</Link>
    </div>
  );
}
module.exports = Nav;
