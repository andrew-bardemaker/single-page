export default class App {
  constructor(components) {
    this.components = components;
  }

  bootstrap() {
    if (!this.components || this.components.length <= 0) {
      return;
    }

    this.components.forEach((component) => {
      const componentExists = component.selector && !!document.querySelector(component.selector);

      if (componentExists) {
        component.bootstrap();
      }
    });
  }
}
