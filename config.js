window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/443450c0d5a9625605a9805b550fba6be1f552eb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/443450c0d5a9625605a9805b550fba6be1f552eb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
