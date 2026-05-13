import { useState } from 'react';

const GUIDES = [
  { id: 1, title: 'Watering', content: 'Most indoor plants prefer to dry out slightly between waterings. Check the top inch of soil before watering.' },
  { id: 2, title: 'Sunlight', content: 'Understand the difference between direct, bright indirect, and low light to place your plant in the optimal spot.' },
  { id: 3, title: 'Soil', content: 'Use a well-draining potting mix. Add perlite or orchid bark to improve drainage for most houseplants.' },
  { id: 4, title: 'Fertilizing', content: 'Feed your plants with a balanced liquid fertilizer diluted to half strength during the growing season (spring and summer).' },
  { id: 5, title: 'Repotting', content: 'Repot when roots are growing out of the drainage holes or the plant has stopped growing. Go up only one pot size.' },
];

export default function CareGuides() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <main className="section-container">
      <h2 className="section-title">Plant Care Guides</h2>
      <div className="cards-wrapper">
        {GUIDES.map(guide => (
          <div key={guide.id} className={`accordion-item ${activeId === guide.id ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => toggleAccordion(guide.id)}>
              <img src="/images/plant.svg" alt="Icon" className="accordion-icon" />
              <h3>{guide.title}</h3>
            </div>
            <div className="accordion-content">
              <p>{guide.content}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
