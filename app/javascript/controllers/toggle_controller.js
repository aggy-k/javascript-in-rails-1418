import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["formContainer"]

  connect() {
    // console.log('connected to toggle controller');
  }

  fire() {
    console.log('fired.')
    console.log('target formContainer?', this.formContainerTarget)
    this.formContainerTarget.classList.toggle('d-none');
  }
}
