import React from 'react';

export default class BestPracticesComponent extends React.Component {
  props: {
    doImg: string;
    dontImg: string;
    doAlt: string;
    dontAlt: string;
    doDescription: string;
    dontDescription: string;
    warning: boolean;
  };

  render(): JSX.Element {
    return (
      <div
        style={{
          padding: '0 0 24px 0',
          display: 'flex',
          fontFamily: 'sans-serif',
          lineHeight: '24px',
          color: '#333333',
        }}
      >
        <div style={{ width: '50%', marginRight: '4%' }}>
          <img
            style={{ width: '100%' }}
            src={this.props.doImg}
            alt={this.props.doAlt}
          />
          <b>Fazer</b>
          <p>{this.props.doDescription}</p>
        </div>

        <div style={{ width: '50%' }}>
          <img
            style={{ width: '100%' }}
            src={this.props.dontImg}
            alt={this.props.dontAlt}
          />
          <b>{this.props.warning ? 'Cuidado' : 'Não fazer'}</b>
          <p>{this.props.dontDescription}</p>
        </div>
      </div>
    );
  }
}
