import React from 'react';
import Panel from './panel';
import Tag from './tag';

const PercentageWidget = props => (
  <Panel>
    <Panel.Head>
      <span className="panel-title">{props.title}</span>
      {
        props.dropdown.map((item) => {
          return (
            <div className="dropdown mr-15">
              <a key={item.value} href="" className="dropdown-link">{item.value} <span className="arrowdown" /></a>
              <div className="dropdown-menu">
                <a className="dropdown-item active">Last 7 days</a>
                <a className="dropdown-item">Last 6 days</a>
                <a className="dropdown-item">Last 5 days</a>
              </div>
            </div>
          );
        })
      }
      <div className="dropdown">
        <div className="dotted-icon">
          <span />
          <span />
          <span />
        </div>
        <div className="dropdown-menu">
          <a className="dropdown-item active">Weekly</a>
          <a className="dropdown-item">Monthly</a>
          <a className="dropdown-item">Yearly</a>
        </div>
      </div>
    </Panel.Head>
    <Panel.Body>
      {props.users.map((user) => {
        return (
          <div key={user.name} className="flex-container activity-detail">
            <div className="avatar"><img src={user.image} alt="" /></div>
            <div className="name">{user.name}</div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${user.percentage}%` }} />
            </div>
            <div className="percentage"> {`${user.percentage}%`} </div>
          </div>
        );
      })}
    </Panel.Body>
    <Panel.Footer>
      <div className="user-list">
        {props.footer.users.map((user) => {
          return (
            <div key={user.image} className="avatar">
              <img src={user.image} alt="" />
            </div>
          );
        })}
      </div>
      <a href="" className="link">+{props.footer.moreCount} more</a>
      {props.footer.tags.map(tag => <Tag key={tag.text} {...tag} />)}
    </Panel.Footer>
  </Panel>
);
PercentageWidget.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  footer: React.PropTypes.objectOf(React.PropTypes.object).isRequired,
  title: React.PropTypes.string.isRequired,
  dropdown: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
export default PercentageWidget;
