
export interface TimeSlot {
  id: string;
  time: string;
  isAvailable: boolean;
  price: number;
}

export interface SportType {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
