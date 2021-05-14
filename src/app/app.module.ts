import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { PeopleService } from './people.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AutoCompleteModule
  ],
  providers: [PeopleService],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
