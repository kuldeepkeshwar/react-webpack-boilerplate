import React from 'react';
import ChartWidget from './chart-widget';
import PercentageWidget from './percentage-widget';
import Header from './header';

const appState = [
  {
    title: 'Keyboard & Mouse Activity',
    dropdown: [
      { key: 'Last7days', value: 'Last 7 days', active: true },
    ],
    dotOptions: [
      { key: 'edit', value: 'Edit widget' }, { key: 'delete', value: 'Delete widget' },
    ],
    users: [
      { image: 'http://lorempixel.com/user/50/50/', name: 'Raju Mazumder', percentage: 13 },
      { image: 'http://lorempixel.com/user/50/50/', name: 'Khurram Butt', percentage: 13 },
      { image: 'http://lorempixel.com/user/50/50/', name: 'Eslam Mahmoud', percentage: 16 },
      { image: 'http://lorempixel.com/user/50/50/', name: 'Evgeny Stashevsky', percentage: 19 },
      { image: 'http://lorempixel.com/user/50/50/', name: 'Nataliya Oleynyk', percentage: 25 },
    ],
    footer: {
      users: [
      { image: 'http://lorempixel.com/user/50/50/' },
      { image: 'http://lorempixel.com/user/50/50/' },
      { image: 'http://lorempixel.com/user/50/50/' },
      ],
      moreCount: 900,
      tags: [{ text: 'Lowest' }],
    },
  },
  {
    title: 'Highest percentage of Mobile Time Users',
    dropdown: [
      { key: 'weekly', value: 'Weekly', active: true },
    ],
    dotOptions: [
      { key: 'edit', value: 'Edit widget' }, { key: 'delete', value: 'Delete widget' },
    ],
    users: [
      { image: 'http://lorempixel.com/user/50/50/', name: 'Elle Javier - Quingco', duration: '9h 20m' },
      { image: 'http://lorempixel.com/user/50/50/', name: 'Lester Douglas', duration: '1h 25m' },
      { image: 'http://lorempixel.com/user/50/50/', name: 'Dmitry Shytsko', duration: '30m' },
    ],
    footer: {
      users: [
      { image: 'http://lorempixel.com/user/50/50/' },
      { image: 'http://lorempixel.com/user/50/50/' },
      ],
      tags: [{ text: 'Highest' }],
    },
  },
];

const App = () => {
  const percentageWidgetProps = appState[0];
  const chartWidgetProps = appState[1];
  return (
    <div>
      <Header />
      <section className="content">
        <div className="wrapper">
          <h2>Company Dashboard</h2>
          <div className="row">
            <div className="grid-4">
              <PercentageWidget {...percentageWidgetProps} />
            </div>
            <div className="grid-4">
              <ChartWidget {...chartWidgetProps} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
