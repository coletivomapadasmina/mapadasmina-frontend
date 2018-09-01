const pinBaseUrl = 'https://www.google.com/maps/vt/icon/name=assets/icons/spotlight/spotlight_pin_v2_shadow-1-small.png,assets/icons/spotlight/spotlight_pin_v2-1-small.png,assets/icons/spotlight/spotlight_pin_v2_dot-1-small.png,assets/icons/spotlight/spotlight_pin_v2_accent-1-small.png'

export const roles = {
  1: { name: 'Vereadora', primaryColor: '345995', secondaryColor: '1a2c4a' },
  2: { name: 'Senadora', primaryColor: 'EAC435', secondaryColor: '8c751f' },
  3: { name: 'Governadora', primaryColor: '4F345A', secondaryColor: '271a2d' },
  4: { name: 'Deputada Federal', primaryColor: '36C9C6', secondaryColor: '1b6463' },
  5: { name: 'Deputada Estadual', primaryColor: 'DF367C', secondaryColor: '6f1b3e' },
  6: { name: 'Presidenta', primaryColor: 'ea4335', secondaryColor: '960a0a' },
  // 7: { name: 'Nunca se candidatou', primaryColor: '6610F2', secondaryColor: '330879' }
}

export function getIcon(role) {
  const currentRole = roles[role]
  return `${pinBaseUrl}&highlight=ff000000,${currentRole.primaryColor},${currentRole.secondaryColor},ff000000&color=ff000000?scale=1`
}
