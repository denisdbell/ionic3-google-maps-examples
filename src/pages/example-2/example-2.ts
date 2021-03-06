import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapMarker } from '../../app/models/MapMarker';
import { MapMarkerService } from '../../app/services/map_marker_service';
import * as _ from 'underscore';

declare const google;

@IonicPage()
@Component({
  selector: 'page-example-2',
  templateUrl: 'example-2.html',
  providers: [ MapMarkerService ]
})
export class Example_2Page {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  labels: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  eventType: string [] = [];

  markers: any = [];
  
  contentString: string = '<div id="content">'+
                          '<div id="siteNotice">'+
                          '</div>'+
                          '<h1 id="firstHeading" class="firstHeading">Sound Love VS Love Sound Disco</h1>'+
                          '<div id="bodyContent">'+
                          '<p>' +
                          '<img width="100px" height="100px" style="-webkit-user-select: none;background-position: 0px 0px, 10px 10px;background-size:' +
                          '20px 20px;background-image:linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);" src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/8/f/6790-4721-477c-b467-973790ca3423.jpg">' +
                          '<p>'+
                          '</div>'+
                          '</div>';

  labelIndex = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,private mapMarkerService: MapMarkerService) {
  }

  ionViewDidLoad() {
    this.startMap();
    //this.populateMarkers();
  }

  startMap() {
    let posMaceio = { lat: 18.1096, lng: -77.2975 }
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 9,
      center: posMaceio,
      mapTypeId: 'roadmap',
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#FFFFFF"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ]
    });
    
    google.maps.event.addListener(this.map, 'click', (event) => {
      console.log("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng()) ;
      //this.addMarker(event.latLng, this.map);
    });
  }

  infowindow = new google.maps.InfoWindow({

  });

  addMarker( mapMarker: MapMarker ,map) {
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(mapMarker.latitude,mapMarker.longitude),
      label: this.labels[mapMarker.label],
      map: map,
      icon: '../assets/icon/' + mapMarker.icon
    });

    google.maps.event.addListener(marker, 'click', (event) => {
      this.infowindow = new google.maps.InfoWindow({
        content: mapMarker.description
      });
      this.infowindow.open(this.map, marker);
    });

    this.markers.push(marker);
  }

  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  clearMarkers() {
    this.setMapOnAll(null);
  }

  populateMarkers(event){
    
    let mapMarkers: MapMarker[]  = this.mapMarkerService.getMapMarkers();
    let mapMarkers2: MapMarker[];
    
    if(this.eventType != undefined && this.eventType.length != 0){
      let events = event;
      mapMarkers2 = [];
      this.clearMarkers();

      for (let index in mapMarkers) {
        let newMapMarker: MapMarker = mapMarkers[index];

        console.log("events " + events + " newMapMarker.category " + newMapMarker.category + " " + _.contains(events,newMapMarker.category) );
        if( _.contains(events,newMapMarker.category) ){
          mapMarkers2.push(newMapMarker)
        }
      }
    }

    for (let index in mapMarkers2) {
      console.log("Being Added " + mapMarkers);
      let newMapMarker: MapMarker = mapMarkers2[index];
      this.addMarker(newMapMarker,this.map);
    }
  }
}
