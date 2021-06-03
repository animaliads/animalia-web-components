import React from 'react';

const javascript = (
  <iframe
    src="https://codesandbox.io/embed/ani-button-ofjep?fontsize=14&hidenavigation=1&theme=dark"
    style={{
      width: '90%',
      height: '500px',
      border: 'solid 1px black',
      borderRadius: '4px',
      overflow: 'hidden',
    }}
    title="javascript: ani-button"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
);

const angular = (
  <iframe
    src="https://codesandbox.io/embed/ani-button-ofjep?fontsize=14&hidenavigation=1&theme=dark"
    style={{
      width: '90%',
      height: '500px',
      border: 'solid 1px black',
      borderRadius: '4px',
      overflow: 'hidden',
    }}
    title="angular: ani-button"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
);

const react = (
  <iframe
    src="https://codesandbox.io/embed/ani-button-ofjep?fontsize=14&hidenavigation=1&theme=dark"
    style={{
      width: '90%',
      height: '500px',
      border: 'solid 1px black',
      borderRadius: '4px',
      overflow: 'hidden',
    }}
    title="react: ani-button"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
);

const demo = {
  javascript,
  angular,
  react,
};

export default class LiveDemo extends React.Component<
  { language: string },
  { language: string }
> {
  state = { language: 'javascript' };

  render(): JSX.Element {
    return (
      <div>
        <select
          name="select"
          onChange={event => this.setState({ language: event.target.value })}
        >
          <option value="javascript" selected>
            Javascript
          </option>
          <option value="angular">Angular</option>
          <option value="react">React</option>
        </select>

        <p>{demo[this.state.language]}</p>
      </div>
    );
  }
}
