/**
 * Created by RK on 2016/8/16.
 */
export const incrementCounter = function ({ dispatch}) {
  dispatch('INCREMENT', 1)
};

export const fetchname = function ({ dispatch}) {
  dispatch('FETCH_NAME', 1)
};
