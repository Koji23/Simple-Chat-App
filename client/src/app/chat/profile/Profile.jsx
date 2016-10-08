import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUsername } from './profile_actions.js';

const Profile = (props) => {
  let username = '';
  const handleClick = (e) => {
    props.updateUsername(username.value);
  };
  return (
    <div className="profile">
      <div className="profileCard">
        <div>
          <h3>Username: { props.username }</h3>
          <input ref={ node => username = node } type="text" /><br />
          <button onClick={ e => handleClick(e) }>Save</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.profile.username,
  }
};

const mapDispatchToProp = (dispatch) => {
  return bindActionCreators({ updateUsername }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(Profile);