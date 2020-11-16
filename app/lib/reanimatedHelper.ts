import {useRef} from 'react';
import Animated, {block} from 'react-native-reanimated';

const {
  event,
  Value,
  set,
  add,
  cond,
  not,
  neq,
  timing,
  startClock,
  stopClock,
  Clock,
} = Animated;

export type TimingConfig = Partial<Omit<Animated.TimingConfig, 'toValue'>>;

export const withTransition = (
  value: Animated.Node<number>,
  timingConfig: TimingConfig = {},
) => {
  const init = new Value(0);
  const clock = new Clock();
  const state = {
    finished: new Value(0),
    frameTime: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };
  const config = {
    toValue: new Value(0),
    duration: 150,
    easing: (v: Animated.Adaptable<number>) => add(v, 0),
    ...timingConfig,
  };
  return block([
    cond(not(init), [set(init, 1), set(state.position, value)]),
    cond(neq(config.toValue, value), [
      set(state.frameTime, 0),
      set(state.time, 0),
      set(state.finished, 0),
      set(config.toValue, value),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ]);
};

export function useConst<T>(initialValue: T | (() => T)): T {
  const ref = useRef<{value: T}>();
  if (ref.current === undefined) {
    // Box the value in an object so we can tell if it's initialized even if the initializer
    // returns/is undefined
    ref.current = {
      value:
        typeof initialValue === 'function'
          ? (initialValue as Function)()
          : initialValue,
    };
  }
  return ref.current.value;
}

type Atomic = string | number | boolean;

export const useValue = <V extends Atomic>(value: V) =>
  useConst(() => new Value(value));

export const onScrollEvent = (contentOffset: {
  x?: Animated.Node<number>;
  y?: Animated.Node<number>;
}) =>
  event([
    {
      nativeEvent: {
        contentOffset,
      },
    },
  ]);
