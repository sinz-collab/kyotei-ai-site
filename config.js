window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cfd770397fab410334bc3967c2b4d8efe2be1dad/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cfd770397fab410334bc3967c2b4d8efe2be1dad/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
