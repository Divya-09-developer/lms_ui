import React from "react";
import {
  featureOne,
  featureTwo,
  featureSix,
  teachingFeatures,
  statictis,
  featuresEight,
  statictisEight,
} from "./data1"; // Import your data file

export const FeaturesPage = () => {
  return (
    <div>
      {/* Feature One Section */}
      <section>
        <h2>Feature One</h2>
        <ul>
          {featureOne.map((feature) => (
            <li key={feature.id}>{feature.title}</li>
          ))}
        </ul>
      </section>

      {/* Feature Two Section */}
      <section>
        <h2>Feature Two</h2>
        <div>
          {featureTwo.map((feature) => (
            <div key={feature.id} className="feature-card">
              <img src={feature.imgSrc} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Six Section */}
      <section>
        <h2>Feature Six</h2>
        <div>
          {featureSix.map((feature) => (
            <div key={feature.id} className="feature-item">
              <img src={feature.imageSrc} alt={feature.text} />
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Features Section */}
      <section>
        <h2>Teaching Features</h2>
        <ul>
          {teachingFeatures.map((feature) => (
            <li key={feature.id}>{feature.title}</li>
          ))}
        </ul>
      </section>

      {/* Statistics Section */}
      <section>
        <h2>Statistics</h2>
        <ul>
          {statictis.map((stat) => (
            <li key={stat.id}>
              <strong>{stat.rating}</strong> - {stat.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Features Eight Section */}
      <section>
        <h2>Features Eight</h2>
        <div>
          {featuresEight.map((feature) => (
            <div key={feature.id} className="features-eight-card">
              <img src={feature.icon} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Eight Section */}
      <section>
        <h2>Statistics Eight</h2>
        <ul>
          {statictisEight.map((stat) => (
            <li key={stat.id} className={stat.className}>
              <strong>{stat.score}</strong> - {stat.text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};


