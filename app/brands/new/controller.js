import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    save(formValues) {
      this.store.createRecord('brand', {
        name: formValues.name,
        country: formValues.code,
      }).save();
      this.transitionToRoute('brands');
    }
  }
});
