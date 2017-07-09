import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Imports for loading & configuring the in-memory api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './services/in-memory-data.service'

// Project Modules
import { AppRoutingModule} from './app-routing.module'
import { AuthModule } from './auth/auth.module'

// Project Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WalletComponent } from './wallet/wallet.component'

// Project Services
import { WalletService } from './services/wallet.service';
import { AuthService } from './services/auth.service';
import { TransactionService } from './services/transaction.service' 


@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    HomeComponent,
    NavComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true
    }),
    AppRoutingModule,
    AuthModule
  ],
  providers: [ WalletService, AuthService, TransactionService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
