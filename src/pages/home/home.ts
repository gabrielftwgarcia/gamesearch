import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { IGames } from '../../interfaces/IGames';

import { GamesProvider } from '../../providers/games/games';
import { ListPage } from '../list/list';
import { DesejosProvider } from '../../providers/desejos/desejos';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: Promise<any>;
  desejos = [];
  items: string[];

  constructor(public navCtrl: NavController, public gameProvider: GamesProvider, public desejosProvider: DesejosProvider, public toastCtrl: ToastController) {
    this.lista = this.gameProvider.allTeste();
  }

  ionViewDidEnter(){
    this.desejosProvider.getStorage('desejos').then(res =>{
      if(res){
        this.desejos = res;
      }
    });
  }

  abreDesejos(item){
    this.navCtrl.push(ListPage, {dados:item});
  }

  addDesejos(item){
    for(let game of this.desejos){
      if(game.app_name == item.app_name){
        return;
      }
    }

    this.desejos.push(item);
    this.desejosProvider.setStorage('desejos',this.desejos);
  }


  presentToastAdd(){
    let toast = this.toastCtrl.create({
      message: 'Jogo adicionado à lista de desejos !',
      duration: 2000  
    });
  toast.present();
  }

}
