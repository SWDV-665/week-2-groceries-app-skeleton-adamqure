import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroceryPage } from './grocery.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GroceryPageRoutingModule } from './grocery-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GroceryPageRoutingModule
  ],
  declarations: [GroceryPage]
})
export class GroceryPageModule {}
