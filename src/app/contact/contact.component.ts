import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor() {}
  name: string;
  mail: string;
  message: string;
  ngOnInit() {}
}

// onSubmit() {
//   console.log(this.name + this.mail + this.message);
// }
