export interface IProfile {
  image: string;
  rating: number;
  totalRating: number;
  name: string;
  designation: string;
  location: string;
  itsWorkingTime: boolean | string;
  gender: string;
  Availability: boolean;
  Experience: string;
  language: string[];
  hourlyPay: string | number;
}
