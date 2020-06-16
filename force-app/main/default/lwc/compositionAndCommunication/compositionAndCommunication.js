import { LightningElement } from "lwc";
export default class CompositionAndCommunication extends LightningElement {
  myProperty = "Initial value";

  handleAlbaClick() {
    this.myProperty = "Alba Button clicked";
  }
}
