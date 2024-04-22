import { useState } from "react";
import Formula from "../../../components/Formula";
import NumericField from "../../../components/NumericField";

const fieldDescriptions = {
  bikerSpeed: { description: "Speed of Biker or Pedestrian", placeholderText: "Enter Pedestrian or Biker Speed (mph)" },
  speed: { description: "Speed of vehicle", placeholderText: "Enter vehicle speed (mph)" },
};

function ProjectionEfficiencyPage() {
  const [efficiency, setEfficiency] = useState(null);
  const [fields, setFields] = useState({
    bikerSpeed: null,
    speed: null,
  });

  const calculateEfficiency = () => {
    if (fields.bikerSpeed === null || fields.speed === null) {
      alert("Please fill out all fields.");
    } else {
      const eff = fields.bikerSpeed / fields.speed;
      setEfficiency(eff);
    }
  };

  return (
    <div className={"container mb-5 center"}>
      <Formula
        formulaName={"Pedestrian or Bicycle Projection Efficiency"}
        numericFields={Object.keys(fieldDescriptions).map((fieldName) => (
          <NumericField
            key={fieldName}
            description={fieldDescriptions[fieldName].description}
            onChange={(newValue) => setFields({ ...fields, [fieldName]: newValue })}
            placeholderText={fieldDescriptions[fieldName].placeholderText}
          />
        ))}
        onCalculate={calculateEfficiency}
      />
      {efficiency !== null && <p>Calculated efficiency: {efficiency}</p>}
    </div>
  );
}

export default ProjectionEfficiencyPage;
