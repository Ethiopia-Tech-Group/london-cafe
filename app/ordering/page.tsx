// OrderingPage.tsx (server component)
import { Suspense } from 'react';
import ClientOrdering from './ClientOrdering';

export default function OrderingPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
    </Suspense>
  );
}
