import { Listadesejos } from './../listadesejos/listadesejos';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {

  HomePage = HomePage;
  Listadesejos = Listadesejos;
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }

}
