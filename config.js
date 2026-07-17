window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/55293024fb7fe6bc8c8b03057ff8fb6656e2ee58/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/55293024fb7fe6bc8c8b03057ff8fb6656e2ee58/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
