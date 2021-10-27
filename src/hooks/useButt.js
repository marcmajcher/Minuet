import { useState } from "react";

export default function useButt() {
  const [butt, setButt] = useState('left')

  return {
    swap: () => setButt( butt === 'left' ? 'right' : 'left'),
    which: () => butt
  }
}