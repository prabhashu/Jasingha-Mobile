import { Monitor, Battery, RefreshCw } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Screen Replacement',
    description: 'Professional screen repair and replacement for all major brands. High-quality parts with warranty coverage.',
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'Battery Fix',
    description: 'Quick battery replacement to restore your device performance. Genuine batteries for optimal longevity.',
    icon: <Battery className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'Software Update',
    description: 'Complete software optimization, updates, and troubleshooting. Get your device running like new.',
    icon: <RefreshCw className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Expert Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional repair and maintenance services by certified technicians
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-black border border-white/10 rounded-xl p-8 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-300">
                <div className="text-white">{service.icon}</div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-6 text-white font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
