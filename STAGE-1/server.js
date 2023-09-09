import express from 'express';
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Check if slackName is missing
  if (!slackName) {
    res.status(400).json({
      error: 'Kindly include your slack_name in the request query parameter',
    });
    return; // Return early to avoid executing the rest of the code
  }

  // Current date
  const currentDate = new Date();

  const dayNameOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Getting the current day of the week
  const currentDay = dayNameOfTheWeek[currentDate.getDay()];
  const currentUtcTime = new Date().toISOString();

  // JSON response construction
  const response = {
    slack_name: slackName,
    currentDay: currentDay,
    utc_time: currentUtcTime,
    track: track,
    github_file_url: 'https://github.com/Laban254/HNGx-INTERNSHIP/tree/main/STAGE-1',
    github_repo_url: 'https://github.com/Laban254/HNGx-INTERNSHIP',
    status_code: 200,
  };

  // Send the JSON response
  res.json(response);
});

app.listen(port, () => {
  console.log(`API Server running on port ${port}`);
});
