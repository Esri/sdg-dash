export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('route', 'session', 'service:session');
  application.inject('controller', 'session', 'service:session');
  application.inject('component', 'session', 'service:session');
}

export default {
  name: 'session',
  initialize
};
