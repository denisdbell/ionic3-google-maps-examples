import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare const google;

@IonicPage()
@Component({
  selector: 'page-example-2',
  templateUrl: 'example-2.html',
})
export class Example_2Page {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  labels: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  labelIndex = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.startMap();
  }

  startMap() {
    let posMaceio = { lat: 18.1096, lng: -77.2975 }
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 9,
      center: posMaceio,
      mapTypeId: 'roadmap'
    });
    
    google.maps.event.addListener(this.map, 'click', (event) => {
      this.addMarker(event.latLng, this.map);
    });

  }

  addMarker(location, map) {
    let marker = new google.maps.Marker({
      position: location,
      label: this.labels[this.labelIndex++ % this.labels.length],
      map: map
    });
  }


}
