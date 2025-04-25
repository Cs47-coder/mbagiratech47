import { MapPin, Navigation, Mail } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

const mbeyaPosition: LatLngExpression = [-8.9, 33.45]; // Mbeya, Tanzania

const Location = () => {
  return (
    <section id="location" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Find Us</h2>
          <p className="text-lg text-slate-600">
            Based in Mbeya Tanzania, East Africa, but providing services globally
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Our Location</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-slate-600">
                  While we are based in Mbeya- Tanzania, East Africa, we work with clients from all around the world. Our services have been delivered remotely, allowing for seamless collaboration regardless of geographical boundaries.
                </p>
                <p className="text-slate-600">
                  Whether you're a local business in Tanzania or an international company, We can provide the technical expertise you need for your development and data analysis projects.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3 mt-1 flex-shrink-0">
                    <Navigation size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 mb-1">Global Reach</h4>
                    <p className="text-blue-700 text-sm">
                      While physically located in Mbeya- Tanzania, We work with clients globally through digital collaboration tools, maintaining clear communication and excellent service regardless of time zones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actual Map */}
            <div className="h-96 lg:h-auto">
              <MapContainer
                center={mbeyaPosition}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={mbeyaPosition}>
                  <Popup>
                    Mbeya, Tanzania — Our location
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Prefer to meet virtually? Schedule a video call at your convenience.
          </p>
          <a 
            href="mailto:castormbagira9@gmail.com?subject=Meeting%20Request"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Mail size={18} className="mr-2" />
            Schedule a Meeting
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
