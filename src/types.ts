export type DroneStatus = 'ON-LINE' | 'OFF-LINE' | 'POUSANDO' | 'ALERTA';

export type SignalType = '5G' | 'Satélite' | 'Rádio';

export type AlertType = 'fire' | 'theft';

export interface Drone {
  id: string;
  bateria: number;
  status: DroneStatus;
  local: string;
  sinal: SignalType;
  coords: string;
  lat: number;
  lng: number;
  altitude?: number;
  velocidade?: number;
  tipoAlerta?: AlertType;
  temperatura?: number;
}

export interface LogEntry {
  id: string;
  hora: string;
  drone: string;
  evento: string;
  status: string;
  tipo?: 'info' | 'alert' | 'success' | 'warn';
}

export interface PlanItem {
  id: string;
  name: string;
  price: string;
  category: 'rural' | 'municipio' | 'privada';
  area: string;
  dronesCount: number;
  features: string[];
  isFeatured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  initials: string;
  bio: string;
  responsibilities: string[];
}
