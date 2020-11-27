import Selectors from './test.selectors';

const { version } = require('../../package.json');

class Config {
  version!: string;
  endpoints!: {
    https: string;
    wss: string;
  };

  constructor(env: NodeJS.ProcessEnv) {
    Object.assign(this, {
      version,
      endpoints: {
        https: env.REACT_APP_ENDPOINT_HTTPS,
        wss: env.REACT_APP_ENDPOINT_WSS
      }
    });
  }
}

export { Config as default, Selectors };
