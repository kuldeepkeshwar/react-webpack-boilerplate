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
            <a key={item.value} href="" className="dropdown-link">{item.value}</a>
          );
        })
      }
      <span className="dotted-icon" />
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
      {props.footer.tags.map(tag => <Tag {...tag} />)}
    </Panel.Footer>
  </Panel>
);
PercentageWidget.propTypes = {
  users: React.PropTypes.arrayOf.isRequired,
  footer: React.PropTypes.objectOf.isRequired,
  title: React.PropTypes.string.isRequired,
  dropdown: React.PropTypes.arrayOf.isRequired,
};
export default PercentageWidget;
