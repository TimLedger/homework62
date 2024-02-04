import React, { useState } from 'react';
import CountryList from './CountryList';
import CountryInfo from './CountryInfo';
import './Project3.css';

interface Country {
  alpha3Code: string;
  name: string;
}

const Global: React.FC = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountryCode(country.alpha3Code);
  };

  return (
    <div className="global-container">
      <div className="sidebar">
        <div className="sidebar-content">
          <CountryList onSelectCountry={handleCountrySelect} />
        </div>
      </div>
      <div className="country-info">
        <div className="country-info-card">
          <CountryInfo countryCode={selectedCountryCode} />
        </div>
      </div>
    </div>
  );
};

export default Global;