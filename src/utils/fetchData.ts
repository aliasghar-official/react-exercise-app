export const exerciseRequestOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
  },
};

// Configure requests to fetch videos related to a specific exercise
export const youtubeRequestOptions = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/search",
  params: {
    query: "rick roll",
    next: "EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D",
    hl: "en",
    gl: "US",
    upload_date: "t",
    type: "v",
    duration: "s",
    features: "li;hd",
    sort: "v",
  },
  headers: {
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env
      .VITE_RADPID_API_YOUTUBE_SEARCH_AND_DOWNLOAD_KEY,
  },
};

export const fetchData = async <T>(
  url: RequestInfo | URL,
  options?: RequestInit
) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data as T;
  } catch (error) {
    console.log(error);
  }
};
