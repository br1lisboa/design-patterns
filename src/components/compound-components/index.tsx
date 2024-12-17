function Title({ title = "" }) {
  return <h1 className="text-3xl">{title}</h1>;
}

function Paragraph({ paragraph = "" }) {
  return <p>{paragraph}</p>;
}

function CompoundCard({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="p-2 border border-white rounded-md max-w-[300px]">
      {children}
    </div>
  );
}

export default CompoundCard;
CompoundCard.Title = Title;
CompoundCard.Paragraph = Paragraph;
