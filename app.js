// Sample data for recommended workouts
const recommendedWorkouts = [
    { name: 'Strength Training', description: 'Build muscle and increase strength.' },
    { name: 'Cardio Workout', description: 'Improve cardiovascular health and burn calories.' },
    { name: 'Yoga Routine', description: 'Increase flexibility and promote relaxation.' }
  ];
  
  // Display recommended workouts on the home page
  const recommendedWorkoutsList = document.getElementById('recommended-workouts');
  recommendedWorkouts.forEach(workout => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${workout.name}:</strong> ${workout.description}`;
    recommendedWorkoutsList.appendChild(listItem);
  });
  