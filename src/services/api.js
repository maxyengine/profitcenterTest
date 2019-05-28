import { serverUrl } from '../config'

export const calculateStat = async (min, max, count) => {

  const response = await fetch(serverUrl, {
    method: 'POST',
    body: JSON.stringify({min, max, count})
  })

  return await response.json()
}
