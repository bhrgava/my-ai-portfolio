export enum HotspotMode {
  NORMAL = 'NORMAL',
  HOTSPOT = 'HOTSPOT'
}

export enum ViewMode {
  BLACKBOX = 'BLACKBOX',
  INTERNAL = 'INTERNAL'
}

export interface DataPoint {
  time: string;
  latency: number;
  ops: number;
}
