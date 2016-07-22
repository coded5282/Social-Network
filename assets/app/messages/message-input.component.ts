import {Component} from "angular2/core";
@Component({
    selector: 'my-message-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <div class="form-group">
                <label for="content">Content</label>
                <input type="text" class="form-control" id="content">
            </div>
            <button type="submit" class="btn btn-primary" (click)="onCreate()">Send Message</button>
        </section>
    `
})

export class MessageInputComponent {
    
}