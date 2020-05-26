import { LightningElement, api } from "lwc";

export default class AlbaButton extends LightningElement {
  @api label;

  handleAnchorClick() {
    this.dispatchEvent(new CustomEvent("click"));
  }
}
