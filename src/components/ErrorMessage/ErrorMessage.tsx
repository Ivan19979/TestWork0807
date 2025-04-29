import Link from 'next/link';
import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  message: string;
  showHomeLink?: boolean;
}

export const ErrorMessage = ({ 
  message, 
  showHomeLink = true 
}: ErrorMessageProps) => {
  return (
    <div className={`alert alert-danger ${styles.errorMessage}`}>
      <div className="d-flex align-items-center">
        <i className="bi bi-exclamation-triangle-fill me-2"></i>
        <span>{message}</span>
      </div>
      
      {showHomeLink && (
        <div className="mt-2">
          <Link href="/" className="btn btn-sm btn-outline-danger">
            Вернуться на главную
          </Link>
        </div>
      )}
    </div>
  );
};