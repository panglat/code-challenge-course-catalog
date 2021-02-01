import api from 'api/api01.js';
import qs from 'qs';

// eslint-disable-next-line import/prefer-default-export
export const getCourses = async (
  parameters = {
    email: 'email@example.com',
    limit: 10,
    offset: 0,
  }
) => {
  try {
    const { email, limit, offset } = parameters;
    const params = {
      email,
      page: {
        limit,
        offset,
      },
    };
    const response = await api.get('jsonapi/v1/courses', {
      params,
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
