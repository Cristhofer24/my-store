/* eslint-disable @typescript-eslint/no-unused-vars */
import { CanDeactivateFn } from '@angular/router';
import ProductListComponent from '../products/features/product-list/product-list.component';

export const warningGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const currentComponent = component as ProductListComponent;

  if (currentComponent.form.invalid && currentComponent.form.dirty) {
    return window.confirm('¿Deseas abandonar la página? Los cambios se eliminaran si no los guardas.');
  }
  return true;
};
