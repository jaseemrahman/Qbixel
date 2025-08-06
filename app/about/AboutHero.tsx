
'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative min-h-screen bg-black flex items-center justify-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20tech%20office%20environment%20with%20professional%20team%20collaboration%2C%20innovative%20workspace%20with%20computers%20and%20digital%20displays%2C%20contemporary%20business%20setting%20with%20clean%20architecture%2C%20black%20and%20white%20corporate%20atmosphere%2C%20high-tech%20professional%20environment&width=1920&height=1080&seq=about-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
          Empowering Innovation<br />
          Through Technology
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          We are Qbixel - a team of passionate technologists dedicated to transforming businesses with cutting-edge digital solutions.
        </p>
      </div>
    </section>
  );
}
