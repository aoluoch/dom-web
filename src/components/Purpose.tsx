
import { Play, Heart, Church, Users } from 'lucide-react';

const Purpose = () => {
  const cards = [
    {
      id: 1,
      title: 'DOM FUTURE GEN',
      description: 'Helping all rounded future leaders know themselves and God.',
      icon: <Play className="w-6 h-6" />,
      bgImage: 'https://live.staticflickr.com/65535/54759682583_08982a927f_n.jpg',
    },
    {
      id: 2,
      title: 'DOM CARE',
      description: 'Offers help to communities in every way possible.',
      icon: <Heart className="w-6 h-6" />,
      bgImage: 'https://live.staticflickr.com/65535/54759685284_67fcf44d4d_n.jpg',
    },
    {
      id: 3,
      title: 'DOM MISSIONS',
      description: 'Preaching & teaching of the word of God.',
      icon: <Church className="w-6 h-6" />,
      bgImage: 'https://live.staticflickr.com/65535/54758600297_6a92f0b97f_n.jpg',
    },
    {
      id: 4,
      title: 'LEADERSHIP & TRAINING',
      description: 'Global leadership summits and trainings.',
      icon: <Users className="w-6 h-6" />,
      bgImage: 'https://live.staticflickr.com/65535/54759453736_9124160a80_z.jpg',
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Discover friends, family and purpose
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a look at the different ways you could get involved in DOM
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 opacity-5 group-hover:bg-opacity-50 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                {/* Icon */}
                <div className="flex justify-start">
                  <div className="p-2 rounded-full backdrop-blur-sm">
                    {card.icon}
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold uppercase tracking-wide leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;