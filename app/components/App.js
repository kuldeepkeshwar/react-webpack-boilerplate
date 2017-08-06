import React from 'react';

const App = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <a className="active" href="">Dashboard</a>
          <a href="">Edit Time</a>
          <a href="">Screenshots</a>
          <a href="">Reports</a>
          <a href="">Payments</a>
        </nav>
      </header>

      <section className="content">
        <div className="wrapper">
          <h2>Company Dashboard</h2>
          <div className="row">
            <div className="grid-4">
              <div className="panel">
                <div className="panel-head">
                  <span className="panel-title">Keyboard &amp; Mouse Activity</span>
                  <a href="" className="dropdown-link">Last 7 days</a>
                  <span className="dotted-icon" />
                </div>
                <div className="panel-body">
                  <div className="flex-container activity-detail">
                    <div className="avatar"><img src="http://lorempixel.com/user/50/50/" alt="" /></div>
                    <div className="name">Raju Mazumder</div>
                    <div className="progress-bar">
                      <div className="progress" />
                    </div>
                    <div className="percentage">13%</div>
                  </div>

                  <div className="flex-container activity-detail">
                    <div className="avatar"><img src="http://lorempixel.com/user/50/50/" alt="" /></div>
                    <div className="name">Khurram Butt</div>
                    <div className="progress-bar">
                      <div className="progress" />
                    </div>
                    <div className="percentage">14%</div>
                  </div>

                  <div className="flex-container activity-detail">
                    <div className="avatar"><img src="http://lorempixel.com/user/50/50/" alt="" /></div>
                    <div className="name">Eslam Mahmoud</div>
                    <div className="progress-bar">
                      <div className="progress" />
                    </div>
                    <div className="percentage">17%</div>
                  </div>

                  <div className="flex-container activity-detail">
                    <div className="avatar"><img src="http://lorempixel.com/user/50/50/" alt="" /></div>
                    <div className="name">Evgeny Stashevsky</div>
                    <div className="progress-bar">
                      <div className="progress" />
                    </div>
                    <div className="percentage">20%</div>
                  </div>

                  <div className="flex-container activity-detail">
                    <div className="avatar"><img src="http://lorempixel.com/user/50/50/" alt="" /></div>
                    <div className="name">Nataliya Oleynyk</div>
                    <div className="progress-bar">
                      <div className="progress" />
                    </div>
                    <div className="percentage">13%</div>
                  </div>
                </div>
                <div className="panel-foot">
                  <div className="user-list">
                    <div className="avatar">
                      <img src="http://lorempixel.com/user/50/50/" alt="" />
                    </div>

                    <div className="avatar">
                      <img src="http://lorempixel.com/user/50/50/" alt="" />
                    </div>

                    <div className="avatar">
                      <img src="http://lorempixel.com/user/50/50/" alt="" />
                    </div>
                  </div>

                  <a href="" className="link">+900 more</a>

                  <label htmlFor className="label">Lowest</label>
                </div>
              </div>
            </div>

            <div className="grid-4">
              <div className="panel">
                <div className="panel-head">
                  <span className="panel-title">Hours Tracked</span>
                  <a href="" className="dropdown-link">Last 7 days</a>
                  <span className="dotted-icon" />
                </div>
                <div className="panel-body">
                  <div className="flex-container activity-detail">
                    <div className="avatar"><img src="http://lorempixel.com/user/50/50/" alt="" /></div>
                    <div className="name">Raju Mazumder</div>
                    <div className="progress-bar">
                      <div className="progress" />
                    </div>
                    <div className="percentage">13%</div>
                  </div>

                  <div className="flex-container activity-detail">
                    <div className="avatar"><img src="http://lorempixel.com/user/50/50/" alt="" /></div>
                    <div className="name">Khurram Butt</div>
                    <div className="progress-bar">
                      <div className="progress" />
                    </div>
                    <div className="percentage">14%</div>
                  </div>

                  <div className="flex-container activity-detail">
                    <div className="avatar"><img src="http://lorempixel.com/user/50/50/" alt="" /></div>
                    <div className="name">Eslam Mahmoud</div>
                    <div className="progress-bar">
                      <div className="progress" />
                    </div>
                    <div className="percentage">17%</div>
                  </div>

                  <div className="flex-container activity-detail">
                    <div className="avatar"><img src="http://lorempixel.com/user/50/50/" alt="" /></div>
                    <div className="name">Evgeny Stashevsky</div>
                    <div className="progress-bar">
                      <div className="progress" />
                    </div>
                    <div className="percentage">20%</div>
                  </div>

                  <div className="flex-container activity-detail">
                    <div className="avatar"><img src="http://lorempixel.com/user/50/50/" alt="" /></div>
                    <div className="name">Nataliya Oleynyk</div>
                    <div className="progress-bar">
                      <div className="progress" />
                    </div>
                    <div className="percentage">13%</div>
                  </div>
                </div>
                <div className="panel-foot">
                  <div className="user-list">
                    <div className="avatar">
                      <img src="http://lorempixel.com/user/50/50/" alt="" />
                    </div>

                    <div className="avatar">
                      <img src="http://lorempixel.com/user/50/50/" alt="" />
                    </div>

                    <div className="avatar">
                      <img src="http://lorempixel.com/user/50/50/" alt="" />
                    </div>
                  </div>

                  <a href="" className="link">+900 more</a>

                  <label htmlFor className="label">Lowest</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
