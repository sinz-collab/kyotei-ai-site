window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6dc58e77a0007c527e718c0ca2c0fec69096fc74/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6dc58e77a0007c527e718c0ca2c0fec69096fc74/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
