import { Button } from "@/components/ui/button";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex justify-center">
      <Button
        variant="outline"
        className="mb-6 rounded-full bg-blue-50 text-primary hover:bg-blue-100 border-none px-6"
      >
        {title}
      </Button>
    </div>
  );
};