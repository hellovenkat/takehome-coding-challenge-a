import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NewtargetComponent } from './components/newtarget/newtarget.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSelect, MatSelectModule} from '@angular/material';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { CreatetargetComponent } from './components/createtarget/createtarget.component';
import { TargetDetailComponent } from './components/target-detail/target-detail.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './db/in-memory-data.service';
import {MatCardModule} from '@angular/material/card';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { ColorPickerModule } from 'ngx-color-picker';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    NewtargetComponent,
    MainNavComponent,
    CreatetargetComponent,
    TargetDetailComponent,
    ConfigurationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatTabsModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
