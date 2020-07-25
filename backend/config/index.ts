type ConfigType = {
  logPath: string;
  defaultPort: number;
};

const Config: ConfigType = {
  logPath: './logs',
  defaultPort: 4000
};

export default Config;
