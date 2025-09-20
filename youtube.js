const YouTube = require('youtube-sr').default;

async function searchYouTube(query) {
    if (!query) return null;
    const results = await YouTube.search(query, { limit: 1 });
    if (!results || !results.length) return null;
    return results[0].url;
}

module.exports = { searchYouTube };
