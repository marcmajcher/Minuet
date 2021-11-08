import { useDispatch, useSelector } from 'react-redux';
import { addColonistBiomass, decayBiomass } from '../lib/dataSlice';
import { freeze, log } from '../lib/gameSlice';

export default function useEvents() {
  const dispatch = useDispatch();
  const colonistId = useSelector((s) => s.game.colonistId);

  return (resources) => {

    // Check if colonist has destabilized and died - freeze/cleanup, and add/decay biomass
    if (resources.stability.amount <= 0) {
      dispatch(freeze());
      dispatch(log({ template: 'msg_colonist_expired', colonist: colonistId }));
      dispatch(addColonistBiomass());
      dispatch(decayBiomass());
    }
  };
}
