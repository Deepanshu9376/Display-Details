import React, { useState } from 'react';

const Add = () => {

  const [showParagraph, setShowParagraph] = useState(false);
  const [displayDetailsClicks, setDisplayDetailsClicks] = useState(0);

  const handleDisplayDetails = () => {
    console.log(`You clicked ${displayDetailsClicks} times`)
    setShowParagraph(!showParagraph);
    setDisplayDetailsClicks(displayDetailsClicks + 1);
  };

  return (
    <div >
      <button className='btn btn-primary my-4 p-2' type='button' onClick={handleDisplayDetails}>Display Details</button>
      {showParagraph && (
        <div className='mx-2'>
          <p>Every day brings a new opportunity to make the most of our time. Having a daily routine is a well-structured plan that helps us stay organized, productive, and balanced. It ensures that we can juggle our responsibilities efficiently while finding moments of relaxation and self-care. A daily routine of a student revolves around various activities. Mornings kick off with an early rise, followed by preparing for school and having breakfast. Once at school, they engage in lessons across diverse subjects like math, science, and history. Post-school hours are filled with a mix of homework, participation in extracurriculars such as sports or clubs, and essential breaks for meals and relaxation. Evenings are dedicated to study sessions, completing any pending assignments, and winding down before bedtime. This routine forms the backbone of a student’s everyday life, balancing learning, activities, and moments of rest. In this blog, we will walk you through “my daily routine”, which spans from early morning rituals to bedtime habits, highlighting the key activities that keep us on track and help us achieve my goals</p>
        </div>
      )}
       <p>Number of 'Display details' button clicked: {displayDetailsClicks}</p>
    </div>
  );
};

export default Add;
