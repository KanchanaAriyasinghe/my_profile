interface Props {
  tags: string[];
  className: string;
  label?: string;
}

export function TagList({ tags, className, label = 'Technologies' }: Props) {
  return (
    <ul className={className} aria-label={label}>
      {tags.map((tag) => (
        <li key={tag}>
          <span>{tag}</span>
        </li>
      ))}
    </ul>
  );
}
