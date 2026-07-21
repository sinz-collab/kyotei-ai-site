window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a752062b0c0cbf61b1df702ac3c7b8b2855db898/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a752062b0c0cbf61b1df702ac3c7b8b2855db898/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
