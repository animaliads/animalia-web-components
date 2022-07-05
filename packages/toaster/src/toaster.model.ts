export enum ToasterKind {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export const iconByToasterKind = {
  [ToasterKind.SUCCESS]: 'ok',
  [ToasterKind.INFO]: 'info',
  [ToasterKind.WARNING]: 'exclamation',
  [ToasterKind.ERROR]: 'close',
};
