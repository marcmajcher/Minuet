const strings = {
  btn_clear: 'Clear',
  btn_decant: 'Decant',
  btn_save: 'Save',
  msg_log_start: '[LOG] Begin Messages',
  msg_decant:
    '[SYSTEM] colonist {colonist} released from cryosleep - {stability}',
  res_stability: 'Stability',
  res_experience: 'Experience',
  res_biomass: 'Biomass',
  res_egregore: 'Egregore',
};

export function printString(key, args) {
  let string = strings[key];
  if (args) {
    for (const val in args) {
      string = string.replace(`{${val}}`, args[val]);
    }
  }
  return string;
}

export default strings;
