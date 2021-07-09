import React from 'react';

export default class LiveDemoComponent extends React.Component {
  state = { language: 'javascript' };

  props: {
    javascript: string;
    react: string;
  };

  render(): JSX.Element {
    return (
      <div>
        <div
          style={{
            display: 'block',
            marginBottom: '8px',
            fontFamily: 'sans-serif',
          }}
        >
          <label id="language">Selecione o tipo de aplicação:</label>
          <select
            id="language"
            style={{
              padding: '8px',
              marginLeft: '8px',
            }}
            onChange={event => this.setState({ language: event.target.value })}
          >
            <option value="javascript" selected>
              Javascript
            </option>
            <option value="react">React</option>
          </select>
        </div>
        <iframe
          src={this.props[this.state.language]}
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
