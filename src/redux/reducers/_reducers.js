import { combineReducers } from 'redux';

import user from './user-reducers';
import gender from './gender-reducers';
import goal from './goal-reducers';
import activityLevel from './activity-level-reducers';
import registrationForm from './reg-form-reducers';
import dishes from './dishes-reducers';
import food from './food-reducers';

export default combineReducers({
  user,
  gender,
  goal,
  activityLevel,
  registrationForm,
  dishes,
  food
});
