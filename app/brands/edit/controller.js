import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    save() {
      this.model.save();
      Ember.set(this, 'formValues', {});
      this.transitionToRoute('brands.car', this.model.id);
    }
  }
});
