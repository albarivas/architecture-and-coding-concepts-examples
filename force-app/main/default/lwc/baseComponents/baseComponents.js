import { LightningElement } from "lwc";

export default class BaseComponents extends LightningElement {
  myProperty = "Initial value";

  handleButton1Click() {
    this.myProperty = "Button 1 clicked";
  }
}
