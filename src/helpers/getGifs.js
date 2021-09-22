
 export const getGifs = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=jZUo70fUVWIX0x6EwEzMJcKuvDjV5g7I`;
    const rpta = await fetch(url);
    const { data } = await rpta.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });

    return gifs;
  };