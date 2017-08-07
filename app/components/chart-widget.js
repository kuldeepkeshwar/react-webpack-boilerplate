import React from 'react';
import Panel from './panel';

import Tag from './tag';

const ChartWidget = props => (
  <Panel>
    <Panel.Head>
      <span className="panel-title">{props.title}</span>
      {
        props.dropdown.map((item) => {
          return (
            <a href="" className="dropdown-link">{item.value}</a>
          );
        })
      }
      <span className="dotted-icon" />
    </Panel.Head>
    <Panel.Body>
      {props.users.map((user) => {
        return (
          <div className="flex-container activity-detail">
            <div className="avatar"><img src={user.image} alt="" /></div>
            <div className="name">{user.name}</div>
            <div className="progress-bar">
              <div className="progress" />
            </div>
            <div className="percentage"> {user.duration} </div>
          </div>
        );
      })}
    </Panel.Body>
    <Panel.Footer>
      <div className="user-list">
        {props.footer.users.map((user) => {
          return (
            <div className="avatar">
              <img src={user.image} alt="" />
            </div>
          );
        })}
      </div>
      {props.footer.tags.map(tag => <Tag {...tag} />)}
    </Panel.Footer>
  </Panel>
);
ChartWidget.propTypes = {
  title: React.PropTypes.string.isRequired,
  dropdown: React.PropTypes.arrayOf.isRequired,
  users: React.PropTypes.arrayOf.isRequired,
  footer: React.PropTypes.objectOf.isRequired,
};
export default ChartWidget;
