import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items", "form"]

  connect() {
    console.log('From insert-in-list controller')
    // console.log(this.element)
    // console.log(this.itemsTarget)
    console.log(this.formTarget)
  }

  send(e) {
    e.preventDefault();
    // console.log(e)
    // fetch(url, {})
    fetch(this.formTarget.action, {
      method: "POST", // Could be dynamic with Stimulus values
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data.form)
        this.formTarget.outerHTML = data.form
        if (data.inserted_item) {
          // beforeend could also be dynamic with Stimulus values
          this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item)
        }
      })
  }
}
