type BlogCardProps = {
    title: string;
    description: string;
  };
  
  export default function BlogCard({ title, description }: BlogCardProps) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  