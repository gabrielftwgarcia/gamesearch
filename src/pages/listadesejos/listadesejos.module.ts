import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Listadesejos } from './listadesejos';

@NgModule({
  declarations: [
    Listadesejos,
  ],
  imports: [
    IonicPageModule.forChild(Listadesejos),
  ],
})
export class ListadesejosModule {}
