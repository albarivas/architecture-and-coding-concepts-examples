import { LightningElement, api } from "lwc";

export default class AlbaButton extends LightningElement {
  @api label;

  handleButtonClick() {
    this.dispatchEvent(new CustomEvent("albaclick"));
  }
}
