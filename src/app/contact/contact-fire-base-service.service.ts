import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "firebase";
import { Observable } from "rxjs/index";
import { FirebaseDatabase } from "angularfire2";

@Injectable({
  providedIn: "root"
})
export class ContactFireBaseServiceService {
  constructor(private fireAuth: AngularFireAuth) {}

  // get user(): User | null {
  //   // return this.fireAuth.;
  // }
}
