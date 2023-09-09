import express from 'express';
import moment from 'moment';
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

  const today = moment().utc();
  const currentUtcTime = today.format('YYYY-MM-DDTHH:mm:ss[Z]');

  const currentDay = moment().format('dddd');

  // JSON response construction
  const response = {
    slack_name: slackName,
    current_day: currentDay,
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
