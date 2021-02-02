import api, { TEST_EMAIL } from 'api/api01.js';

export const setFavorite = async (
  parameters = {
    email: TEST_EMAIL,
    courseId: null,
  }
) => {
  try {
    const { email, courseId } = parameters;
    const response = await api.post('jsonapi/v1/favorite', {
      email,
      course_id: courseId,
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const unsetFavorite = async (
  parameters = {
    email: TEST_EMAIL,
    courseId: null,
  }
) => {
  try {
    const { email, courseId } = parameters;
    await api.delete('jsonapi/v1/favorite', {
      data: {
        email,
        course_id: courseId,
      },
    });
    return { course_id: courseId };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
