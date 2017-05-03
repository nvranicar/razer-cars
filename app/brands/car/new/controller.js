import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    save(formValues) {
      this.store.createRecord('car', {
        name: formValues.name,
        year: formValues.year,
        hp: formValues.hp,
        price: formValues.price,
        brand: this.model,
      }).save();
      Ember.set(this, 'formValues', {});
      this.transitionToRoute('brands.car');
    },
  }
});
