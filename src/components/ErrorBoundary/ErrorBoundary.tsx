interface ErrorBoundaryProps { message: string }
export const ErrorBoundary = ({ message }: ErrorBoundaryProps) => <h3>{message}</h3>;