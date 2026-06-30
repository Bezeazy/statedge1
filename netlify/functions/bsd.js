exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
      body: '',
    };
  }

  const { path: subpath, ...queryParams } = event.queryStringParameters || {};
  const apiPath = subpath || 'predictions';
  const qs = new URLSearchParams(queryParams).toString();
  const url = `https://sports.bzzoiro.com/api/v2/${apiPath}/${qs ? '?' + qs : ''}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Token ${process.env.BSD_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return {
      statusCode: response.status,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
