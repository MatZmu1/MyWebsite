import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  private typewriter_text: string =
    "<div> The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. ~Steve Jobs </div>";
  private typewriter_display: string = "";

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
    } else {
      that.typewriter_display = "";
    }
    setTimeout(that.typingCallback, 100, that);
  }
  constructor() {}
  ngOnInit() {
    this.typingCallback(this);
  }
}
