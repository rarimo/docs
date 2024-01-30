export async function subscribeToNewsletter(email: string) {
  const res = await fetch('https://proxy.landing.rarimo.com/v1/subscriptions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })

  if (res.status === 400) {
    throw new Error('Already subscribed')
  }

  if (!res.ok) {
    const { detail } = await res.json()
    throw new Error(detail)
  }
}
