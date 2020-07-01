export const reducerEval = (e, props) => {
  switch (props.reducer) {
    case 'card':
      props.updateCardField(e);
      break;
    case 'user':
      props.updateUserField(e);
      break;
    default:
      console.log('wrong reducer...');
  }
};

export const reducerValue = (props) => {
  switch (props.reducer) {
    case 'card':
      return props.cardReducer[props.field];
    case 'user':
      return props.userReducer[props.field];
    default:
      console.log('wrong reducer...');
  }
};
