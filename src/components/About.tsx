import { Shield, Award, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Trusted Quality',
      description: 'Genuine products with manufacturer warranty',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Certified technicians with years of experience',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer First',
      description: 'Dedicated support for every purchase',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              About Us
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Jayasinghe Mobile Corner is your trusted destination for premium mobile technology.
              With years of experience in the industry, we specialize in bringing you the latest
              smartphones from Apple, Samsung, and Google Pixel.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our commitment goes beyond just selling phones. We provide expert repair services,
              genuine accessories, and personalized customer support to ensure you get the most
              out of your mobile experience.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-zinc-950 border border-white/10 rounded-xl hover:border-white/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
