import { Participant } from "./Participant";

export interface ScheduledEvent {
  description: string;
  participants: Participant[];
}
