import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { ImagePreloadDirective } from './image-preload.directive';
import {TimeAgoPipe } from 'time-ago-pipe';
import { InitialsPipe } from './initials.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LatestnewsComponent,
    ImagePreloadDirective,
    TimeAgoPipe,
    InitialsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
