import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

@Component({
	selector: "app",
	template: "<h3>{{message}}</h3>"
})
class AppComponent{
	message: string;

	constructor(){
		this.message = "Hello ngHyderabad!!";
	}
}

bootstrap(AppComponent);