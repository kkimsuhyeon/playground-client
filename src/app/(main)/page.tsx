import styles from './index.module.css';

import { cn } from '@/util/cn';

export default function Home() {
  return (
    <div className={cn('p-12', styles.test123)}>
      123<div>234</div>
    </div>
  );
}
