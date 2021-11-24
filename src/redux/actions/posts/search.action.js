import * as type from '../../constants';

export const searchLoading = (params) => {
  return {
    type: type.LOAD_POST,
    params
  }
}

export function searchSuccess(data) {
  return {
    type: type.LOADED_POST,
    data
  }
}