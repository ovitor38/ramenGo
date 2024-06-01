import axios from 'axios'

export async function fetchApiData(
  apiKey: string
): Promise<string> {
  try {
    const { data } = await axios.post("https://api.tech.redventures.com.br/orders/generate-id", {
      headers: {
        'x-api-key': apiKey
      }
    })

    return data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw error
  }
}
