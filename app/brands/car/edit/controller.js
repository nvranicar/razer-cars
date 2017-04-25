import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    save(formValues) {
      debugger;
      this.store.findRecord('model').then((car) => {
        car.set('name', formValues.name);
      });
    }
  }
});
