(function(){

  'use strict';

  function ViewModel() {
    this.event = ko.observable('');
    this.files = ko.observableArray([ Math.random() ]);

    this.change = (function(target, event) {
      this.event('on change');
    }).bind(this);

    this.reset = (function() {
      this.event('');
      this.files([ Math.random() ]);
    }).bind(this);
  }

  ko.applyBindings(new ViewModel);

}());
