export default function WeatherCard({ weather }) {
  const getWeatherIcon = (condition) => {
    const icons = {
      'CERAH': '../../icons/Group25.png',
      'BERAWAN': '../../icons/Group8.png',
      'HUJAN': '../../icons/Group17.png',
      'GERIMIS': '../../icons/Group18.png',
      'BADAI': '../../icons/Group12.png',
      'BERSALJU': '../../icons/Group14.png',
      'BERKABUT': '../../icons/Group31.png'
    };
    return icons[condition] || '/icons/Group 8.png';
  };

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 text-white">
      <div className="text-center">
        <h2 className="text-2xl mb-2 font-pulang">{weather.cityName}</h2>
        <p className="text-sm font-cornercafe">{weather.date}</p>
        
        <div className="my-6">
          <img 
            src={getWeatherIcon(weather.condition)}
            alt="Kondisi Cuaca" 
            className="w-24 h-24 mx-auto"
          />
          <p className="text-xl mt-2">{weather.condition}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div>
            <img src="/icons/Temperature.png" alt="Suhu" className="w-8 h-8 mx-auto" />
            <p>{weather.temperature}°</p>
          </div>
          <div>
            <img src="/icons/Kelembapan.png" alt="Kelembapan" className="w-8 h-8 mx-auto" />
            <p>{weather.humidity}%</p>
          </div>
          <div>
            <img src="/icons/kecepatan_angin.png" alt="Kecepatan Angin" className="w-8 h-19 mx-auto" />
            <p>{weather.windSpeed} KM/JAM</p>
          </div>
        </div>
      </div>
    </div>
  );
}