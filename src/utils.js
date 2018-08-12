import senator from './assets/img/pin_senator.png'
import federalDeputy from './assets/img/pin_federal_deputy.png'
import stateDeputy from './assets/img/pin_state_deputy.png'

export function getIcon(role) {
  const roles = {
    1: senator,
    2: federalDeputy,
    3: stateDeputy
  }

  return roles[role] || 1
}
