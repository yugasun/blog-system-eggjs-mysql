'use strict';

exports.mysql = {
  client: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'blog',
  },
};

exports.userrole = {
  failureHandler(action) {
    switch (action) {
      case 'admin':
        this.status = 403;
        this.redirect('/login');
        break;
      default:
        break;
    }
  },
};

exports.onerror = {
  errorPageUrl: '/500',
};
