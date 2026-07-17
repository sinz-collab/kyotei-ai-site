window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bfb328c3bebf570b06c5fed1e96dbda81d073366/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bfb328c3bebf570b06c5fed1e96dbda81d073366/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
