type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white px-3 py-1 text-sm text-muted">
      {children}
    </span>
  );
}
