import { Injectable } from '@angular/core';
import { MapMarker } from '../models/MapMarker';
import { MAPMARKERS } from './mock-data';


@Injectable()
export class MapMarkerService {

  constructor() { }
  
  getMapMarkers(): MapMarker[] {
    return MAPMARKERS;
  }

}