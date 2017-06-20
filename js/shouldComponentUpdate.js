import { is } from 'immutable';

export default function isNeededChange(nextProps, nextState, self) {
  const thisProps = self.props || {},
        thisState = self.state || {};
        nextProps = nextProps ? nextProps : {},
        nextState = nextState ? nextState : {};

  if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
      Object.keys(thisState).length !== Object.keys(nextState).length) {
    return true;
  }

  for (const key in nextProps) {
    if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
      return true;
    }
  }

  for (const key in nextState) {
    if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
      return true;
    }
  }
  return false;
}
