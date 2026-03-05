export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { query, location } = req.query;
  const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query+' '+location)}&page=1&num_pages=2&date_posted=month`;

  const response = await fetch(url, {
    headers: {
      'x-rapidapi-host': 'jsearch.p.rapidapi.com',
      'x-rapidapi-key': 'c5be66962emsh140c730fd2e2ff6p14c6bbjsn84bd823cea08'
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
