// Implement Redux store module for course management
const initialState = {
    courses: []
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_COURSE':
        return { ...state, courses: [...state.courses, action.payload] };
      default:
        return state;
    }
  };
  
  export const addCourse = (courseData) => {
    // Implement add course action (e.g., make API call, dispatch 'ADD_COURSE' action)
    return { type: 'ADD_COURSE', payload: courseData };
  };
  
  export default courseReducer;
  