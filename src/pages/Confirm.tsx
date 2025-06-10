import { useEffect, useState } from 'react'

const Confirm = () => {
  const [status, setStatus] = useState<'loading'|'success'|'error'>('loading')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    if (!token) {
      setStatus('error')
      return
    }
    fetch('/.netlify/functions/confirm-subscriber', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      {status === 'loading' && <p>Confirming...</p>}
      {status === 'success' && <p>Thank you for confirming!</p>}
      {status === 'error' && <p>Invalid link.</p>}
    </div>
  )
}

export default Confirm
