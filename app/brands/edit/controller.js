import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    save(formValues) {
      this.store.findRecord('brand', this.model.id).then((brand) => {
        brand.set('name', formValues.name);
        brand.set('country', formValues.code);
      });
      Ember.set(this, 'formValues', {});
      this.transitionToRoute('brands.car', this.model.id);
    }
  }
});
