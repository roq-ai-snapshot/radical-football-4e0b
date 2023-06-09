import * as yup from 'yup';
import { parentRequestValidationSchema } from 'validationSchema/parent-requests';
import { playerValidationSchema } from 'validationSchema/players';

export const academyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  user_id: yup.string().nullable().required(),
  parent_request: yup.array().of(parentRequestValidationSchema),
  player: yup.array().of(playerValidationSchema),
});
