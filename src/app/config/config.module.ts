import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigPageRoutingModule } from './config-routing.module';
import { LanguageService } from '../language/language.service';
import { ConfigPage } from './config.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ConfigPageRoutingModule
  ],
  declarations: [ConfigPage],
  providers: [LanguageService]
})
export class ConfigPageModule {}
