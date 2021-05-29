import React from "react";
import "../styles/Activities.css";
import svg1 from "../assets/images/empowerment.jpg";
import svg2 from "../assets/images/education.jpg";
import svg3 from "../assets/images/training.jpg";
import svg4 from "../assets/images/return-to-school.jpg";
import svg5 from "../assets/images/opportunities.jpg";
import ActivityCard from "../components/ActivityCard";

const Activities = () => {
  return (
    <div>
      <h3>
        <ul className="list">
          <ActivityCard
            src={svg1}
            title="Empowerment"
            detailText="Empower young women on sexual reproductive health, leadership,
                vocational skills and other important areas needed for their
                overall wellbeing. The aim is that in the end they would be able
                to make informed decisions about their lives"
          />
          <ActivityCard
            src={svg2}
            title="Education on reproductive health"
            detailText="The education on repropuctive health ranges from contraceptives,
                sexually transmitted diseases to overall guidance on the need to
                make informed decisions about sexaul activities."
          />

          <ActivityCard
            src={svg3}
    
            title="Training sessions"
            detailText=" We provide training on Information Communication Technology,
                beadmaking, weaving, dressmaking, hairdressing and very
                important skills beneficial for job acquisition and income.
                generation"
          />
          <ActivityCard
            src={svg4}

            title="Return to school for dropped-out girls"
            detailText="Girls and young women stop school due challenges, notable among
                them is financial. We try to meet the needs of selected girls by
                providing food, sanitary pads, uniforms, stationery ect.. and
                pay their fees to enable them successfully graduate school."
          />

          <ActivityCard
            src={svg5}
    
            title="Creating markets and Opportunities"
            detailText=" women are trying hard to make ends meet by producing products
                like sheabutter, locally woven straw-bags and fugu but are
                having challenges selling them. We advertise products online to
                create markets for them."
          />
        </ul>
      </h3>
    </div>
  );
};

export default Activities;
