window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/29b6fa90fccfb73fd1b439d3308302c22db40b56/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/29b6fa90fccfb73fd1b439d3308302c22db40b56/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
