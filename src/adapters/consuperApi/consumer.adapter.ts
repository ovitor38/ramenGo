import axios from 'axios'

export async function fetchApiData(apiKey: string): Promise<string> {
  try {
    console.log(apiKey)
    const { data } = await axios.post(
      'https://api.tech.redventures.com.br/orders/generate-id',
      {},
      {
        headers: {
          'x-api-key': apiKey
        }
      }
    )

    return data.orderId
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Axios error details:',
        error.response?.status,
        error.response?.headers
      )
    } else {
      console.error('Failed to fetch data:', error)
    }
    throw error
  }
}
