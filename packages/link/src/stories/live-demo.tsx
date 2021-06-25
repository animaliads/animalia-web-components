import React from 'react';

const demo = {
  javascript:
    'https://stackblitz.com/edit/ani-link?embed=1&file=index.html&hideExplorer=1',
  angular:
    'https://stackblitz.com/edit/angular-ani-link?embed=1&file=src/app/app.component.html',
  react: 'https://stackblitz.com/edit/react-ani-link?embed=1&file=src/App.js',
};

export default class LiveDemo extends React.Component<
  { language: string },
  { language: string }
> {
  state = { language: 'javascript' };

  render(): JSX.Element {
    return (
      <div>
        <div
          style={{
            display: 'block',
            marginBottom: '8px',
          }}
        >
          <label id="language">Selecione o tipo de aplicação:</label>
          <select
            id="language"
            style={{
              padding: '8px',
            }}
            onChange={event => this.setState({ language: event.target.value })}
          >
            <option value="javascript" selected>
              Javascript
            </option>
            <option value="angular">Angular</option>
            <option value="react">React</option>
          </select>
        </div>
        <iframe
          src={demo[this.state.language]}
          style={{
            width: '90%',
            height: '500px',
            border: 'solid 1px black',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="ani-button"
        ></iframe>
      </div>
    );
  }
}
