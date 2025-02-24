import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient()
    ]
});