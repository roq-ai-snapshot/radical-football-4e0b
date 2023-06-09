import * as yup from 'yup';
import { noteValidationSchema } from 'validationSchema/notes';
import { parentRequestValidationSchema } from 'validationSchema/parent-requests';

export const playerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  note: yup.array().of(noteValidationSchema),
  parent_request: yup.array().of(parentRequestValidationSchema),
});
