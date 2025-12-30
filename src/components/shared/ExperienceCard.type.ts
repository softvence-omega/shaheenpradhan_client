import { IReviewCard } from "./ReviewCard.type";

export interface IExperienceCard extends IReviewCard {
  designation: string;
  group: string;
  country: string;
  date: string;
  task: [];
}
