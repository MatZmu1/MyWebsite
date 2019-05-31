import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor(public db: AngularFirestore) {}
  public name: string = "";
  email: string;
  subject: string;
  message: string;
  ngOnInit() {}

  onSubmit() {
    let obj = {
      mail: this.email,
      name: this.name,
      subject: this.subject,
      message: this.message
    };
    // console.log("123");
    window.alert("Thank's for the message!!!");
    this.db.collection("contactForm").add({ obj });
  }
}
