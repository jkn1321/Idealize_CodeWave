import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, Users, Sparkles } from 'lucide-react';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of donors who have already helped save lives through
            trusted medical donations. Your contribution can change someone's
            life today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => navigate('/role-selection')}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:bg-gray-50 focus:ring-4 focus:ring-white/25 transition-all duration-200 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center text-white/80">
              <Users className="h-5 w-5 mr-2" />
              <span>Join 10,000+ active users</span>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Instant Impact
              </h3>
              <p className="text-white/80">
                Your donations reach patients within 24 hours
              </p>
            </div>
            <div className="group">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                100% Transparency
              </h3>
              <p className="text-white/80">
                Track every donation from start to finish
              </p>
            </div>
            <div className="group">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Trusted Network
              </h3>
              <p className="text-white/80">
                Verified doctors and patients only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
