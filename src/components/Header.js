import React, { Component } from 'react';
import { connect } from 'react-redux'; //used for storing state
import { Link } from 'react-router-dom'; //routing elements within a react page
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    //render content depending on user logged in
    switch (this.props.auth) {
      case null: //returns nothing back. Page can just hang
        return;
      case false: //user is not logged in
        return (
          <li>
            <a href="/auth/google">Login With Google</a>;
          </li>
        );
      default:
        //user is logged in
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrap">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
