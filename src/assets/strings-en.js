const strings = {
  btn_clear: 'Clear',
  btn_decant: 'Decant',
  btn_save: 'Save',
  msg_log_start: '[LOG] Begin Messages',
  msg_decant:
    '[SYSTEM] colonist {colonist} released from cryosleep :: {stability}',
  res_stability: 'Stability',
  res_experience: 'Experience',
  res_biomass: 'Biomass',
  res_egregore: 'Egregore',
};

export function printString(options) {
  let string = strings[options.template];
  for (const key in options) {
    string = string.replace(`{${key}}`, options[key]);
  }
  return string;
}

export default strings;
