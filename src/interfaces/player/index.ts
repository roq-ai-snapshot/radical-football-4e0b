import { NoteInterface } from 'interfaces/note';
import { ParentRequestInterface } from 'interfaces/parent-request';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  coach_id: string;
  academy_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  note?: NoteInterface[];
  parent_request?: ParentRequestInterface[];
  user_player_user_idTouser?: UserInterface;
  user_player_coach_idTouser?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    note?: number;
    parent_request?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  coach_id?: string;
  academy_id?: string;
}
