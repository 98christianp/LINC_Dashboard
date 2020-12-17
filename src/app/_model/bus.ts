import {GeoJSONSource} from 'mapbox-gl';

export class Bus {
  public GEOJSON: { coordinates: number[]; type: string };
  constructor(
    public name: string,
    public lat: number,
    public long: number
  ) {
    this.GEOJSON = {
      type: 'Point',
      coordinates: [this.long, this.lat]
    };
  };
}
