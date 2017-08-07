import React from 'react';
import { RadialBarChart, RadialBar } from 'recharts';
import Panel from './panel';
import Tag from './tag';

const defaultChartProps = {
  startAngle: 90,
  maxAngle: 350,
  endAngle: -270,
  width: 350,
  height: 180,
  innerRadius: 55,
  outerRadius: 95,
  barSize: 10,
  barGap: 2,
};
const RadialChart = (props) => {
  const options = Object.assign({}, defaultChartProps, props);
  return (
    <RadialBarChart {...options}>
      <RadialBar background dataKey={options.dataKey} cornerRadius={5} />
    </RadialBarChart>
  );
};
RadialChart.propTypes = {
  dataKey: React.PropTypes.string.isRequired,
};

const ChartWidget = (props) => {
  const chartProps = {
    data: props.users,
    dataKey: 'duration',
  };
  return (<Panel>
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
      <div className="flex-container activity-detail">
        <div className="row">
          <div className="grid-4">
            {
              props.users.map((user) => {
                return (<div key={user.name}>{user.name}</div>);
              })
            }
          </div>
          <div className="grid-8">
            <RadialChart {...chartProps} />
          </div>
        </div>
      </div>
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
      {props.footer.tags.map(tag => <Tag key={tag.text} {...tag} />)}
    </Panel.Footer>
  </Panel>
  );
};
ChartWidget.propTypes = {
  title: React.PropTypes.string.isRequired,
  dropdown: React.PropTypes.arrayOf.isRequired,
  users: React.PropTypes.arrayOf.isRequired,
  footer: React.PropTypes.objectOf.isRequired,
};
export default ChartWidget;
