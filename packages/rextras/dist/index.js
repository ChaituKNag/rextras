"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = exports.useCompStates = void 0;
const react_1 = require("react");
const useCompStates = (validStates, options = { default: null }) => {
    const validStatesRef = (0, react_1.useRef)(validStates.reduce((acc, curr) => { acc[curr] = curr; return acc; }, {}));
    const [currentCompState, setCurrentCompState] = (0, react_1.useState)((options === null || options === void 0 ? void 0 : options.default) || validStates[0]);
    const setCompState = (compState) => {
        if (!validStatesRef.current[compState]) {
            throw Error('Invalid component state ' + compState);
        }
        setCurrentCompState(compState);
    };
    console.log('useCompStates hook');
    return { validCompStates: validStatesRef.current, compState: currentCompState, setCompState };
};
exports.useCompStates = useCompStates;
const hello = (message) => {
    console.log('MSG:', message);
};
exports.hello = hello;
