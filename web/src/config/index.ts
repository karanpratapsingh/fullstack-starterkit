import { required } from '@web/utils';
import Selectors from './test.selectors';

const { version } = require('../../package.json');

type Endpoint = {
  https: string;
  wss: string;
};

class Config {
  version: string;
  endpoints: Endpoint;

  constructor(env: NodeJS.ProcessEnv) {
    this.version = version;
    this.endpoints = {
      https: required<string>(env.REACT_APP_ENDPOINT_HTTPS),
      wss: required<string>(env.REACT_APP_ENDPOINT_WSS)
    };
  }
}

export { Config as default, Selectors };
