interface Props {
  tags: string[];
  label?: string;
  className?: string;
}

export function TagList({ tags, label = 'Technologies', className }: Props) {
  return (
    <ul className={`chip-list${className ? ` ${className}` : ''}`} aria-label={label}>
      {tags.map((tag) => (
        <li key={tag} className="chip">
          {tag}
        </li>
      ))}
    </ul>
  );
}
