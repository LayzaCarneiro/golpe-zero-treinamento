interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="mb-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionTitle;
