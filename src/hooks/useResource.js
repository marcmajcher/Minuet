import { useState } from "react";

export default function useResource() {
  const [butt, setButt] = useState('left')

  return {
    swap: () => setButt( butt === 'left' ? 'right' : 'left'),
    which: () => butt
  }
}