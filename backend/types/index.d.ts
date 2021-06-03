declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';

  const content: DocumentNode;
  export default content;
}
