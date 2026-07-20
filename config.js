window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2ce363224146fa16786cf1904fdf93929eeee6e1/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2ce363224146fa16786cf1904fdf93929eeee6e1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
