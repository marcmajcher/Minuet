const strings = {
  btn_clear: 'Clear',
  btn_decant: 'Decant',
  btn_explore: 'Explore',
  btn_save: 'Save',

  msg_no_resources: '[RESOURCES UNAVAILABLE]',
  msg_log_start: '[LOG] Begin Messages',

  msg_decant:
    '[SYS] colonist {colonist} released from cryosleep :: instability {stability}',
  msg_colonist_expired: '[SYS] colonist {colonist} expired :: unviable',

  msg_biomass_discover:
    'You come across a pile of unrecognizable biological goo. Gross, but possibly useful.',
  msg_wire_discover:
    'You find an open panel, rip out the wiring, and stow it away someplace safe.',
  msg_scrap_discover:
    'You stumble upon some scrap metal. This junk may come in handy later.',

  msg_explore_1:
    'You are surrounded by endless hallways and catwalks around a vast chamber filled with frosted glass capsules.',
  msg_explore_2:
    'You become weaker and weaker as you feel your body collapsing in on itself.',
  msg_explore_3:
    "Something tickles at the back of your mind, as if you've been here before...",
  msg_explore_4:
    "You discover a disused storage closet. Maybe you can stash a few things there, in case you don't make it...",

  res_stability: 'Stability',
  res_experience: 'Experience',
  res_biomass: 'Biomass',
  res_wire: 'Wire',
  res_scrap: 'Scrap',
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
