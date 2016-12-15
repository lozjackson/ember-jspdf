/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-jspdf',

  init: function(name) {
    this._super.init && this._super.init.apply(this, arguments);
    var assets_path = require('path').join('jspdf','dist','jspdf.min.js');
    this.treePaths['vendor'] = require.resolve('jspdf').replace(assets_path, '');
  },

  included: function(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/jspdf/dist/jspdf.min.js');
  }
};
