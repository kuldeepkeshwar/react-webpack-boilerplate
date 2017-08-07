import React from 'react';
import './styles.scss';

export default class SideMenu extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      open: false,
    };
  }
  clickHandler(index) {
    this.toggle();
    const { onClick } = this.props;
    if (onClick) {
      onClick(index);
    }
  }
  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }
  render () {
    return (
      <div className="dropdown">
        <div role="presentation" className="dotted-icon" onClick={() => this.toggle()}>
          <span />
          <span />
          <span />
        </div>
        {this.state.open && (
          <div className="dropdown-menu">
            {
            this.props.items.map((item, i) => {
              return (
                <a key={item.value} className="dropdown-item" tabIndex={-1} role="link" onClick={() => this.clickHandler(i)}>{item.value}</a>
              );
            })
          }
          </div>
        )}
      </div>
    );
  }
}
SideMenu.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onClick: React.PropTypes.func.isRequired,
};
