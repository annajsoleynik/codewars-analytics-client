import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import CodewarsCurrentStatus from './../../codewars/codewarsCurrentStatus';
import CodewarsChart from '../../codewars/codewarsChart';

class UserProfileView extends Component {
  render() {
    const { codewarsAnalytics } = this.props.userAuthorizedInfo;

    return (
      <div>
        <Helmet>
          <title>Profile</title>
        </Helmet>

        {codewarsAnalytics && <CodewarsChart codewarsAnalytics={codewarsAnalytics} />}

        <hr />

        {codewarsAnalytics && (
          <CodewarsCurrentStatus codewarsAnalytics={codewarsAnalytics} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAuthorizedInfo: state.user.userAuthorizedInfo
});

const mapDispatchToProps = dispatch => ({
  // userLogin: (email, password) => dispatch(userLogin(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileView);
