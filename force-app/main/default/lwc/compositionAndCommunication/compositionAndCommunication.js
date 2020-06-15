import { LightningElement } from "lwc";
export default class Communication extends LightningElement {
  myProperty = "Initial value";

  handleButton1Click() {
    this.myProperty = "Button 1 clicked";
  }
}
