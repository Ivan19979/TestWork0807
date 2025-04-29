import styles from './LoadingSpinner.module.scss';

interface LoadingSpinnerProps {
  small?: boolean;
}

export const LoadingSpinner = ({ small = false }: LoadingSpinnerProps) => {
  return (
    <div className={`${styles.spinnerContainer} ${small ? styles.small : ''}`}>
      <div className={styles.spinner}></div>
      <div>Loading...</div>
    </div>
  );
};