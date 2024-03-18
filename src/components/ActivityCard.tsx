import type { IconType } from "react-icons/lib";

type ActivityCardProps = {
  Icon: IconType;
  title: string;
  description: string;
};

const ActivityCard = ({ Icon, title, description }: ActivityCardProps) => {
  return (
    <div className="flex flex-col items-center justify-start max-w-64 p-6 rounded-lg shadow-lg">
      <Icon size={64} className="text-primary pb-2" />
      <h1 className="text-primary text-2xl font-bold mb-2">{title}</h1>
      <span className="text-secondary text-sm font-normal text-center">
        {description}
      </span>
    </div>
  );
};

export default ActivityCard;
