import { LightningElement } from "lwc";
export default class TodoItem extends LightningElement {
  uppercaseItemName;

  get itemName() {
    return this.uppercaseItemName;
  }

  set itemName(value) {
    this.uppercaseItemName = value.toUpperCase();
  }

  constructor() {
    super();
    this.itemName = "call lisa jones";
  }
}
