import Link from 'next/link';
import styles from './index.module.css';

interface LargeButtonProps {
    label: string;
    className?: string;
    href: string;
}

const LargeButton: React.FC<LargeButtonProps> = ({label, href, className}) => {
    return <Link href={href} className={`${styles.largeButton} ${className}`}>{label}</Link>;
}

export default LargeButton;