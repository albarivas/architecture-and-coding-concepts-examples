import { LightningElement } from "lwc";

export default class EventHandler extends LightningElement {
  myProperty = "Initial value";

  handleLink1Click() {
    this.myProperty = "Link 1 clicked";
  }
}
