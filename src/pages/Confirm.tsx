import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Confirm = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      return;
    }
    fetch('/.netlify/functions/confirm-subscriber', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json().then((data) => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        if (ok && data.success) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  }, [token]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-8 text-center space-y-4">
              {status === 'loading' && <p>Confirming subscription...</p>}
              {status === 'success' && (
                <>
                  <CheckCircle className="w-10 h-10 text-green-600 mx-auto" />
                  <p className="text-lg font-semibold">Subscription confirmed!</p>
                </>
              )}
              {status === 'error' && (
                <>
                  <XCircle className="w-10 h-10 text-red-600 mx-auto" />
                  <p className="text-lg font-semibold">Invalid or expired token.</p>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Confirm;
