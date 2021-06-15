import {useLayoutEffect, useRef, createElement, memo} from 'react'
import lagRadar from "@gaearon/lag-radar";

export default memo(function Radar(props) {
  // Tweak the defaults
  let frames = props.frames || 20;
  let size = props.size || 100;
  let options = Object.assign({}, props, {
    frames,
    size,
  });
  let ref = useRef();
  useLayoutEffect(() => {
    let destroy = lagRadar(Object.assign({}, options, {
      parent: ref.current,      
    }));
    return destroy;
  }, [options, ref]);
  return createElement('div', {ref});
});