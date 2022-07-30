

import { useRef, useState } from 'react'

type KeyMap = { [key: string]: string };

export const useCompStates = (validStates: string[], options = { default: null}) => {
  const validStatesRef = useRef<KeyMap>(validStates.reduce(
    (acc: KeyMap, curr) => {acc[curr] = curr; return acc;}, {}
  ));
  const [currentCompState, setCurrentCompState] = useState<keyof KeyMap>(options?.default || validStates[0]);

  const setCompState = (compState: keyof KeyMap) => {
    if(!validStatesRef.current[compState]) {
      throw Error('Invalid component state ' + compState);
    }

    setCurrentCompState(compState);
  }

  console.log('useCompStates hook')

  return { validCompStates: validStatesRef.current, compState: currentCompState, setCompState};
}

export const hello = (message: string) => {
    console.log('MSG:', message);
}