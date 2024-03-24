export const StrongText: React.FC<{ value: string; type: string }> = ({ value, type }) => {
  return <span className={`strong`}>{value}</span>;
}
