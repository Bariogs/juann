import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProfileCard = () => {
  // State to handle the profile image preview
  const [profileImg, setProfileImg] = useState("https://via.placeholder.com/100");
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className="py-10">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          {/* Tailwind used for card styling and spacing */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
            
            <header className="text-center">
              <div 
                className="relative inline-block cursor-pointer group"
                onClick={() => fileInputRef.current.click()}
              >
                <img 
                  src={profileImg} 
                  alt="John Mark Barioga" 
                  className="rounded-full w-28 h-28 border-4 border-blue-500 object-cover mx-auto"
                />
                <div className="absolute inset-0 bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full text-xs font-semibold">
                  Upload Photo
                </div>
              </div>
              <input 
                type="file" 
                ref={fileInputRef}
                className="hidden" 
                accept="image/*" 
                onChange={handleImageChange}
              />
              
              <h1 className="text-2xl font-bold mt-4 text-gray-800">John Mark Agias Barioga</h1>
              <p className="text-blue-600 font-medium italic">Certified Technical Specialist</p>
            </header>

            {/* Contact & Personal Info Section */}
            <section className="mt-8">
              <h3 className="text-lg font-bold text-gray-700 border-b-2 border-blue-100 pb-1 mb-4">
                Contact & Personal Info
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Phone:</strong> 09561569284</p>
                <p><strong>Age:</strong> 24 | <strong>Status:</strong> Single</p>
                <p><strong>Born:</strong> October 19, 2001</p>
              </div>
              
              <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs space-y-1">
                <p><strong>Current:</strong> West Poblacion, Rizal, ZDN</p>
                <p><strong>Hometown:</strong> Guisokan, Katipunan, ZDN</p>
              </div>
            </section>

            {/* Certifications Section */}
            <section className="mt-8">
              <h3 className="text-lg font-bold text-gray-700 border-b-2 border-blue-100 pb-1 mb-4">
                Certifications
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border border-gray-100 rounded-lg bg-white hover:shadow-sm transition-shadow">
                  <strong className="text-sm text-gray-800">Electrical Installation & Maintenance</strong>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-[10px] font-bold">TESDA NC II</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-gray-100 rounded-lg bg-white hover:shadow-sm transition-shadow">
                  <strong className="text-sm text-gray-800">Computer System Servicing (CSS)</strong>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-[10px] font-bold">TESDA NC II</span>
                </div>
              </div>
            </section>

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileCard;