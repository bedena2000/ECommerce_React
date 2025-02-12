interface CategoryTitleProps {
  title: string;
}

export default function CategoryTitle({ title }: CategoryTitleProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-5 bg-[#DB4444] h-10"></div>
      <p className="text-[#DB4444] text-xs font-semibold">{title}</p>
    </div>
  );
}
