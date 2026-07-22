window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7b2d41cadcd123398b0584811a6f7397b706a46c/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7b2d41cadcd123398b0584811a6f7397b706a46c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
