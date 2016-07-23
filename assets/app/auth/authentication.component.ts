import {Component} from 'angular2/core'; 
import {SignupComponent} from "./signup.component"; 
@Component({
    selector: 'my-auth',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                
                </ul> 
            </nav>
        </header> 
    `,
    directives: [SignupComponent]
})

export class AuthenticationComponent {
    
}